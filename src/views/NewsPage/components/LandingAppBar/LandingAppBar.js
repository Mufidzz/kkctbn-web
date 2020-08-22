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

    return (
        <Fragment>
                <AppBar className={classes.root}
                        color={"primary"}>
                    <Toolbar>
                        <Grid container justify={"center"}>
                            <Grid item container justify={"flex-start"} spacing={5} alignContent={"center"} alignItems={"center"}
                                  md={9} xs={10}>

                                <Grid item>
                                    <img src={whiteLogo} alt={"KKCTBN LOGO"}
                                         height={"70"}/>
                                </Grid>
                                <Grid item>
                                    <Typography
                                        component={Link}
                                        to={"/"}
                                        style={{cursor: "pointer", color: "#FFFFFF"}}
                                        variant="h6"
                                        color="primary">
                                        Home
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <Typography component={Link} to={"/auth"} style={{cursor: "pointer", color: "#FFFFFF"}} variant="h6"
                                                color="primary">
                                        Login
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
        </Fragment>
    )

}

export default LandingAppBar;