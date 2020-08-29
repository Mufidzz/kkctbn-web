import React, {Fragment, useState } from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import competitionCardImage from "assets/images/ship-red.png"
import {CompetitionCard} from "./components";
import {useMediaQuery} from "@material-ui/core";
// import ReactCardFlip from "react-card-flip";

const catCompetition = [
    "Lomba Desain Inovasi Kapal Kesehatan",
    "Lomba Poster",
    "Lomba Pembuatan dan Performa Prototipe",
]

const expCompetition = [
    "Desain Kapal Kesehatan",
    "INOVASI TEKNOLOGI KEMARITIMAN DALAM PENANGANAN COVID 19",
    "ASV - ERC - FERC",
]

const expCompetitionFlipped = [
    "Pada katagori ini dikompetisikan 3 (tiga) lomba desain inovasi kapal kesehatan antara lain: \n" +
    "1) Desain Inovasi Kapal Rumah Sakit Autonomous\n" +
    "2) Desain Inovasi Kapal Ambulan Autonomous\n" +
    "3) Re-Design Lay-Out Ruang Akomodasi Penumpang Kapal Ro-Ro Existing\n" +
    "layout ruang akomodasi untuk mendukung penanganan covid 19 yang sekarang ini sedang berlangsung. ",
    "Setiap tim lomba desain inovasi dan pembuatan prototipe kapal untuk penanganan covid 19 wajib membuat poster yang nanti akan dilombakan pada lomba poster. Poster berisi inovasi teknologi kemaritiman dengan: tampilan 3D, inovasi, keunggulan dan prosedur penanganan covid-19.\n",
    "Pada katagori ini dikompetisikan 3 (tiga) lomba pembuatan dan performa prototipe antara lain: Kapal Kendali Otomatis (Autonomous Surface Vehicle/ASV), Kapal Cepat Listrik dengan Sistem Kendali Jauh (Electric Remote Control/ERC) dan Kapal Cepat Berbahan Bakar dengan Sistem Kendali Jauh (Fuel Engine Remote Control / FERC)",
]

const useStyles = makeStyles((theme) => ({
    root : {
        padding: theme.spacing(6),
        paddingLeft : 0,
        paddingRight : 0
    },
    title : {
        paddingBottom : theme.spacing(4)
    }
}))

const Competition = props => {
    //Variable
    const [isFlipped, setIsFlipped] = useState(false);

  	const handleClick = () => {
    setIsFlipped(!isFlipped);
  	};
    const classes = useStyles();
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))
    

    return (
        <Fragment>
            <Grid container justify={"center"} className={classes.root}>
                <Grid item container md={12} sm={11} xs={11} justify={"center"}>
                    <Grid item container md={11} justify={"center"} className={classes.title}>
                        <Typography variant="h3" fontWeight align='center'
                                    style={{color: "#CF2424"}}>
                            <b>Kompetisi</b>
                        </Typography>
                    </Grid>

                    <Grid item container md={10} sm={11} xs={11} justify={"center"} spacing={isMobile ? 0 : 3}>

                        {catCompetition.map((v,i) => {
                        		const itemExpCompetition = expCompetition[i];
                        		const itemExpCompetitionFlipped = expCompetitionFlipped[i];
                            return (
                                <Grid item md={4} style={isMobile ? {marginBottom : "12px"} : null} >
                                   
                                    <CompetitionCard image={competitionCardImage} title={v} explain={
                                        <Typography variant={"body2"} display={"block"} align={"left"} style={{whiteSpace : 'pre-line'}}>
                                            {itemExpCompetitionFlipped}
                                        </Typography>

                                    }>
                                        <Typography variant="h5" component="h2" style={{color: "#fff"}}>
                                            <b>{v}</b>
                                        </Typography>
                                        <Typography variant="subtitle2" component="p" style={{color: "#fff"}}>
                                            {itemExpCompetition}
                                        </Typography>
                                    </CompetitionCard>
                                </Grid>
                            )
                        })}

                    </Grid>


                </Grid>

            </Grid>
        </Fragment>
    )
}

export default Competition;
