import React, {Fragment} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import telkomselLogo from '../../../../../assets/images/telkomsel-logo-grey.png';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#DADADA',
        width: "100%",
        padding: theme.spacing(1)
    }
}))

const Sponsor = props => {
    //Variable
    const classes = useStyles();

    return (
        <Fragment>
            <Grid className={classes.root} container justify={"center"}>
                <Grid item container md={10} justify={"space-evenly"}>
                    <img src={telkomselLogo} height={125} alt={"Sponsor Logo"}/>
                    <img src={telkomselLogo} height={125} alt={"Sponsor Logo"}/>
                    <img src={telkomselLogo} height={125} alt={"Sponsor Logo"}/>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Sponsor;