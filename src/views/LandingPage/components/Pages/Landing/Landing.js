import React, {Fragment} from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.67) 40%,rgba(48, 5, 10, 1) 200%), url('https://1.bp.blogspot.com/-s6OshZ4EmXw/W28p-gklbhI/AAAAAAAAA10/NaOOO1ARD7sgffxepPaKeXqRG-z-RF8zACLcBGAs/s1600/img_gkb.jpg')`,
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
        color: "#FFFFFF",
        marginTop: 20
    },
    escapeTop : {
        marginTop : 150 + theme.spacing(3)
    },
    counter : {
        fontSize : "10em",
        color:"rgba(255,255,255,0.5) !important"
    }
}))

const Landing = props => {
    //Variable
    const classes = useStyles();

    return (
        <Fragment>
            <Grid container className={clsx(classes.root)} justify={"center"}>
                <Grid item container md={11} justify={"center"} className={classes.escapeTop}>
                    <Grid item container direction={"column"} md={12} alignItems={"flex-start"}>
                        <Grid item md={12}>
                            <Typography variant="h2">
                                <b>Selamat Datang</b>
                            </Typography>
                            <Typography variant="h2" style={{fontWeight: "400"}}>
                                KKCTBN 2020
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Typography variant="caption">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat sapien,
                                hendrerit
                                vitae urna et, iaculis tincidunt justo. Praesent blandit lacus eu nulla pretium, et
                                tempus
                                tellus interdum
                            </Typography>
                        </Grid>
                        <Grid item md={6}>
                            <Button size='large' variant="contained" className={classes.roundedButton}
                            >
                                Daftar
                            </Button>
                        </Grid>
                        <Typography variant="h1" className={classes.counter}>
                            <b>30D 20H 60M</b>
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Landing;