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

const useStyles = makeStyles((theme) => ({

}))

const News = props => {
    //Variable
    const classes = useStyles();

    return (
        <Fragment>
            <Box display="flex" justifyContent="center" className={classes.blogTitle}>
                <Typography variant="h3">
                    BERITA KKCTBN
                </Typography>
            </Box>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://tiems92.files.wordpress.com/2010/10/gkb-1.jpg"
                                title="kategori 1"
                            />
                            <CardContent>
                                <Button variant="contained" color="primary">
                                    Category 1
                                </Button>
                                <Button variant="contained" color="secondary">
                                    Category 2
                                </Button>
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
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://tiems92.files.wordpress.com/2010/10/gkb-1.jpg"
                                title="kategori 2"
                            />
                            <CardContent>
                                <Button variant="contained" color="primary">
                                    Category 1
                                </Button>
                                <Button variant="contained" color="secondary">
                                    Category 2
                                </Button>
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
                <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image="https://tiems92.files.wordpress.com/2010/10/gkb-1.jpg"
                                title="kategori 3"
                            />
                            <CardContent>
                                <Button variant="contained" color="primary">
                                    Category 1
                                </Button>
                                <Button variant="contained" color="secondary">
                                    Category 2
                                </Button>
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