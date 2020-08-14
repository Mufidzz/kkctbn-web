import React, {Fragment} from 'react'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import cp from "./cpcp.png";

const useStyles = makeStyles((theme) => ({

}))

const Contact = props => {
    //Variable
    const classes = useStyles();
    return (
        <Fragment>
            <Grid container maxWidth="sm" container justify={"space-around"}>
                <Box display="flex">
                    <Typography variant="h3" style={{color: "#CF2424"}}>
                        Masih ada yang ingin ditanyakan ?
                        <Box p={2} />
                    </Typography>
                </Box>
            </Grid>
            <Grid container justify={"space-around"}>
                <Grid item container justify={"space-around"} alignContent={"center"} alignItems={"center"} md={10} xs={10}>
                    <img src={cp}/>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Contact;