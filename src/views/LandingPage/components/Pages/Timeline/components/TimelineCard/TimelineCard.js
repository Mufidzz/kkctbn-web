import React, {Fragment} from 'react'
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";

const useStyles = makeStyles((theme) => ({
    card: {
        padding: 0,
    },
    media: {
        backgroundColor: "#FF6C6C",
    },
}))

const TimelineCard = props => {
    //Variable
    const classes = useStyles()

    return (
        <Fragment>
            <Card className={classes.card}>

                <CardActionArea>
                    <CardContent className={classes.media}>
                        <Typography gutterBottom variant="h5" component="h2" style={{color: "#FFFFFF"}}>
                            Babak Penyisihan
                        </Typography>
                    </CardContent>
                </CardActionArea>


                <CardContent>
                    <Grid container spacing={2} direction={"column"}>
                        <Grid item md={12}>
                            <Typography variant="subtitle2" color="textSecondary" component="p">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                unknown printer
                            </Typography>
                        </Grid>

                        <Grid item md={12}>
                            <Typography variant="h5" component="h2" style={{fontWeight: 700}}>
                                1-2 Agustus
                            </Typography>
                            <Typography variant="subtitle2" component="p">
                                Pembukaan Pendaftaran
                            </Typography>
                        </Grid>

                        <Grid item md={12}>
                            <Typography variant="h5" component="h2" style={{fontWeight: 700}}>
                                1-2 Agustus
                            </Typography>
                            <Typography variant="subtitle2" component="p">
                                Pembukaan Pendaftaran
                            </Typography>
                        </Grid>

                        <Grid item md={12}>
                            <Typography variant="h5" component="h2" style={{fontWeight: 700}}>
                                1-2 Agustus
                            </Typography>
                            <Typography variant="subtitle2" component="p">
                                Pembukaan Pendaftaran
                            </Typography>
                        </Grid>

                    </Grid>
                </CardContent>
            </Card>
        </Fragment>
    )
}

export default TimelineCard;