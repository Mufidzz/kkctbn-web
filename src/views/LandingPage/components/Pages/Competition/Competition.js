import React, {Fragment} from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import competitionCardImage from "assets/images/ship-red.png"
import {CompetitionCard} from "./components";

const useStyles = makeStyles((theme) => ({
    title : {
        padding : theme.spacing(4)
    }
}))

const Competition = props => {
    //Variable
    const classes = useStyles();

    return (
        <Fragment>
            <Grid container justify={"center"}>
                <Grid item container={12} justify={"center"} className={classes.title}>
                    <Typography variant="h3" fontWeight align='center'
                                style={{color: "#CF2424"}}>
                        Competition
                    </Typography>
                </Grid>
                <Grid item container md={10} justify={"center"} spacing={3}>
                    <Grid item md={4}>
                        <CompetitionCard image={competitionCardImage}>
                            <Typography variant="h5" component="h2" style={{color: "#fff"}}>
                                Lomba Inovasi
                            </Typography>
                            <Typography variant="subtitle2" component="p" style={{color: "#fff"}}>
                                Desain Kapal Kesehatan
                            </Typography>
                        </CompetitionCard>
                    </Grid>
                    <Grid item md={4}>
                        <CompetitionCard image={competitionCardImage}>
                            <Typography variant="h5" component="h2" style={{color: "#fff"}}>
                                Lomba Inovasi
                            </Typography>
                            <Typography variant="subtitle2" component="p" style={{color: "#fff"}}>
                                Desain Kapal Kesehatan
                            </Typography>
                        </CompetitionCard>
                    </Grid>
                    <Grid item md={4}>
                        <CompetitionCard image={competitionCardImage}>
                            <Typography variant="h5" component="h2" style={{color: "#fff"}}>
                                Lomba Inovasi
                            </Typography>
                            <Typography variant="subtitle2" component="p" style={{color: "#fff"}}>
                                Desain Kapal Kesehatan
                            </Typography>
                        </CompetitionCard>
                    </Grid>


                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Competition;