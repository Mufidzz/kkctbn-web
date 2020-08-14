import React from 'react'
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(48, 5, 10, 0.3)), url('https://1.bp.blogspot.com/-s6OshZ4EmXw/W28p-gklbhI/AAAAAAAAA10/NaOOO1ARD7sgffxepPaKeXqRG-z-RF8zACLcBGAs/s1600/img_gkb.jpg')`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        fontsize: "4rem",
    },
    container: {
        marginLeft: 70
    }
}))

const Landing = props => {
    //Variable
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid className={classes.container} container maxWidth="sm">
                <CardContent>
                    <Typography variant="h1" style={{fontWeight: 800}}>
                        <Box p={8}/>
                        Selamat Datang
                    </Typography>
                    <Typography variant="h2">
                        <Box p={2}/>
                        KKCTBN 2020
                    </Typography>
                    <Grid md={6}>
                        <Typography variant="subtitle1">
                            <Box p={2}/>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat sapien, hendrerit
                            vitae urna et, iaculis tincidunt justo. Praesent blandit lacus eu nulla pretium, et tempus
                            tellus interdum
                        </Typography>
                    </Grid>
                    <Button size='large' variant="contained" style={{background: "rgba(215, 44, 44, 0.76)", color: "#FFFFFF", marginTop: 20}}>
                        Daftar
                    </Button>
                    <Box p={5}/>
                    <Typography variant="h1" style={{color: "rgba(255, 255, 255, 0.5)", fontWeight: 800, fontSize: 150}}>
                        30D 20H 60M
                    </Typography>
                </CardContent>
            </Grid>
        </Box>
    )
}

export default Landing;