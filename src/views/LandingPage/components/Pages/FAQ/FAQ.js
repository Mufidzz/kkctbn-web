import React, {Fragment} from 'react'
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import FAQQ from './FAQQ.png';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles((theme) => ({
    header: {
        marginTop: 50,
        marginLeft: 90,
        marginBottom: 20
    },
    margin: {
        marginLeft: 80
    },
}))

const FAQ = props => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid container maxWidth="sm">
                <Grid item md={12} xs={12}>
                    <Typography variant="h2" className={classes.header} style={{color: "#CF2424"}}>
                        FAQ
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={3} className={classes.margin}>
                    <Grid container maxWidth="sm">
                        <CardContent>
                            <Typography variant="h5">
                                Apakah peserta dapat mengikuti lebih dari satu kategori lomba ?
                                <Box p={1}/>
                            </Typography>
                            <Typography variant="h5">
                                Berapa Jumlah anggota maksimal setiap kategori lomba ?
                                <Box p={1}/>
                            </Typography>
                            <Typography variant="h5">
                                Kapan batas akhir pendaftaran tim dan lomba ?
                                <Box p={1}/>
                            </Typography>
                            <Typography variant="h5">
                                Mengapa tim saya belum di verifikasi ?
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <CardContent>
                        <Typography>
                            <ArrowForwardIosIcon fontSize="large"/>
                            <Box p={2}/>
                        </Typography>
                        <Typography>
                            <ArrowForwardIosIcon fontSize="large"/>
                            <Box p={2}/>
                        </Typography>
                        <Typography>
                            <ArrowForwardIosIcon fontSize="large"/>
                            <Box p={2}/>
                        </Typography>
                        <Typography>
                            <ArrowForwardIosIcon fontSize="large"/>
                            <Box p={2}/>
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={6} sm={3} md={5}>
                    <img src={FAQQ} className={classes.img}/>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default FAQ;