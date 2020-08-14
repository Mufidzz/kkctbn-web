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
}))

const FAQ = props => {
    const classes = useStyles();

    return (
        <Fragment>
            <Grid container maxWidth="sm" container justify={"space-around"}>
                <Box display="flex">
                    <Typography variant="h3" style={{color: "#CF2424"}}>
                        FAQ
                    </Typography>
                </Box>
            </Grid>
                <Grid container maxWidth="sm" container justify={"space-around"}>
                    <Grid item xs={6} sm={3} md={3}>

                        <Grid container maxWidth="sm">
                            <CardContent>
                                <Typography variant="h5">
                                    Apakah peserta dapat mengikuti lebih dari satu kategori lomba ?
                                    <Box p={1} />
                                </Typography>
                                <Typography variant="h5">
                                    Berapa Jumlah anggota maksimal setiap kategori lomba ?
                                    <Box p={1} />
                                </Typography>
                                <Typography variant="h5">
                                    Kapan batas akhir pendaftaran tim dan lomba ?
                                    <Box p={1} />
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
                                <Box p={2} />
                            </Typography>
                            <Typography>
                                <ArrowForwardIosIcon fontSize="large"/>
                                <Box p={2} />
                            </Typography>
                            <Typography>
                                <ArrowForwardIosIcon fontSize="large"/>
                                <Box p={2} />
                            </Typography>
                            <Typography>
                                <ArrowForwardIosIcon fontSize="large"/>
                                <Box p={2} />
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                        <img src={FAQQ}/>
                    </Grid>
                </Grid>
        </Fragment>
    )
}

export default FAQ;