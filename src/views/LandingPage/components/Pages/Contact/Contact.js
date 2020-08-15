import React, {Fragment} from 'react'
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import envelopeDraw from "assets/images/envelope-draw.svg";
import phoneDraw from "assets/images/phone-draw.svg";
import {OverlapTypography} from "../../../../../components";
import Card from "@material-ui/core/Card";
import {CardContent} from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";

const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
    overlayText: {
        color: "rgba(255, 0, 0,.1)",
        userSelect: "none",
        fontWeight: 700
    },
    mainText: {
        color: "#CF2424"
    },
    card: {
        padding: 0,
        width: "100%"
    },
    media: {
        // height: 20,
        backgroundColor: "#CF2424",
    },
}))

const Contact = props => {
    //Variable
    const classes = useStyles();
    return (
        <Fragment>
            <Grid container justify={"center"} className={classes.root}>
                <Grid item container md={10}>
                    <Grid item md={6}>
                        <OverlapTypography overlay={<Typography className={classes.overlayText}
                                                                variant={"h3"}>Silahkan kontak<br/>kami di media <br/>berikut</Typography>}>
                            <Typography className={classes.mainText} variant={"h3"}><b>Masih ada yang <br/> ingin ditanyakan ?</b></Typography>
                        </OverlapTypography>
                    </Grid>
                </Grid>

                <Grid item container md={5}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent className={classes.media}>
                                <Typography variant="body1" style={{color: "#FFFFFF", width: "100%"}} align={"center"}>
                                    Hubungi Kami
                                </Typography>
                            </CardContent>
                        </CardActionArea>

                        <CardContent>
                            <Grid item container md={12}>
                                <Grid item container md={6} justify={"center"} spacing={1}>
                                    <Grid item container md={12} justify={"center"}>
                                        <img src={envelopeDraw} alt={"Envelope Icon"}/>
                                    </Grid>
                                    <Grid item container md={12} justify={"center"}>
                                        <Typography variant={"caption"}><b>emailkkctbn@email.com</b></Typography>
                                    </Grid>
                                </Grid>
                                <Grid item container md={6}justify={"center"} spacing={1}>
                                    <Grid item container md={12} justify={"center"}>
                                        <img src={phoneDraw} alt={"Phone Icon"}/>
                                    </Grid>
                                    <Grid item container md={12} justify={"center"}>
                                        <Typography variant={"caption"}><b>+62 822 3333 4444</b></Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Contact;