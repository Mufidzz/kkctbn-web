import React, {Fragment} from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import background from 'assets/images/timeline-main-image.jpg';
import TimelineCard from "./components/TimelineCard/TimelineCard";
import {Parallax} from "react-parallax";
import {useMediaQuery} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        // backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
        minHeight: "calc(100vh - 75px)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: theme.spacing(3)
    },
    card : {
        paddingTop: theme.spacing(3)
    }
}))

const timelineLdi = [
    {
        Date : "28 Agustus 2020",
        Title : "Sosislisasi KKCTBN 2020",
    },
    {
        Date : "29 Agustus 2020",
        Title : "Workshop",
    },
    {
        Date : "29 Agustus - 10 September 2020",
        Title : "Pendaftaran Indentitas dan Konsep Desain",
    },
    {
        Date : "1 Oktober 2020",
        Title : "Batas akhir upload Desain",
    },
    {
        Date : "14-16 Oktober 2020",
        Title : "Seleksi Finalis 5 Besar Lomba Desain",
    },
    {
        Date : "19 Oktober 2020",
        Title : "Pengumuman Finalis 5 Besar Lomba Desain ",
    },
    {
        Date : "29-31 Oktober 2020",
        Title : "Pelaksanaan Final Lomba Desain",
    },
    {
        Date : "31 Oktober 2020",
        Title : "Pengumuman Juara Lomba Desain",
    },
];

const timelineLpost = [
    {
        Date : "13 Oktober 2020",
        Title : "Batas akhir upload poster",
    },
    {
        Date : "31 Oktober 2020",
        Title : "Pengumuman Juara Lomba Desain",
    },
];

const timelineLperf = [
    {
        Date : "1 September 2020",
        Title : "Sosislisasi KKCTBN 2020",
    },
    {
        Date : "2 September 2020",
        Title : "Workshop ",
    },
    {
        Date : "29 Agustus - 10 September 2020",
        Title : "Pembukaan Pendaftaran Kontes FERC, ERC, ASV",
    },
    {
        Date : "11-12 September 2020",
        Title : "Seleksi 15 Besar Kontes FERC, ERC, ASV ",
    },
    {
        Date : "14 September 2020",
        Title : "Pengumuman Seleksi 15 Besar Kontes FERC, ERC, ASV",
    },
    {
        Date : "15 September – 17 Oktober 2020",
        Title : "Pembuatan Kapal dan video Kontes FERC, ERC, ASV",
    },
    {
        Date : "18-20 Oktober 2020",
        Title : "Seleksi Finalis 5 Besar Kontes FERC, ERC, ASV",
    },
    {
        Date : "22 Oktober 2020",
        Title : "Pengumuman Finalis 5 Besar Kontes FERC, ERC, ASV",
    },
    {
        Date : "29-31 Oktober 2020",
        Title : "Pelaksanaan Final Kontes FERC, ERC, ASV",
    },
    {
        Date : "31 Oktober 2020",
        Title : "Pengumuman JuaraKontes FERC, ERC, ASV",
    },
];

const Timeline = props => {
    //Variable
    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

    return (
        <Fragment>
            <Parallax bgImage={background} strength={800}>
                <Grid container className={classes.root} justify={"center"} style={{color: "#FFFFFF"}}>
                    <Grid item container md={10} justify={"center"} alignContent={"flex-start"}>
                        <Typography variant="h3" align={"center"}>
                            <b>Linimasa {isMobile ? <br/> : null}  dari {isMobile ? <br/> : null} Kompetisi</b>
                        </Typography>
                    </Grid>
                    <Grid item container md={8} justify={"center"} alignContent={"flex-start"}>
                        <Typography variant={"body1"} align={"center"} style={{fontWeight: 100}}>
                            Linimasa Penyelenggaraan KKCTBN 2020 terdiri dari 2 Babak
                        </Typography>
                        <Typography variant={"body1"} align={"center"} style={{fontWeight: 100}}>
                            yaitu Babak Penyisihan dan Babak Final
                        </Typography>
                    </Grid>
                    <Grid item container md={10} justify={"space-evenly"} spacing={1} className={classes.card}>
                        <Grid item md={4} style={isMobile ? {marginBottom : "12px"} : null}>
                            <TimelineCard data={timelineLdi} title={"Lomba Desain Inovasi"}/>
                        </Grid>
                        <Grid item md={4}>
                            <TimelineCard data={timelineLperf} title={"Lomba Performance"}/>
                        </Grid>
                        <Grid item md={4}>
                            <TimelineCard data={timelineLpost} title={"Lomba Poster"}/>
                        </Grid>
                    </Grid>
                </Grid>
            </Parallax>
        </Fragment>
    )
}

export default Timeline;