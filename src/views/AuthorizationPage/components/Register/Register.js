import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import mainLogo from '../../../../assets/images/logo-wh-bg.png';
import {OverlapTypography} from "../../../../components";
import {Typography} from "@material-ui/core";
import clsx from "clsx";
import {animated} from 'react-spring'


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
        borderRadius: '0 100px 0 0',
        color: 'white',
        width: '100%',
        height: "95%",
        padding: theme.spacing(10),
        paddingTop: theme.spacing(2),
        background: "linear-gradient(329deg, rgba(112,3,3,1) 0%, rgba(207,36,36,1) 100%)",
    },
}));


const Register = props => {
    const classes = useStyles();

    const {mover, ...rest} = props;

    return (
        <animated.div {...rest}>
            <Grid container justify={"flex-end"} direction={"row-reverse"}>
                <Grid item container md={11} justify={"space-between"}>
                    <Grid item container md={6} justify={"flex-end"} alignContent={"flex-end"} alignItems={"flex-end"}>
                        <Card className={classes.card}>
                            <Grid
                                container
                                justify="center"
                                alignItems="center"
                                alignContent={"space-around"}
                                style={{height: "100%"}}
                            >
                                <Grid item>
                                    <img style={{cursor: "pointer"}} src={mainLogo} height={200} alt={"Logo KKCTBN"}/>
                                </Grid>

                                <Grid item>
                                    <Typography variant={"h4"} align={"center"}><b>Create an Account</b></Typography>
                                    <Typography variant={"h6"} align={"center"}>To join with us and get your dashboard,
                                        please fill all needed information</Typography>
                                </Grid>

                                <Grid item md={12}>
                                    <Button fullWidth variant="outlined"
                                            onClick={() => mover("login")}
                                            className={clsx(classes.button, classes.register)}>Sign In</Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>

                    <Grid item container md={6} justify={"flex-start"} direction={"row-reverse"}
                          style={{height: "100vh"}}>
                        <Grid item container md={10} justify={"center"} alignItems={"center"} alignContent={"center"}
                              style={{height: "100%"}}>
                            <Grid item md={12}>
                                <OverlapTypography
                                    overlay={<Typography className={classes.overlayText} variant={"h2"}><b>Sign
                                        up, <br/>KKCTBN 2020</b></Typography>}>
                                    <Typography className={classes.mainText} variant={"h2"}><b>Create
                                        Account</b></Typography>
                                </OverlapTypography>
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    label="Email"
                                    type="email"
                                    autoFocus
                                    className={classes.textField}
                                />

                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    label="Password"
                                    type="password"
                                    id="password"
                                    className={classes.textField}
                                />
                                <TextField
                                    variant="filled"
                                    required
                                    fullWidth
                                    label="Retype Password"
                                    type="password"
                                    id="password"
                                />
                            </Grid>
                            <Grid item md={8}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    className={clsx(classes.button, classes.submit)}>
                                    Sign up
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </animated.div>
    )
}


export default Register
