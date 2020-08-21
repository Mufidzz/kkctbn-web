import React, {useMemo, useState} from 'react'
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
    const {cid} = props.match.params


    const [formState, setFormState] = useState({
        Title: "",
        MediaURL: "",
        TeamID: 0,
        CompetitionID : parseInt(cid),
        Assignment: {
            ID: 0,
            OriginFileName: "",
            Base: ""
        }
    })

    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    useMemo(() => {

        fetch(ENDPOINT.TEAM + "check",
            {
                method: "GET",
                headers: {
                    "Token" : localStorage.getItem(STORAGE_KEY.JWT)
                }
            })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                const {Competitions} = resJSON['data']

                console.log(resJSON['data']['Competitions'])
                let cData;

                for (let i = 0; i < Competitions.length; i++) {
                    if(Competitions[i]['ID'] === parseInt(cid)) {
                        cData = Competitions[i];
                        break;
                    }
                }

                if (resJSON['data'] !== null) {
                    setFormState({
                        ...formState,
                        TeamID: cData['ID'],
                        Title: cData['Submission']['Title'],
                        MediaURL: cData['Submission']['MediaURL'],
                        Assignment: {
                            ...formState.Assignment,
                            ID: cData['Submission']['AssignmentSubmissionID'],
                            OriginFileName: cData['Submission']['Assignment']["OriginFileName"]
                        }
                    })
                }
            })
    }, [])

    const submit = () => {

        console.log(formState)

        fetch(ENDPOINT.TEAM_SUBMISSION, {
            method: "POST",
            body: JSON.stringify(formState)
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                console.log(resJSON)
                alert(`Submission ${resJSON['message']}`)
            })
    }

    return (
        <Grid container>
            <Card style={{width: '100%'}}>
                <CardHeader
                    title={'Submission'}
                    className={classes.cardHeader}
                />
                <CardContent style={{marginTop: 25}}>
                    <Grid container spacing={2}>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                onChange={handleFormChange}
                                value={formState.Title}
                                name="Title"
                                className={classes.margin}
                                label="Title of Innovation"
                                required
                                variant="filled"
                                placeholder={"Entry your title of innovation."} fullWidth
                            />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <hr width={"100%"}/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant={'body2'}><b>Submission</b></Typography>
                        </Grid>
                        <Grid item md={8} sm={12} xs={12}>
                            <TextField
                                onChange={handleFormChange}
                                value={formState.MediaURL}
                                name="MediaURL"
                                className={classes.margin}
                                label="Youtube URL"
                                required
                                variant="filled"
                                placeholder={"Entry your youtube url."} fullWidth
                            />
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant={'body2'} style={{marginTop: 10}}>Submission File* (pdf/jpg/png/obj)
                                10MB Max</Typography>
                        </Grid>

                        <Grid item md={2} sm={6} xs={6}>
                            <FileInputComponent
                                parentStyle={{margin: "0 !important"}}
                                labelText={"Current : -"}
                                labelStyle={{display: "none"}}
                                buttonComponent={
                                    <Button fullWidth variant="contained" component="span"
                                            className={classes.containedOrange}>
                                        {formState.Assignment.OriginFileName !== "" ? "Reupload" : "Upload"}
                                    </Button>
                                }
                                multiple={false}
                                imagePreview={false}
                                callbackFunction={(fileMeta) => {
                                    setFormState({
                                        ...formState,
                                        Assignment: {
                                            ...formState.Assignment,
                                            OriginFileName: fileMeta['name'],
                                            Base: fileMeta['base64']
                                        }
                                    })
                                }}
                                accept="application/pdf, image/*, @file/obj"
                            />
                        </Grid>

                        <Grid item md={2} sm={6} xs={6}>
                            <Button fullWidth variant="contained" component="span" className={classes.containedTeal}
                                    onClick={() => {
                                        window.open(ENDPOINT.SUBMISSION + formState.Assignment.ID + "/download", '_blank')
                                    }}>
                                Download
                            </Button>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12} style={{marginTop: 10}}>
                            <Typography variant={'caption'} style={{marginBottom: 10}}>
                                Current
                                : {formState.Assignment.OriginFileName !== "" ? formState.Assignment.OriginFileName : '-'}
                            </Typography>
                        </Grid>

                        <Grid item container md={12} sm={12} xs={12} justify={"flex-end"} style={{marginTop: 10}}>
                            <Grid item md={6} sm={12} xs={12}>
                                <Button onClick={submit} fullWidth variant={"contained"} size={"large"}
                                        color={'primary'} endIcon={<SendIcon/>}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Grid>
    )
}

export default SubmissionTeamDashboardPage;