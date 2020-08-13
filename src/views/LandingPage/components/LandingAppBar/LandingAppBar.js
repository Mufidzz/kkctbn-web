import React, {Fragment} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";
import ElevationScroll from "../../../../components/ElevationScroll";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

const useStyles = makeStyles((theme) => ({
    root : {
        padding : theme.spacing(2)
    },
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
                <AppBar className={classes.root} color={ElevationTrigger ? "#FFFFFF" : "transparent"}>
                    <Toolbar>
                        <Grid container md={12} xs={12} justify={"center"}>
                            <Grid item container justify={"space-around"} alignContent={"center"} alignItems={"center"} md={10} xs={10}>
                                <Typography style={{color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6" color="primary">
                                    Home
                                </Typography>
                                <Typography style={{color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6" color="primary">
                                    About
                                </Typography>
                                <Typography style={{color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6" color="primary">
                                    Competition
                                </Typography>
                                <Typography style={{color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h2" color="primary">
                                    Logo
                                </Typography>
                                <Typography style={{color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6" color="primary">
                                    FAQ
                                </Typography>
                                <Typography style={{color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6" color="primary">
                                    Contact
                                </Typography>
                                <Typography style={{color: ElevationTrigger ? "#000000" : "#FFFFFF"}} variant="h6" color="primary">
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