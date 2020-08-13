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
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        fontsize: "4rem",
    }
}))

const Landing = props => {
    //Variable
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Grid container>
                <CardContent>
                    <Typography variant="h3">
                        Selamat Datang
                    </Typography>
                    <Typography variant="h3">
                        KKCTBN 2020
                    </Typography>
                    <Typography variant="subtitle1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat sapien, hendrerit
                        vitae urna et, iaculis tincidunt justo. Praesent blandit lacus eu nulla pretium, et tempus
                        tellus interdum
                    </Typography>
                    <Button variant="contained" color="secondary">
                        Daftar
                    </Button>
                    <Typography variant="h2">
                        30D 20H 60M
                    </Typography>
                </CardContent>
            </Grid>
        </Box>
    )
}

export default Landing;
