import React, {Fragment} from 'react'
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import background from 'assets/images/timeline-main-image.png';
import TimelineCard from "./components/TimelineCard/TimelineCard";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${background})`,
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

const Timeline = props => {
    //Variable
    const classes = useStyles();
    return (
        <Fragment>
            <Grid container className={classes.root} justify={"center"} style={{color: "#FFFFFF"}}>
                <Grid item container md={6} justify={"center"} alignContent={"flex-start"}>
                    <Typography variant="h3" align={"center"}>
                        <b>Timeline of Competition</b>
                    </Typography>
                    <Typography variant={"body1"} align={"center"} style={{fontWeight: 100}}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    </Typography>
                </Grid>

                <Grid item container md={8} justify={"space-evenly"} className={classes.card}>
                    <Grid item md={5}>
                        <TimelineCard/>
                    </Grid>
                    <Grid item md={5}>
                        <TimelineCard/>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Timeline;