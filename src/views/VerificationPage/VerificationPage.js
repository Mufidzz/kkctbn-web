import React, {useMemo, useState} from "react";
import Page from "../../components/Page";
import {Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import {OverlapTypography} from "../../components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import mainLogo from "../../assets/images/logo-wh-bg.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useHistory} from "react-router-dom";
import {makeStyles} from "@material-ui/core/styles";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {ENDPOINT} from "../../configs/api";
import theme from "../../theme";

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh"
    },
    mainText: {
        color: "#CF2424"
    },
    overlayText: {
        color: "rgba(255, 0, 0,.1)",
        userSelect: "none"
    },
    button: {
        color: 'white',
        borderRadius: 99999999999999999,
        marginTop: theme.spacing(3),
        height: "50px",
        justifyContent: 'center',
        alignItems: 'center',
    },
    submit: {
        background: "linear-gradient(329deg, rgba(168,0,0,1) 0%, rgba(207,36,36,1) 100%)",
    },
    register: {
        border: "solid 2px #FFFFFF",
    },
    textField: {
        marginBottom: theme.spacing(2)
    },
    card: {
        borderRadius: '100px 0 0 0',
        color: 'white',
        width: '100%',
        height: "95%",
        padding: theme.spacing(10),
        paddingTop: theme.spacing(2),
        background: "linear-gradient(329deg, rgba(112,3,3,1) 0%, rgba(207,36,36,1) 100%)",
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(3),
            borderRadius: '0 0 0 0',
        }
    },
}));

const VerificationPage = props => {
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"))
    const classes = useStyles();
    const history = useHistory();

    const [formState, setFormState] = useState({
        Email: "",
        Password: ""
    })

    const [collegeList, setCollegeList] = useState([])
    const [selectedCollege, setSelectedCollege] = useState({
        ID: 0,
        NPSN: 0,
        Name: "",
        Website: ""
    })


    useMemo(() => {
        fetch(ENDPOINT.COLLEGE, {method: "GET"})
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                console.log(resJSON)
                setCollegeList(resJSON['data'])
            })
    }, [])

    const handleSetCollege = (e, v) => {
        console.log(v)
        setSelectedCollege({
            ID: v.ID,
            NPSN: v.NPSN,
            Name: v.Name,
            Website: v.Website,
        })
    }

    const {id, vt} = props.match.params

    const verify = () => {
        if(selectedCollege.ID !== 0) {
            fetch(ENDPOINT.USER +  `${id}/verify/${vt}/${selectedCollege.ID}`, {method: "GET"})
                .then(res => {
                    if (res.status >= 200){
                        return res.json()
                    }
                })
                .then(resJSON => {
                    console.log(resJSON)
                    alert(`Verify Status : ${resJSON['message']}`);
                    if (resJSON.message === "Registration Verification Success") {
                        history.replace("/auth")
                    }
                })
        }
    }


    return (
        <Page title={"KKCTBN 2020 - Verification"}>
            <Grid container justify={"flex-end"}>
                <Grid item container md={11} sm={12} xs={12} justify={isMobile ? "center" : "space-between"}>
                    <Grid item container md={6} sm={11} xs={11} justify={isMobile ? "center" : "flex-start"}
                          style={isMobile ? {minHeight: "60vh"} : {height: "100vh"}}>
                        <Grid item container md={10} sm={12} xs={12} justify={"center"} alignItems={"center"}
                              alignContent={"center"}
                              style={{height: "100%"}}>
                            <Grid item md={12} sm={12} xs={12} container>
                                <OverlapTypography
                                    overlay={<Typography className={classes.overlayText} variant={"h2"}><b>Fill
                                        Verification<br/>Below</b></Typography>}>
                                    <Typography className={classes.mainText}
                                                variant={"h2"}><b>Verification</b></Typography>
                                </OverlapTypography>
                                <Autocomplete
                                    disableClearable
                                    fullWidth
                                    options={collegeList}
                                    getOptionLabel={(option) => option.Name}
                                    onChange={(e, v) => handleSetCollege(e, v)}
                                    renderInput={(params) =>
                                        <TextField {...params} fullWidth
                                                   label="College Name"
                                                   variant="filled"/>
                                    }
                                />
                            </Grid>

                            {selectedCollege.ID !== 0 ?

                                <Grid item md={12} sm={12} xs={12}>
                                    <Typography variant={"body2"} align={"center"} style={{marginTop: 15}}><b>College
                                        Information</b></Typography>
                                    <Typography variant={"body2"} align={"center"}
                                                style={{marginTop: 5}}>{selectedCollege.NPSN}</Typography>
                                    <Typography variant={"body2"} align={"center"}
                                                style={{marginTop: 5}}>{selectedCollege.Name}</Typography>
                                    <Typography variant={"body2"} align={"center"}
                                                style={{marginTop: 5}}>{selectedCollege.Website}</Typography>
                                </Grid>
                                : null
                            }

                            <Grid item md={8} sm={10} xs={10}>
                                <Button
                                    style={{color: "#FFFFFF"}}
                                    disabled={selectedCollege.ID === 0}
                                    fullWidth
                                    color={"primary"}
                                    variant="contained"
                                    onClick={verify}
                                    className={clsx(classes.button, classes.submit)}>
                                    {selectedCollege.ID !== 0 ? "Verify" : "Select College First"}
                                </Button>
                            </Grid>
                        </Grid>


                    </Grid>


                    <Grid item container md={6} sm={12} xs={12} justify={"flex-end"} alignContent={"flex-end"}
                          alignItems={"flex-end"}>
                        <Card className={classes.card}>
                            <Grid
                                container
                                justify="center"
                                alignItems="center"
                                alignContent={"space-around"}
                                style={{height: "100%"}}
                            >
                                {isMobile ? null :
                                    <Grid item>
                                        <img style={{cursor: "pointer"}} src={mainLogo} height={200}
                                             alt={"Logo KKCTBN"}/>
                                    </Grid>
                                }

                                <Grid item>
                                    <Typography variant={"h4"} align={"center"}><b>Welcome Back </b></Typography>
                                    <Typography variant={"h6"} align={"center"}>Your Registration almost Finish Please
                                        Fill All Form</Typography>
                                </Grid>

                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Page>
    )
}

export default VerificationPage