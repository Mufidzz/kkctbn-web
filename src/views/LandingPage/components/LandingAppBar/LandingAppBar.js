import React, {Fragment} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import ElevationScroll from "../../../../components/ElevationScroll";
import Grid from "@material-ui/core/Grid";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import whiteLogo from 'assets/images/logo-wh.png';
import colorLogo from 'assets/images/logo-color.png';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop : theme.spacing(1),
        paddingBottom : theme.spacing(2)
    },
    rootElevated : {
        paddingTop : theme.spacing(1),
        paddingBottom : theme.spacing(1)
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
                <AppBar className={ElevationTrigger ? classes.rootElevated : classes.root} color={ElevationTrigger ? "#FFFFFF" : "transparent"}>
                    <Toolbar>
                        <Grid container justify={"space-evenly"}>
                            <Grid item container justify={"space-evenly"} alignContent={"center"} alignItems={"center"}
                                  md={9} xs={10}>
                                <Typography style={{color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6"
                                            color="primary">
                                    Home
                                </Typography>
                                <Typography style={{color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6"
                                            color="primary">
                                    About
                                </Typography>
                                <Typography style={{color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6"
                                            color="primary">
                                    Competition
                                </Typography>

                                <img src={ElevationTrigger ? colorLogo : whiteLogo} alt={"KKCTBN LOGO"} height={ElevationTrigger ? "80" : "125"}/>

                                <Typography style={{color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6"
                                            color="primary">
                                    FAQ
                                </Typography>
                                <Typography style={{color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6"
                                            color="primary">
                                    Contact
                                </Typography>
                                <Typography style={{color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6"
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