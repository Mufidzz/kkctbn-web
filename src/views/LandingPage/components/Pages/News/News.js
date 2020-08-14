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
import makeStyles from "@material-ui/core/styles/makeStyles";
import berita from './berita.png';

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: "100%",
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    media: {
        height: 240
    },
}))

const News = props => {
    //Variable
    const classes = useStyles();

    return (
        <Fragment>
            <Box display="flex" justifyContent="center">
                <Typography variant="h3" style={{color: "#CF2424"}}>
                    BERITA KKCTBN
                </Typography>
            </Box>
            <Grid container maxWidth="sm" container justify={"space-around"}>
                <Grid item xs={6} sm={3} md={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                                <img src={berita}/>
                            </CardContent>
                            <CardContent>
                                <Grid container justify={"space-around"}>
                                    <Button variant="contained" color="primary" >
                                        Category 1
                                    </Button>
                                    <Button variant="contained" color="secondary">
                                        Category 2
                                    </Button>
                                </Grid>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lorem Ipsum is simply dummy
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    Oleh Admin, 13 Agustus 2020
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                                <img src={berita}/>
                            </CardContent>
                            <CardContent>
                                <Grid container justify={"space-around"}>
                                    <Button variant="contained" color="primary" >
                                        Category 1
                                    </Button>
                                    <Button variant="contained" color="secondary">
                                        Category 2
                                    </Button>
                                </Grid>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lorem Ipsum is simply dummy
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    Oleh Admin, 13 Agustus 2020
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item xs={6} sm={3} md={3}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardContent>
                                <img src={berita}/>
                            </CardContent>
                            <CardContent>
                                <Grid container justify={"space-around"}>
                                    <Button variant="contained" color="primary" >
                                        Category 1
                                    </Button>
                                    <Button variant="contained" color="secondary">
                                        Category 2
                                    </Button>
                                </Grid>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lorem Ipsum is simply dummy
                                </Typography>
                                <Typography variant="subtitle2" color="textSecondary" component="p">
                                    Oleh Admin, 13 Agustus 2020
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown...
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default News;