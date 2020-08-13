import React, {Fragment} from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "transparent",
    },
    navItem: {
        paddingRight: theme.spacing(3),
    },
}));


const LandingAppBar = () => {
    //Variable
    const classes = useStyles();

    return (
        <Fragment>
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <Typography className={classes.navItem} variant="h6" color="primary">
                        Home
                    </Typography>
                    <Typography className={classes.navItem} variant="h6" color="primary">
                        About
                    </Typography>
                    <Typography className={classes.navItem} variant="h6" color="primary">
                        Competition
                    </Typography>
                    <Typography className={classes.navItem} variant="h6" color="primary">
                        Logo
                    </Typography>
                    <Typography className={classes.navItem} variant="h6" color="primary">
                        FAQ
                    </Typography>
                    <Typography className={classes.navItem} variant="h6" color="primary">
                        Contact
                    </Typography>
                    <Typography className={classes.navItem} variant="h6" color="primary">
                        Login
                    </Typography>
                </Toolbar>
            </AppBar>
        </Fragment>
    )

}

export default LandingAppBar;