import React, {useMemo, useState} from 'react'
import {CardContent, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import CardHeader from "@material-ui/core/CardHeader";
import {STORAGE_KEY} from "../../configs/local_storage";
import {ENDPOINT} from "../../configs/api";
import FileInputComponent from 'react-file-input-previews-base64'
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {},
    header: {
        marginTop: '1vh',
        marginBottom: '2vh',
    },
    containedTeal: {
        color: '#FFFFFF',
        backgroundColor: '#009688',
        "&:hover": {
            backgroundColor: '#00796b',
            "@media (hover: none)": {
                backgroundColor: '#009688'
            }
        }
    },
    containedOrange: {
        color: '#FFFFFF',
        backgroundColor: '#ff5722',
        "&:hover": {
            backgroundColor: '#e64a19',
            "@media (hover: none)": {
                backgroundColor: '#ff5722'
            }
        }
    },

    cardHeader: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff'
    },
    saveButton: {
        color: "#FFFFFF",
        backgroundColor: theme.palette.primary.main,
        height: 50,
        "&:hover": {
            backgroundColor: "#a61d1d",
        }
    }

}));


const DashboardUser = props => {
    //Variable
    const classes = useStyles();

    //State
    const [state, setState] = useState({
        request: false,
        requestState: "",
        isUserFileChanged: false,
    })

    const [formState, setFormState] = useState({
        ID: -1,
        FullName: "",
        Email: "",
        StudentID: "",
        Phone: "",
        Address: ""
    })

    const [userFile, setUserFile] = useState(
        {
            StudentIdentityCardSubmission: {
                ID: 0,
                OriginFileName: "",
                Base: ""
            },
            IdentityCardSubmission: {
                ID: 0,
                OriginFileName: "",
                Base: ""
            }
        }
    )

    //Use
    useMemo(() => {
        const userData = JSON.parse(localStorage.getItem(STORAGE_KEY.USER_DATA));
        setFormState(userData)

        fetch(ENDPOINT.USER_SUBMISSION + userData['ID'], {method: "GET"})

            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                console.log(resJSON['data'])
                setUserFile({
                    ...userFile,
                    StudentIdentityCardSubmission: resJSON['data']['StudentIdentityCardSubmission'] !== undefined ? resJSON['data']['StudentIdentityCardSubmission'] : {},
                    IdentityCardSubmission: resJSON['data']['IdentityCardSubmission'] !== undefined ? resJSON['data']['IdentityCardSubmission'] : {}
                })
            })
        return () => {
        }

    }, [])

    //Handle
    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }


    //Function
    const save = () => {
        const token = localStorage.getItem(STORAGE_KEY.JWT);

        fetch(ENDPOINT.USER + formState.ID, {
            method: 'PUT',
            headers: {
                'Token': token
            },
            body: JSON.stringify(formState),

        })
            .then(res => {
                if (res.status >= 200) {
                    return res.json();
                }
            })
            .then(resJSON => {
                localStorage.setItem(STORAGE_KEY.USER_DATA, JSON.stringify(resJSON["data"]))
                alert(`Update User ${resJSON["message"]}`)
            })

        console.log(JSON.stringify({
                UserID: formState.ID,
                ...userFile
            }
        ))

        if (state.isUserFileChanged) {
            fetch(ENDPOINT.USER_SUBMISSION, {
                method: "POST",
                body: JSON.stringify({
                    UserID: formState.ID,
                    ...userFile
                })
            })
                .then(res => {
                    if (res.status === 200) {
                        return res.json()
                    }
                })
                .then(resJSON => {
                    setState({
                        ...state,
                        isUserFileChanged: false
                    })
                    setUserFile({
                        ...userFile,
                        StudentIdentityCardSubmission: {
                            ...resJSON['data']['StudentIdentityCardSubmission'],
                            Base: ""
                        },
                        IdentityCardSubmission: {
                            ...resJSON['data']['IdentityCardSubmission'],
                            Base: ""
                        }
                    })
                })
        }
    }


    return (
        <Grid container>
            <Card style={{width: "100%"}}>
                <CardHeader
                    title={'Personal Data'}
                    className={classes.cardHeader}
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item md={6} sm={12} xs={12} style={{marginTop: 20}}>
                            <TextField
                                onChange={handleFormChange}
                                value={formState.FullName}
                                className={classes.margin}
                                label="Full name according to ID card"
                                required
                                variant="filled"
                                placeholder={"Entry your full name."}
                                fullWidth
                                helperText="ex : Joni Irawan"
                                name="FullName"
                            />
                        </Grid>

                        <Grid item md={6} sm={12} xs={12} style={{marginTop: 20}}>
                            <TextField
                                onChange={handleFormChange}
                                disabled
                                value={formState.Email}
                                className={classes.margin}
                                label="Email Address"
                                required
                                variant="filled"
                                placeholder={"Entry your email address."} fullWidth
                                helperText="Email Cannot be changed"
                            />
                        </Grid>

                        <Grid item md={12} sm={12} xs={12} style={{marginTop: 20}}>
                            <TextField
                                onChange={handleFormChange}
                                value={formState.StudentID}
                                className={classes.margin}
                                label="Student ID Number"
                                required
                                variant="filled"
                                placeholder={"Entry your student id number"} fullWidth
                                helperText="The student ID number of each campus has its own characteristics"
                                name="StudentID"
                            />
                        </Grid>

                        <Grid item md={12} sm={12} xs={12} style={{marginTop: 20}}>
                            <TextField
                                onChange={handleFormChange}
                                value={formState.Phone}
                                className={classes.margin}
                                label="Phone Number"
                                required
                                variant="filled"
                                placeholder={"Entry your phone number"} fullWidth
                                helperText="ex : 08123456..."
                                name="Phone"
                            />
                        </Grid>

                        <Grid item md={12} sm={12} xs={12} style={{marginTop: 20}}>
                            <TextField
                                onChange={handleFormChange}
                                value={formState.Address}
                                label="Complete Address"
                                placeholder="Entry complete addresss"
                                multiline
                                fullWidth
                                helperText="ex : Jalan Raya Tlogomas No. 246 Tlogomas, Babatan, Tegalgondo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144"
                                variant="filled"
                                name="Address"
                            />
                        </Grid>


                        <Grid item md={12} sm={12} xs={12} style={{marginTop: 10}}>
                            <Typography variant={'body2'} style={{marginBottom: 10}}>
                                Student ID Card* (pdf file)
                            </Typography>
                        </Grid>

                        <Grid item md={2}>
                            <FileInputComponent
                                parentStyle={{margin: "0 !important"}}
                                labelText={"Current : -"}
                                labelStyle={{display: "none"}}
                                buttonComponent={
                                    <Button fullWidth variant="contained" component="span"
                                            className={classes.containedOrange}>
                                        {userFile.StudentIdentityCardSubmission.OriginFileName !== "" ? "Reupload" : "Upload"}
                                    </Button>
                                }
                                multiple={false}
                                imagePreview={false}
                                callbackFunction={(fileMeta) => {
                                    setUserFile({
                                        ...userFile,
                                        StudentIdentityCardSubmission: {
                                            ...userFile.StudentIdentityCardSubmission,
                                            OriginFileName: fileMeta['name'],
                                            Base: fileMeta['base64']
                                        }
                                    })
                                    setState(({
                                        ...state,
                                        isUserFileChanged: true
                                    }))
                                }}
                                accept="application/pdf"
                            />
                        </Grid>

                        <Grid item md={2}>
                            <Button fullWidth variant="contained" component="span" className={classes.containedTeal}
                                    onClick={() => {
                                        window.open(ENDPOINT.SUBMISSION + userFile.StudentIdentityCardSubmission.ID + "/download", '_blank')
                                    }}>
                                Download
                            </Button>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12} style={{marginTop: 10}}>
                            <Typography variant={'caption'} style={{marginBottom: 10}}>
                                Current
                                : {userFile.StudentIdentityCardSubmission.OriginFileName !== "" ? userFile.StudentIdentityCardSubmission.OriginFileName : '-'}
                            </Typography>
                        </Grid>


                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant={'body2'}>
                                Identity Card* (pdf file)
                            </Typography>
                        </Grid>

                        <Grid item md={2}>

                            <FileInputComponent
                                parentStyle={{margin: "0 !important"}}
                                labelText={"Current : -"}
                                labelStyle={{display: "none"}}
                                buttonComponent={
                                    <Button fullWidth variant="contained" component="span"
                                            className={classes.containedOrange}>
                                        {userFile.IdentityCardSubmission.OriginFileName !== "" ? "Reupload" : "Upload"}

                                    </Button>
                                }
                                multiple={false}
                                imagePreview={false}
                                callbackFunction={(fileMeta) => {
                                    setUserFile({
                                        ...userFile,
                                        IdentityCardSubmission: {
                                            ...userFile.IdentityCardSubmission,
                                            OriginFileName: fileMeta['name'],
                                            Base: fileMeta['base64']
                                        }
                                    })
                                    setState(({
                                        ...state,
                                        isUserFileChanged: true
                                    }))
                                }}
                                accept="application/pdf"
                            />
                        </Grid>

                        <Grid item md={2}>
                            <Button fullWidth variant="contained" component="span" className={classes.containedTeal}
                                    onClick={() => {
                                        window.open(ENDPOINT.SUBMISSION + userFile.IdentityCardSubmission.ID + "/download", '_blank')
                                    }}>
                                Download
                            </Button>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant={'caption'}>
                                Current
                                : {userFile.IdentityCardSubmission.OriginFileName !== "" ? userFile.IdentityCardSubmission.OriginFileName : '-'}
                            </Typography>
                        </Grid>

                        <Grid item md={12}>
                            <hr style={{marginTop: 25, maxWidth: '100%'}}/>
                        </Grid>

                        <Grid item container md={12} sm={12} xs={12} style={{textAlign: "right", marginTop: 25}}
                              justify={"flex-end"}>

                            {state.request ?
                                <Grid item md={6} sm={12} xs={12}>
                                    <CircularProgress/>
                                    <Typography variant={"caption"}>
                                        {state.requestState}
                                    </Typography>
                                </Grid>


                                :
                                <Grid item md={6} sm={12} xs={12}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={save}
                                        className={classes.saveButton}
                                        startIcon={<SaveIcon/>}
                                    >
                                        Save
                                    </Button>
                                </Grid>
                            }
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Grid>
    )
}

export default DashboardUser;