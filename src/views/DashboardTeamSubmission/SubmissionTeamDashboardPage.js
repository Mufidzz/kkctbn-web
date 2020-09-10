import React, {Fragment, useEffect, useMemo, useState} from 'react'
import {CardContent, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import CardHeader from "@material-ui/core/CardHeader";
import FileInputComponent from "react-file-input-previews-base64";
import {ENDPOINT} from "../../configs/api";
import {STORAGE_KEY} from "../../configs/local_storage";
import {ConfirmationModal, PrivatePage} from "../../components";
import CircularProgress from "@material-ui/core/CircularProgress";
import {useHistory} from "react-router-dom"
import {FirstCategory, SecondCategory, ThirdCategory} from "./components";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    containedLightBlue: {
        color: '#FFF',
        backgroundColor: '#039be5',
        "&:hover": {
            backgroundColor: '#0277bd',
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: '#039be5'
            }
        }
    },
    label: {
        marginBottom: 10
    },
    containedTeal: {
        color: '#FFF',
        backgroundColor: '#009688',
        "&:hover": {
            backgroundColor: '#00796b',
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: '#009688'
            }
        }
    },
    containedOrange: {
        color: '#FFF',
        backgroundColor: '#ff5722',
        "&:hover": {
            backgroundColor: '#e64a19',
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: '#ff5722'
            }
        }
    },
    cardHeader: {
        color: "#FFF",
        backgroundColor: theme.palette.primary.main,
        fontWeight: 700
    }
}));


const SubmissionTeamDashboardPage = props => {
    const classes = useStyles();
    let {cid} = props.match.params
    cid = parseInt(Buffer.from(cid, 'base64').toString())
    const history = useHistory();

    const [formState, setFormState] = useState({
        Title: "",
        MediaURL: "",
        TeamID: 0,
        Description: "",
        CompetitionID: parseInt(cid),
        Assignment: {
            ID: 0,
            OriginFileName: "",
            Base: ""
        },
        CompetitionGroupID: 0
    })
    const [modalOpen, setModalOpen] = useState(false)
    const [modalAction, setModalAction] = useState(true)
    const [modalBody, setModalBody] = useState("")

    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        console.log("TID", formState.TeamID)
    }, [formState.TeamID])

    useMemo(() => {
        fetch(ENDPOINT.TEAM + "check",
            {
                method: "GET",
                headers: {
                    "Token": localStorage.getItem(STORAGE_KEY.JWT)
                }
            })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                const {Competitions} = resJSON['data']
                let cData;
                let isCDataFound = false;
                for (let i = 0; i < Competitions.length; i++) {
                    if (Competitions[i]['ID'] === parseInt(cid)) {
                        cData = Competitions[i];
                        isCDataFound = true;
                        break;
                    }
                }

                if (!isCDataFound) {
                    history.replace("/dashboard/team")
                    return
                }

                if (resJSON['data'] !== null) {
                    setFormState({
                        ...formState,
                        TeamID: resJSON['data']['ID'],
                        Title: cData['Submission']['Title'],
                        MediaURL: cData['Submission']['MediaURL'],
                        Description: cData['Submission']['Description'],
                        Assignment: {
                            ...formState.Assignment,
                            ID: cData['Submission']['AssignmentSubmissionID'],
                            OriginFileName: cData['Submission']['Assignment']["OriginFileName"]
                        },
                        CompetitionGroupID: cData['CompetitionDetail']['CompetitionGroupID']
                    })
                } else {
                    setFormState({
                        ...formState,
                        CompetitionGroupID: cData['CompetitionDetail']['CompetitionGroupID']
                    })
                }

                console.log("CDATA:", cData)

            })
    }, [])

    const submit = () => {
        setModalBody(
            <Fragment>
                <Grid container justify={"center"}>
                    <Grid item container justify={"center"} md={12} sm={12} xs={12}
                          style={{paddingTop: 10, paddingBottom: 10}}>
                        <CircularProgress color="primary"/>
                    </Grid>
                    <Grid item container justify={"center"} md={12} sm={12} xs={12}>
                        <Typography>Loading</Typography>
                    </Grid>
                </Grid>
            </Fragment>
        )
        setModalAction(false)
        setModalOpen(true)

        fetch(ENDPOINT.TEAM_SUBMISSION, {
            method: "POST",
            body: JSON.stringify(formState)
        })
            .then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    return res.json()
                }
            })
            // .then(res => res.json())
            .then(resJSON => {
                console.log(resJSON);
                setModalAction(true)
                setModalBody(`Submission ${resJSON['message']}`)
            })
    }

    return (
        <PrivatePage whitelistKey={["ROLE_USER"]}>
            {
                formState.CompetitionGroupID === 1 ? <FirstCategory handleFormChange={handleFormChange} formState={formState} setFormState={setFormState}
                                                                   setModalBody={setModalBody} setModalAction={setModalAction} setModalOpen={setModalOpen}
                                                                   submit={submit} useStyles={useStyles}/> : null

            }

            {
                formState.CompetitionGroupID === 2 ? <SecondCategory handleFormChange={handleFormChange} formState={formState} setFormState={setFormState}
                                                                     setModalBody={setModalBody} setModalAction={setModalAction} setModalOpen={setModalOpen}
                                                                     submit={submit} useStyles={useStyles}/> : null
            }

            {
                formState.CompetitionGroupID === 3 ? <ThirdCategory handleFormChange={handleFormChange} formState={formState} setFormState={setFormState}
                                                                    setModalBody={setModalBody} setModalAction={setModalAction} setModalOpen={setModalOpen}
                                                                    submit={submit} useStyles={useStyles}/> : null
            }

            <ConfirmationModal displayAction={modalAction} textBody={modalBody} open={modalOpen}
                               setOpen={setModalOpen}/>
        </PrivatePage>
    )
}

export default SubmissionTeamDashboardPage;