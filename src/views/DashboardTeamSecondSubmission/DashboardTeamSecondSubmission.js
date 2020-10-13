import React, {Fragment, useEffect, useMemo, useState} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import {ENDPOINT} from "../../configs/api";
import {STORAGE_KEY} from "../../configs/local_storage";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
import {Typography} from "@material-ui/core";
import {ConfirmationModal, PrivatePage} from "../../components";
import {LDIKAA} from "./components";
import {FirstCategory} from "../DashboardTeamSubmission/components";
import LDKRSA from "./components/LDKRSA";
import LRLRAKRE from "./components/LRLRAKRE";
import UnderMaintenance from "./components/UnderMaintenance";
import SecondCategory from "./components/SecondCategory";


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

const DashboardTeamSecondSubmission = props => {
    let {cid} = props

    if (cid === undefined) {
        cid = props.match.params.cid
        cid = parseInt(Buffer.from(cid, 'base64').toString())
    }

    // let {cid} =  props
    const history = useHistory();

    const [formState, setFormState] = useState({
        TeamID: 0,
        CompetitionID: 0,
        SubmissionID: 0,
        CompetitionGroupID: 0,
        SecondSubmission : []
    })

    const [modalOpen, setModalOpen] = useState(false)
    const [modalAction, setModalAction] = useState(true)
    const [modalBody, setModalBody] = useState("")

    const handleFormChange = (e, i) => {
        let sS = [...formState.SecondSubmission]

        sS[i] = {
            Name : e.target.name,
            URL : e.target.value
        }

        setFormState({
            ...formState,
            SecondSubmission: sS
        })
    }

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
                        SubmissionID: cData['Submission']['ID'],
                        MediaURL: cData['Submission']['MediaURL'],
                        Description: cData['Submission']['Description'],
                        Assignment: {
                            ...formState.Assignment,
                            ID: cData['Submission']['AssignmentSubmissionID'],
                            OriginFileName: cData['Submission']['Assignment']["OriginFileName"]
                        },
                        CompetitionID: cData['CompetitionDetail']['ID'],
                        CompetitionGroupID: cData['CompetitionDetail']['CompetitionGroupID'],
                        SecondSubmission: cData["Submission"]["SecondSubmission"]
                    })
                } else {
                    setFormState({
                        ...formState,
                        CompetitionID: cData['CompetitionDetail']['ID'],
                        CompetitionGroupID: cData['CompetitionDetail']['CompetitionGroupID']
                    })
                }

                console.log("XDATA", cData)
            })
    }, [])

    const submit = () => {
        console.log(formState)
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



        const body = {
            SecondSubmission : formState.SecondSubmission
        }

        fetch(ENDPOINT.TEAM_SUBMISSION + formState.SubmissionID, {
            method: "PUT",
            body: JSON.stringify(body)
        })
            .then(res => {
                console.log(res.status)
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                console.log(resJSON);
                setModalAction(true)
                setModalBody(`Submission Success`)
            })
    }

    return (
        <PrivatePage whitelistKey={["ROLE_USER"]}>
            {formState.CompetitionID === 1 ?
                <LDKRSA handleFormChange={handleFormChange} formState={formState} setFormState={setFormState}
                        setModalBody={setModalBody} setModalAction={setModalAction} setModalOpen={setModalOpen}
                        submit={submit} useStyles={useStyles}/>
                : null}

            {formState.CompetitionID === 2 ?
                <LDIKAA handleFormChange={handleFormChange} formState={formState} setFormState={setFormState}
                        setModalBody={setModalBody} setModalAction={setModalAction} setModalOpen={setModalOpen}
                        submit={submit} useStyles={useStyles}/>
                : null}

            {formState.CompetitionID === 3 ?
                <LRLRAKRE handleFormChange={handleFormChange} formState={formState} setFormState={setFormState}
                        setModalBody={setModalBody} setModalAction={setModalAction} setModalOpen={setModalOpen}
                        submit={submit} useStyles={useStyles}/>
                : null}


            {formState.CompetitionGroupID === 2 ?
                <SecondCategory handleFormChange={handleFormChange} formState={formState} setFormState={setFormState}
                                setModalBody={setModalBody} setModalAction={setModalAction} setModalOpen={setModalOpen}
                                submit={submit} useStyles={useStyles}/>
                : null}


            <ConfirmationModal displayAction={modalAction} textBody={modalBody} open={modalOpen}
                               setOpen={setModalOpen}/>
        </PrivatePage>
    )

}

export default DashboardTeamSecondSubmission;