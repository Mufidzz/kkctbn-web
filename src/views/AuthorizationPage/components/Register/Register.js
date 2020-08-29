import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import mainLogo from '../../../../assets/images/logo-wh-bg.png';
import {ConfirmationModal, OverlapTypography} from "../../../../components";
import {Typography} from "@material-ui/core";
import clsx from "clsx";
import {animated} from 'react-spring'
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {ENDPOINT} from "../../../../configs/api";


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

        [theme.breakpoints.down("sm")]: {
            height: "35px",
        }
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
        borderRadius: '0 100px 0 0',
        color: 'white',
        width: '100%',
        height: "95%",
        padding: theme.spacing(10),
        paddingTop: theme.spacing(2),
        background: "linear-gradient(329deg, rgba(112,3,3,1) 0%, rgba(207,36,36,1) 100%)",
        [theme.breakpoints.down("sm")]: {
            height: "100%",
            borderRadius: '0 0 0 0',
            padding: theme.spacing(1),
        }
    },

    mobileCardContainer: {
        minHeight: '27.5vh',
    }
}));


const Register = props => {
    //Variable
    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"))
    const {mover, ...rest} = props;

    //State
    const [formState, setFormState] = useState({
        Email: "",
        Password: "",
        RetypePassword: ""
    })

    const [apiData, setApiData] = useState({
        Message: ""
    })
    const [modalOpen, setModalOpen] = useState(false)
    const [modalBody, setModalBody] = useState("")
    const [isSuccess, setSuccess] = useState(false)

    //Use

    useEffect(() => {
        if (isSuccess && !modalOpen) {
            mover("login")
        }
    }, [isSuccess, modalOpen])

    //Handle
    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    //Function

    const register = () => {
        if(formState.Password === formState.RetypePassword) {
            fetch(ENDPOINT.USER, {
                method: "POST",
                body: JSON.stringify(formState)
            })
                .then(res => {
                    if (res.status === 200) {
                        return res.json()
                    }
                })
                .then(resJSON => {
                    setModalBody(`Register Status : ${resJSON['message']||"Success"}\nCheck your Email for Verification`)
                    setModalOpen(true)
                    setSuccess(true)
                })
        } else {
            setModalBody(`Password Not Match`)
            setModalOpen(true)
        }
    }


    return (
        <animated.div {...rest}>

            <Grid container justify={"flex-end"} direction={"row-reverse"}>
                <Grid item container md={11} sm={12} xs={12} justify={"space-between"}>
                    <Grid item container md={6} sm={12} xs={12} justify={"flex-end"} alignContent={"flex-end"}
                          alignItems={"flex-end"} className={clsx({[classes.mobileCardContainer]: isMobile})}>
                        <Card className={classes.card}>
                            <Grid
                                container
                                justify="center"
                                alignItems="center"
                                alignContent={isMobile ? "center" : "space-around"}
                                style={{height: "100%"}}
                            >

                                {isMobile ? null :
                                    <Grid item>
                                        <img style={{cursor: "pointer"}} src={mainLogo} height={200}
                                             alt={"Logo KKCTBN"}/>
                                    </Grid>}


                                <Grid item md={12} sm={12} xs={12}>
                                    <Typography variant={"h4"} align={"center"}><b>Buat sebuah Akun</b></Typography>
                                    {isMobile ? <Typography variant={"h6"} align={"center"}>or</Typography> :
                                        <Typography variant={"h6"} align={"center"}>Untuk bergabung dengan kami dan
                                            mendapatkan dashboard Anda,
                                            mohon isi semua informasi yang dibutuhkan</Typography>}
                                </Grid>

                                <Grid item md={12} sm={10} xs={10}>
                                    <Button fullWidth variant="outlined"
                                            onClick={() => mover("login")}
                                            className={clsx(classes.button, classes.register)}>Masuk</Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>

                    <Grid item container md={6} sm={12} xs={12} justify={isMobile ? "center" : "flex-start"}
                          direction={"row-reverse"}
                          style={isMobile ? {minHeight: "60vh"} : {height: "100vh"}}>
                        <Grid item container md={10} sm={11} xs={11} justify={"center"}
                              alignItems={isMobile ? "space-evenly" : "center"}
                              alignContent={isMobile ? "space-evenly" : "center"}
                              style={{height: "100%"}}>
                            <Grid item md={12}>
                                <OverlapTypography
                                    overlay={<Typography className={classes.overlayText} variant={"h2"}><b>Daftar,
                                        <br/>KKCTBN 2020</b></Typography>}>
                                    <Typography className={classes.mainText} variant={"h2"}><b>Buat Akun</b></Typography>
                                </OverlapTypography>
                                <TextField
                                    onChange={handleFormChange}
                                    value={formState.Email}
                                    variant="filled"
                                    required
                                    fullWidth
                                    name="Email"
                                    label="Email"
                                    type="email"
                                    autoFocus
                                    className={classes.textField}
                                />

                                <TextField
                                    onChange={handleFormChange}
                                    value={formState.Password}
                                    variant="filled"
                                    required
                                    fullWidth
                                    name="Password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    className={classes.textField}
                                />
                                <TextField
                                    onChange={handleFormChange}
                                    value={formState.RetypePassword}
                                    variant="filled"
                                    name="RetypePassword"
                                    required
                                    fullWidth
                                    label="Masukkan ulang Password"
                                    type="password"
                                    id="password"
                                />
                            </Grid>
                            <Grid item md={8} sm={11} xs={11} style={isMobile ? {paddingBottom: "30px"} : null}>
                                <Button
                                    onClick={register}
                                    fullWidth
                                    variant="contained"
                                    className={clsx(classes.button, classes.submit)}>
                                    Daftar
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <ConfirmationModal textBody={modalBody} open={modalOpen} setOpen={setModalOpen}/>

        </animated.div>
    )
}


export default Register
