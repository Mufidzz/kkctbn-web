import React, {Fragment} from 'react'
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import {makeStyles} from "@material-ui/core/styles";
import competition from './competition.png';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: "100%",
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    media: {
        height: 240
    },
    konten: {
        height: 80,
        backgroundColor: "#FF6C6C",
    }
}))

const Competition = props => {
    //Variable
    const classes = useStyles();

    return (
        <Fragment>
            <Box display="flex" justifyContent="center">
                <Typography variant="h3" style={{color: "#CF2424"}}>
                    Competition
                </Typography>
            </Box>
            <Grid container maxWidth="sm" container justify={"space-around"}>
                <Grid item xs={6} sm={3} md={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                                <img src={competition}/>
                            </CardContent>
                            <CardContent className={classes.konten}>
                                <Typography variant="h5" component="h2" style={{color: "#fff"}}>
                                    Lomba Inovasi
                                </Typography>
                                <Typography variant="subtitle2" component="p" style={{color: "#fff"}}>
                                    Desain Kapal Kesehatan
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                                <img src={competition}/>
                            </CardContent>
                            <CardContent className={classes.konten}>
                                <Typography variant="h5" component="h2" style={{color: "#fff"}}>
                                    Lomba Inovasi
                                </Typography>
                                <Typography variant="subtitle2" component="p" style={{color: "#fff"}}>
                                    Desain Kapal Kesehatan
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                                <img src={competition}/>
                            </CardContent>
                            <CardContent className={classes.konten}>
                                <Typography variant="h5" component="h2" style={{color: "#fff"}}>
                                    Lomba Inovasi
                                </Typography>
                                <Typography variant="subtitle2" component="p" style={{color: "#fff"}}>
                                    Desain Kapal Kesehatan
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default Competition;