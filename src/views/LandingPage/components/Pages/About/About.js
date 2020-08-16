import React, {Fragment} from 'react'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import clsx from "clsx";
import colorLogo from 'assets/images/logo-color.png';
import {OverlapTypography} from "../../../../../components";
import {Typography, useMediaQuery} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
        width: "100% !important"
    },
    circleBase : {
        borderRadius: "50%"
    },
    circle: {
        width: 200,
        height: 200,
        padding: 10,
        backgroundColor: "#FFFFFF",
        boxShadow: "90px 90px 7px -50px rgba(255,18,18,0.5), 0px 0px 28px 0px rgba(0,0,0,0.75)",
    },
    circleContainer: {
        height : 240,
        [theme.breakpoints.down("sm")] : {
            marginBottom: theme.spacing(2)
        }
    },
    mainText : {
        color : "#CF2424"
    },
    overlayText : {
        color : "rgba(255, 0, 0,.1)",
        userSelect : "none"
    }
}));

const About = props => {
    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

    return (
        <Fragment>
            <Grid container className={classes.root} justify={"center"} spacing={1}>
                <Grid item container md={10} xs={11} sm={11}>
                    <Grid item container className={classes.circleContainer} justify={"center"} alignItems={"center"} alignContent={"center"} md={4}>
                        <div className={clsx(classes.circle, classes.circleBase)}>
                            <Grid container alignItems={"center"} justify={"center"} style={{height : "100%"}}>
                                <img src={colorLogo} height={160} alt="KKCTBN Logo"/>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid item md={8}>
                        <OverlapTypography overlay={<Typography className={classes.overlayText} variant={"h2"}><b>Kontes Kapal Cepat <br/>Tak Berawak <br/> Nasional</b></Typography>}>
                            <Typography variant={"h4"}>Apa Itu</Typography>
                            <Typography className={classes.mainText} variant={"h2"}><b>KKCTBN</b></Typography>
                            <Typography variant={"h6"} align={isMobile ? "justify" : "left"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic</Typography>
                        </OverlapTypography>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>

    )

}

export default About;