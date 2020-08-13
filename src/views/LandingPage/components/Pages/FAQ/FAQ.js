import React, {Fragment} from 'react'
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({

}))

const FAQ = props => {
    const classes = useStyles();

    return (
        <Fragment>
            <Box display="flex" className={classes.blogTitle}>
                <Typography variant="h3">
                    FAQ
                </Typography>
            </Box>
            <Grid container>
                <CardContent>
                    <Typography variant="h5">
                        Apakah peserta dapat mengikuti lebih dari satu kategori lomba ?
                    </Typography>
                    <Typography variant="h5">
                        Berapa Jumlah anggota maksimal setiap kategori lomba ?
                    </Typography>
                    <Typography variant="h5">
                        Kapan batas akhir pendaftaran tim dan lomba ?
                    </Typography>
                    <Typography variant="h5">
                        Mengapa tim saya belum di verifikasi ?
                    </Typography>
                </CardContent>
            </Grid>
        </Fragment>
    )
}

export default FAQ;