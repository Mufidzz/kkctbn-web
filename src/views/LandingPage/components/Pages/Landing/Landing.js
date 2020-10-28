import React, {Fragment, useEffect, useMemo, useState} from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import mainImage from "assets/images/main-image.jpg"
import mainLogoWhite from "assets/images/logo-wh.png"
import {useMediaQuery} from "@material-ui/core";
import {Link} from "react-router-dom";
import logo_ristekbrin from "../../../../../assets/images/kemendikbud-logo-color.png";
import logo_umm from "../../../../../assets/images/umm-logo-color.png";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.67) 40%,rgba(48, 5, 10, 1) 200%), url(${mainImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        width: "100%",
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
        "&:hover": {
            background: "rgba(215, 44, 44, 1)",
        },
        [theme.breakpoints.down('sm')]: {
            height: 40
        }
    },
    escapeTop: {
        marginTop: 60 + theme.spacing(3)
    },
    counter: {
        fontSize: "8rem",
        color: "rgba(255,255,255,0.4) !important",
        [theme.breakpoints.down('sm')]: {
            fontSize: "5rem",
        }
    }
}))

const Landing = props => {

    //Function
    const calculateTimeLeft = () => {
        let difference = +new Date(2020, 9, 29, 23, 59, 58) - +new Date();
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
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))


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
                <Grid item container md={11} sm={11} xs={11} justify={"center"}
                      className={isMobile ? null : classes.escapeTop}>

                    <Typography variant={"h1"} className={classes.counter} align={"right"}
                                style={{position: "absolute", bottom: 10, right: 15}}>
                        <b>
                            {timeLeft.days | 0}D {isMobile ? <br/> : ""} {timeLeft.hours | 0}H
                            <br/>
                            {timeLeft.minutes | 0}M {isMobile ? <br/> : ""} {timeLeft.seconds | 0}S
                        </b>
                    </Typography>

                    {
                        isMobile ?
                            <img height={"100px"} src={mainLogoWhite} alt={"Logo KKCTBN"}/>
                            : null
                    }
                    <Grid item container direction={"row"} md={12} sm={12} xs={12} alignItems={"flex-start"}>

                        <Grid item container md={12} sm={10} justify={"flex-start"}
                              style={isMobile ? {marginBottom: 20} : null}>
                            <Grid item md={12}>
                                <Typography variant={isMobile ? "h3" : "h1"}>
                                    <b>KKCTBN 2020</b>
                                </Typography>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12} container justify={isMobile ? "center" : "flex-start"}>
                                {/*<Grid item md={6} sm={6} xs={6} container justify={"flex-end"}>*/}
                                <img src={logo_umm} height={isMobile ? "50px" : '100px'} alt={"UMM Logo"}/>
                                <img src={logo_ristekbrin} width={'auto'} height={isMobile ? "50px" : '100px'}
                                         alt={"Ristekbrin Logo"}/>
                                {/*</Grid>*/}
                                {/*<Grid item md={6} sm={6} xs={6} container justify={"flex-start"}>*/}
                                {/*</Grid>*/}
                            </Grid>
                        </Grid>

                        <Grid item md={12} style={isMobile ? {marginBottom: 20} : null}>
                            <Grid item md={6} sm={12}>
                                <Typography variant="caption" align={isMobile ? "center" : "left"}>
                                    Kontes Kapal Cepat Tak Berawak Nasional 2020 akan mengangkat tema yaitu <br/> “INOVASI TEKNOLOGI KEMARITIMAN DALAM PENANGANAN COVID 19”
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container md={12}>
                            <Grid item md={3} sm={12} xs={12}>
                                <Button component={Link} to={'/live-rank'} fullWidth variant="contained" className={classes.roundedButton}>
                                    <Typography variant={"button"}> Pengumuman Peringkat </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Landing;