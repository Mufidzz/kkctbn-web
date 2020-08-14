import React, {Fragment} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import logo_umm from './logo_umm.png';
import ristek from './ristek_footer.png';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    root : {
        backgroundColor: "#FF2559",
        height: "30vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
    },
    root2 : {
        backgroundColor: "#FF2559",
        height: "10vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
    },
}))

const Footer = props => {
    const classes = useStyles();

    return (
        <Fragment>
            <Box className={classes.root}>
                <Grid container justify={"space-around"}>
                    <Grid item container justify={"space-around"} alignContent={"center"} alignItems={"center"} md={10} xs={10}>
                        <Typography>
                            <img src={ristek}/>
                        </Typography>
                        <Typography>
                            <img src={logo_umm}/>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box className={classes.root2}>
                <Grid container justify={"space-around"}>
                    <Grid item container justify={"space-around"} alignContent={"center"} alignItems={"center"} md={10} xs={10}>
                        <Typography variant="subtitle2" component="p" style={{color: "#FFFFFF"}}>
                            Copyright © 2020 All rights reserved
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}

export default Footer;