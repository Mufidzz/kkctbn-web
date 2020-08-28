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
    "Penjelasan 1",
    "Penjelasan 3",
    "Penjelasan 2",
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
                                   
                                    <CompetitionCard image={competitionCardImage} title={v} explain={itemExpCompetitionFlipped}>
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
