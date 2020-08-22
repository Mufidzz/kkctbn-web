import React, {Fragment} from 'react'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import newsBaru from 'assets/images/newsBaru.png';
import {Typography, useMediaQuery} from "@material-ui/core";
import colorLogo from "../../../../../assets/images/logo-color.png";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(20),
        paddingBottom: theme.spacing(6),
        width: "100% !important"
    }
}));

const Content = props => {
    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

    return (
        <Fragment>
            <Grid container className={classes.root} justify={"center"} spacing={1}>

                    <Grid item container justify={"center"} alignItems={"center"} alignContent={"center"}>
                        <Typography variant={"subtitle1"} style={{color : "#CF2424"}}>21 Agustus 2020 oleh Admin</Typography>
                    </Grid>
                    <Grid item container justify={"center"} alignItems={"center"} alignContent={"center"}>
                        <Typography variant={"h4"} style={{fontWeight : "Bold"}}>KKCTBN 2020 Telah Dibuka, Catat Tanggalnya !</Typography>
                    </Grid>
                    <Grid container alignItems={"center"} justify={"center"} style={{height : "100%"}}>
                        <img src={newsBaru} height={260}/>
                    </Grid>

            </Grid>
        </Fragment>

    )

}

export default Content;