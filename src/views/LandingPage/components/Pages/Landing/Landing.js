import React, {Fragment, useEffect, useMemo, useState} from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import mainImage from "assets/images/main-image.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.67) 40%,rgba(48, 5, 10, 1) 200%), url(${mainImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: "#FFFFFF",
    },
    container: {
        marginLeft: 70
    },
    roundedButton: {
        background: "rgba(215, 44, 44, 0.76)",
        borderRadius: 9999999999,
        color: "#FFFFFF",
        marginTop: theme.spacing(2),
        "&:hover" : {
            background: "rgba(215, 44, 44, 1)",
        }
    },
    escapeTop : {
        marginTop : 60 + theme.spacing(3)
    },
    counter : {
        fontSize : "8rem",
        color:"rgba(255,255,255,0.4) !important"
    }
}))

const Landing = props => {

    //Function
    const calculateTimeLeft = () => {
        let difference = +new Date(2020, 7, 19, 23,59,58) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    }
    //State
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    //Variable
    const classes = useStyles();


    //USE
    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft])



    return (
        <Fragment>
            <Grid container className={clsx(classes.root)} justify={"center"}>
                <Grid item container md={11} justify={"center"} className={classes.escapeTop}>
                    <Typography variant="h1" className={classes.counter} align={"right"} style={{position: "absolute", bottom: 10, right: 15}}>
                        <b>
                            {timeLeft.days|0}D {timeLeft.hours|0}H
                            <br/>
                            {timeLeft.minutes|0}M {timeLeft.seconds|0}S
                        </b>
                    </Typography>
                    <Grid item container direction={"row"} md={12} alignItems={"flex-start"}>
                        <Grid item md={12}>
                            <Typography variant="h1">
                                <b>Selamat Datang</b>
                            </Typography>
                            <Typography variant="h2" style={{fontWeight: "400"}}>
                                KKCTBN 2020
                            </Typography>
                        </Grid>
                        <Grid item md={12}>
                            <Grid item md={6}>
                                <Typography variant="caption">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat sapien,
                                    hendrerit
                                    vitae urna et, iaculis tincidunt justo. Praesent blandit lacus eu nulla pretium, et
                                    tempus
                                    tellus interdum
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item md={3}>
                            <Button fullWidth variant="contained" className={classes.roundedButton}>
                                <Typography variant={"button"}> Daftar </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Landing;