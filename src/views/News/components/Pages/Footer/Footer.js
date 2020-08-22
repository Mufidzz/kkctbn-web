import React, {Fragment} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import logo_umm from '../../../../../assets/images/umm-logo-color.png';
import logo_ristekbrin from '../../../../../assets/images/ristekbrin-logo-color.png';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {useMediaQuery} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#CF2424",
        padding: theme.spacing(1),
        width: "100%"
    },
}))

const Footer = props => {
    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

    return (
        <Fragment>

            <Grid className={classes.root} container justify={"center"} alignContent={"center"} alignItems={"center"}>
                <Typography variant="subtitle2" component="p" style={{color: "#FFFFFF"}}>
                    Copyright © 2020 All rights reserved
                </Typography>
            </Grid>

        </Fragment>
    )
}

export default Footer;