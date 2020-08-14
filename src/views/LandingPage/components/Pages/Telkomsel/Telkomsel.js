import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import telkomsel from './telkomsel.png';
import Typography from "@material-ui/core/Typography";
import logo from "../../../../../assets/images/logo-wh.png";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    sponsor: {
        backgroundColor: '#DADADA'
    }
}))

const Telkomsel = props => {
    //Variable
    const classes = useStyles();

    return (
        <Grid className={classes.sponsor} container justify={"space-around"}>
            <Grid  item container justify={"space-around"} md={9} xs={12}>
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