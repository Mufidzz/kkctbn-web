import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import mainLogo from '../../../../assets/images/logo-wh-bg.png';
import {OverlapTypography} from "../../../../components";
import {Typography} from "@material-ui/core";
import clsx from "clsx";
import {animated} from "react-spring";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {Link} from "react-router-dom";


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
        [theme.breakpoints.down("sm")] : {
            padding: theme.spacing(3),
            borderRadius: '0 0 0 0',
        }
    },
}));

const Login = props => {
    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down("sm"))
    const {mover, ...rest} = props
    
    const [formState, setFormState] = useState({      
        Email : "",
        Password: ""
    })

    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    return (
        <animated.div {...rest}>
            <Grid container justify={"flex-end"}>
                <Grid item container md={11} sm={12} xs={12} justify={isMobile ? "center" : "space-between"}>
                    <Grid item container md={6} sm={11} xs={11} justify={isMobile ? "center" : "flex-start"} style={isMobile ? {minHeight: "60vh"} : {height: "100vh"}}>
                        <Grid item container md={10} sm={12} xs={12} justify={"center"} alignItems={"center"} alignContent={"center"}
                              style={{height: "100%"}}>
                            <Grid item md={12} sm={12} xs={12} container>
                                <OverlapTypography
                                    overlay={<Typography className={classes.overlayText} variant={"h2"}><b>Sign
                                        in, <br/>KKCTBN 2020</b></Typography>}>
                                    <Typography className={classes.mainText} variant={"h2"}><b>Sign in</b></Typography>
                                </OverlapTypography>
                                <TextField
                                		onChange={handleFormChange}
		                                value={formState.Email}
                                    variant="filled"
                                    required
                                    fullWidth
                                    label="Email"
                                    name="Email"
                                    autoComplete="email"
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
                                />
                            </Grid>
                            <Grid item md={8} sm={10} xs={10}>
                                <Button
                                    component={Link}
                                    to={"/dashboard/user"}

                                    fullWidth
                                    variant="contained"
                                    className={clsx(classes.button, classes.submit)}>
                                    Sign up
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>


                    <Grid item container md={6} sm={12} xs={12} justify={"flex-end"} alignContent={"flex-end"} alignItems={"flex-end"}>
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
                                        <img style={{cursor: "pointer"}} src={mainLogo} height={200} alt={"Logo KKCTBN"}/>
                                    </Grid>
                                }

                                <Grid item>
                                    <Typography variant={"h4"} align={"center"}><b>Welcome Back,
                                        Gladiator </b></Typography>
                                    <Typography variant={"h6"} align={"center"}>To access your dashboard please login
                                        with your account</Typography>
                                </Grid>

                                <Grid item md={12} xs={11} sm={11}>
                                    <Button fullWidth variant="outlined"
                                            onClick={() => mover("register")}
                                            className={clsx(classes.button, classes.register)}>Register</Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </animated.div>
    )
}


export default Login
