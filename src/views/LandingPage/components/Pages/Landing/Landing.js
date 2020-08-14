import React from 'react'
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root : {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://tiems92.files.wordpress.com/2010/10/gkb-1.jpg')`,
        height: "70vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        fontsize: "4rem",
    },
}))

const Landing = props => {
    //Variable
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container maxWidth="sm">
                <CardContent>
                    <Typography variant="h3" style={{fontWeight: 800}}>
                        <Box p={8} />
                        Selamat Datang
                    </Typography>
                    <Typography variant="h3">
                        <Box p={2} />
                        KKCTBN 2020
                    </Typography>
                    <Typography variant="subtitle1">
                        <Box p={2} />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat sapien, hendrerit
                        vitae urna et, iaculis tincidunt justo. Praesent blandit lacus eu nulla pretium, et tempus
                        tellus interdum
                    </Typography>
                    <Button variant="contained" style={{background: "rgba(215, 44, 44, 0.76)", color: "#FFFFFF"}}>
                        Daftar
                    </Button>
                    <Box p={5} />
                    <Typography variant="h1" style={{color : "rgba(255, 255, 255, 0.5)", fontWeight: 800}}>
                        30D 20H 60M
                    </Typography>
                </CardContent>
            </Grid>
        </Box>
    )
}

export default Landing;