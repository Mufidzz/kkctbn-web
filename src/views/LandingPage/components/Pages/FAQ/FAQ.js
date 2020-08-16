import React, {Fragment} from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {OverlapTypography} from "../../../../../components";
import {ArrowForwardIos} from "@material-ui/icons";
import faqShip from "assets/images/faq-ship.png"
import {useMediaQuery} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
    },
    header: {
        marginTop: 50,
        marginLeft: 90,
        marginBottom: 20
    },
    overlayText: {
        color: "rgba(255, 0, 0,.1)",
        userSelect: "none",
        fontWeight: 600
    },
    mainText: {
        color: "#CF2424"
    },
}))

const faqQuestion = [
    "Apakah peserta dapat mengikuti lebih dari satu kategori lomba ?",
    "Berapa Jumlah anggota maksimal setiap kategori lomba ?",
    "Kapan batas akhir pendaftaran tim dan lomba ?",
    "Mengapa tim saya belum di verifikasi ?"
]

const FAQ = props => {
    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

    return (
        <Fragment>
            <Grid container justify={"center"} className={classes.root}>
                <Grid item container md={10} sm={11} xs={11} justify={"flex-start"}>
                    <Grid item container md={6}>
                        <Grid item md={12}>
                            <OverlapTypography overlay={<Typography className={classes.overlayText}
                                                                    variant={"h3"}>Frequently <br/>Asked <br/> Question</Typography>}>
                                <Typography className={classes.mainText} variant={"h2"}><b>FAQ</b></Typography>
                            </OverlapTypography>
                        </Grid>


                        <Grid item container md={12} sm={12} xs={12} spacing={2}>
                            {faqQuestion.map((v,i) => {
                                return (
                                    <Grid item container md={12} sm={12} xs={12} alignItems={"center"}>
                                        <Grid item md={10} sm={10} xs={10}>
                                            <Typography variant="h6">
                                                <b>{v}</b>
                                            </Typography>
                                        </Grid>
                                        <Grid item container md={2} sm={2} xs={2} justify={"flex-end"}>
                                            <ArrowForwardIos fontSize="large"/>
                                        </Grid>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </Grid>

                    <img src={faqShip} className={classes.img} width={isMobile ? "75%" : 'auto'} alt={"FAQ Ship"} style={{position: 'absolute', right: 0, zIndex:-1}}/>

                </Grid>
            </Grid>
        </Fragment>
    )
}

export default FAQ;