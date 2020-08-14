import React, {Fragment} from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";
import mainImage from "assets/images/main-image.jpg"

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.67) 40%,rgba(48, 5, 10, 1) 200%), url(${mainImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        height: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: "#FFFFFF",
    },
    container: {
        marginLeft: 70
    },
    roundedButton: {
        background: "rgba(215, 44, 44, 0.76)",
        borderRadius: 9999999999,
        color: "#FFFFFF",
        marginTop: theme.spacing(2),
        "&:hover" : {
            background: "rgba(215, 44, 44, 1)",
        }
    },
    escapeTop : {
        marginTop : 60 + theme.spacing(3)
    },
    counter : {
        fontSize : "8rem",
        color:"rgba(255,255,255,0.4) !important"
    }
}))

const Landing = props => {
    //Variable
    const classes = useStyles();

    return (
        <Fragment>
            <Grid container className={clsx(classes.root)} justify={"center"}>
                <Grid item container md={11} justify={"center"} className={classes.escapeTop}>
                    <Typography variant="h1" className={classes.counter} style={{position: "absolute", bottom: 10, right: 15}}>
                        <b>30D 20H <br/> 60M 59S</b>
                    </Typography>
                    <Grid item container direction={"row"} md={12} alignItems={"flex-start"}>
                        <Grid item md={12}>
                            <Typography variant="h1">
                                <b>Selamat Datang</b>
                            </Typography>
                            <Typography variant="h2" style={{fontWeight: "400"}}>
                                KKCTBN 2020
                            </Typography>
                        </Grid>
                        <Grid item md={12}>
                            <Grid item md={6}>
                                <Typography variant="caption">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat sapien,
                                    hendrerit
                                    vitae urna et, iaculis tincidunt justo. Praesent blandit lacus eu nulla pretium, et
                                    tempus
                                    tellus interdum
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item md={3}>
                            <Button fullWidth variant="contained" className={classes.roundedButton}>
                                <Typography variant={"button"}> Daftar </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Landing;