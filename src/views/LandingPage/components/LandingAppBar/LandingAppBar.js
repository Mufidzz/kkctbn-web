import React, {Fragment, useMemo} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import ElevationScroll from "../../../../components/ElevationScroll";
import Grid from "@material-ui/core/Grid";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import whiteLogo from 'assets/images/logo-wh.png';
import colorLogo from 'assets/images/logo-color.png';
import {Link as Scroll} from 'react-scroll'
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2)
    },
    rootElevated: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1)
    },
    activeItem: {
        borderBottom: "solid 4px #CF2424",
        transition: ".2s"

    },
    inactiveItem: {
        transition: ".2s"
    }
}));


const LandingAppBar = props => {
    //Variable
    const classes = useStyles();
    const {window} = props

    const ElevationTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return (
        <Fragment>
            <ElevationScroll trigger={ElevationTrigger}>
                <AppBar className={ElevationTrigger ? classes.rootElevated : classes.root}
                        color={ElevationTrigger ? "#FFFFFF" : "transparent"}>
                    <Toolbar>
                        <Grid container justify={"space-evenly"}>
                            <Grid item container justify={"space-evenly"} alignContent={"center"} alignItems={"center"}
                                  md={9} xs={10}>
                                <Scroll
                                    activeClass={classes.activeItem}
                                    className={classes.inactiveItem}
                                    to="landing"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    <Typography
                                                style={{cursor: "pointer", color: ElevationTrigger ? "#000000" : "#FFFFFF"}}
                                                variant="h6"
                                                color="primary">
                                        Home
                                    </Typography>
                                </Scroll>

                                <Scroll
                                    activeClass={classes.activeItem}
                                    className={classes.inactiveItem}
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-95}
                                    duration={500}
                                >
                                    <Typography
                                        style={{cursor: "pointer", color: ElevationTrigger ? "#000000" : "#FFFFFF"}}
                                        variant="h6"
                                        color="primary">
                                        About
                                    </Typography>
                                </Scroll>

                                <Scroll
                                    activeClass={classes.activeItem}
                                    className={classes.inactiveItem}
                                    to="competition"
                                    spy={true}
                                    smooth={true}
                                    offset={-95}
                                    duration={500}
                                >
                                <Typography style={{cursor: "pointer", color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6"
                                            color="primary">
                                    Competition
                                </Typography>
                                </Scroll>


                                <img src={ElevationTrigger ? colorLogo : whiteLogo} alt={"KKCTBN LOGO"}
                                     height={ElevationTrigger ? "80" : "125"}/>

                                <Scroll
                                    activeClass={classes.activeItem}
                                    className={classes.inactiveItem}
                                    to="timeline"
                                    spy={true}
                                    smooth={true}
                                    offset={-95}
                                    duration={500}
                                >
                                    <Typography style={{cursor: "pointer", color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6"
                                                color="primary">
                                        Timeline
                                    </Typography>
                                </Scroll>

                                <Scroll
                                    activeClass={classes.activeItem}
                                    className={classes.inactiveItem}
                                    to="faq"
                                    spy={true}
                                    smooth={true}
                                    offset={-95}
                                    duration={500}
                                >
                                <Typography style={{cursor: "pointer", color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6"
                                            color="primary">
                                    FAQ
                                </Typography>
                                </Scroll>



                                <Typography component={Link} to={"/auth"} style={{cursor: "pointer", color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6"
                                            color="primary">
                                    Login
                                </Typography>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
        </Fragment>
    )

}

export default LandingAppBar;