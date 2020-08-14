import React, {Fragment} from 'react'
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import {makeStyles} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import background from './background_timeline.png';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 150,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://tiems92.files.wordpress.com/2010/10/gkb-1.jpg')`,
        height: "80vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        color: "#fff",
        fontsize: "4rem",
        padding: theme.spacing(2)
    },
    card: {
        marginTop: -150,
        padding: theme.spacing(0),
    },
    media: {
        height: 60,
        backgroundColor: "#FF6C6C",
    },
    subheader:{
        maxWidth: '60%',
    }
}))

const Timeline = props => {
    //Variable
    const classes = useStyles();
    return (
        <fragment>
            <Box className={classes.root}>
                <Grid container maxWidth="sm" justify={"center"} spacing={5}>
                    <Grid item style={{textAlign: "center"}} justify='center'>
                        <CardContent>
                            <Typography variant="h3">
                                Timeline of Competition
                            </Typography>
                            <Grid item md={12}>
                                <center>
                                <Typography variant="subtitle1" align='center' className={classes.subheader}>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer
                                </Typography>
                                </center>
                            </Grid>
                        </CardContent>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent className={classes.media}>
                                    <Typography gutterBottom variant="h5" component="h2" style={{color: "#fff"}}>
                                        Babak Penyisihan
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardContent>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer
                                </Typography>
                                <Box p={1}/>
                                <Typography variant="h5" component="h2" style={{fontWeight: 700}}>
                                    1-2 Agustus
                                </Typography>
                                <Typography variant="subtitle2" component="p">
                                    Pembukaan Pendaftaran
                                </Typography>
                                <Box p={1}/>
                                <Typography variant="h5" component="h2" style={{fontWeight: 700}}>
                                    1-2 Agustus
                                </Typography>
                                <Typography variant="subtitle2" component="p">
                                    Pembukaan Pendaftaran
                                </Typography>
                                <Box p={1}/>
                                <Typography variant="h5" component="h2" style={{fontWeight: 700}}>
                                    1-2 Agustus
                                </Typography>
                                <Typography variant="subtitle2" component="p">
                                    Pembukaan Pendaftaran
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6} sm={3} md={3}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardContent className={classes.media}>
                                    <Typography gutterBottom variant="h5" component="h2" style={{color: "#fff"}}>
                                        Babak Final
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardContent>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer
                                </Typography>
                                <Box p={1}/>
                                <Typography variant="h5" component="h2" style={{fontWeight: 700}}>
                                    1-2 Agustus
                                </Typography>
                                <Typography variant="subtitle2" component="p">
                                    Pembukaan Pendaftaran
                                </Typography>
                                <Box p={1}/>
                                <Typography variant="h5" component="h2" style={{fontWeight: 700}}>
                                    1-2 Agustus
                                </Typography>
                                <Typography variant="subtitle2" component="p">
                                    Pembukaan Pendaftaran
                                </Typography>
                                <Box p={1}/>
                                <Typography variant="h5" component="h2" style={{fontWeight: 700}}>
                                    1-2 Agustus
                                </Typography>
                                <Typography variant="subtitle2" component="p">
                                    Pembukaan Pendaftaran
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </fragment>

    )
}

export default Timeline;