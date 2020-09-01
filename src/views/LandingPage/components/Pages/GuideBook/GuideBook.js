import React, {Fragment} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import telkomselLogo from '../../../../../assets/images/telkomsel-logo-grey.png';
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#f5f5f5',
        width: "100%",
        padding: theme.spacing(5)
    },
    btn: {
        padding: theme.spacing(2),
    }
}))

const GuideBook = props => {
    //Variable
    const classes = useStyles();

    return (
        <Grid className={classes.root} container>
            <Grid item container md={12} xs={12} lg={12} justify={"center"}>
                <Button
                    href={"https://api.kkctbn2020.online/submission/23/download"}
                    variant='contained' className={classes.btn} color={"primary"} size={"large"}>Download Guide
                    Book</Button>
            </Grid>
        </Grid>
    )
}

export default GuideBook;