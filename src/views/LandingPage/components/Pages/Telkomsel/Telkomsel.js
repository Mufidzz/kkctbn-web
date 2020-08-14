import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import telkomsel from './telkomsel.png';
import Typography from "@material-ui/core/Typography";
import logo from "../../LandingAppBar/logo_kctbn.png";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
}))

const Telkomsel = props => {
    //Variable
    const classes = useStyles();

    return (
        <Grid container justify={"space-around"}>
            <Grid item container justify={"space-around"} alignContent={"center"} alignItems={"center"} md={10} xs={10}>
                <Typography>

                    <img src={telkomsel}/>
                </Typography>
                <Typography>

                    <img src={telkomsel}/>
                </Typography>
                <Typography>

                    <img src={telkomsel}/>
                </Typography>
            </Grid>
        </Grid>


    )
}

export  default  Telkomsel;