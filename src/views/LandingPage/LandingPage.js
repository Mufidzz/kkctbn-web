import React from "react";
import {ButtonRed} from "components";
import Page from "components/Page";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    appBar:{
        backgroundColor: "transparent",
    },
    hero:{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://tiems92.files.wordpress.com/2010/10/gkb-1.jpg')`,
        height: "500px",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: "#fff",
        fontsize: "4rem",
    },
    barbar:{
      paddingRight: theme.spacing(3),
    },
    blogsContainer: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        justifyContent: "center"
    },
    blogTitle: {
        fontWeight: 800,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        color: "#f44336"
    },
    card: {
        maxWidth: "100%",
    },
    media: {
        height: 240
    },
    paginationContainer: {
        display: "flex",
        justifyContent: "center"
    }
}));

const LandingPage = () => {
    const classes = useStyles();
        return (
            <div className="LandingPage">
                 <AppBar className={classes.appBar} position="static">
                    <Toolbar>
                      <Typography className={classes.barbar} variant="h6" color="primary">
                        Home
                      </Typography>
                        <Typography className={classes.barbar} variant="h6" color="primary">
                        About
                      </Typography>
                        <Typography className={classes.barbar} variant="h6" color="primary">
                        Competition
                      </Typography>
                        <Typography className={classes.barbar} variant="h6" color="primary">
                        Logo
                      </Typography>
                        <Typography className={classes.barbar} variant="h6" color="primary">
                        FAQ
                      </Typography>
                        <Typography className={classes.barbar} variant="h6" color="primary">
                        Contact
                      </Typography>
                        <Typography className={classes.barbar} variant="h6" color="primary">
                        Login
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <Box className={classes.hero}>
                      <Grid container>
                          <CardContent>
                              <Typography variant="h3">
                                  Selamat Datang
                              </Typography>
                              <Typography variant="h3">
                                  KKCTBN 2020
                              </Typography>
                              <Typography variant="subtitle1">
                                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque erat sapien, hendrerit vitae urna et, iaculis tincidunt justo. Praesent blandit lacus eu nulla pretium, et tempus tellus interdum
                              </Typography>
                              <Button variant="contained" color="secondary">
                                  Daftar
                              </Button>
                              <Typography variant="h2">
                                  30D 20H 60M
                              </Typography>
                          </CardContent>
                      </Grid>
                  </Box>
                <Container maxWidth="100%" className={classes.blogsContainer}>
                    <Grid conatiner spacing={3}>
                        <Grid item xs={12} sm={6} md={6}>
                            loro
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                        </Grid>
                    </Grid>
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
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown...
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
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown...
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
                                      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown...
                                  </Typography>
                                </CardContent>
                              </CardActionArea>
                            </Card>
                          </Grid>
                     </Grid>
                    <Box display="flex" justifyContent="center" className={classes.blogTitle}>
                        <Typography variant="h3">
                            Competition
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
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown...
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
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown...
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
                                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown...
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    </Grid>
                    <Box display="flex" className={classes.blogTitle}>
                        <Typography variant="h3">
                            FAQ
                        </Typography>
                    </Box>
                    <Grid container>
                        <CardContent>
                            <Typography variant="h5">
                                Apakah peserta dapat mengikuti lebih dari satu kategori lomba ?
                            </Typography>
                            <Typography variant="h5">
                                Berapa Jumlah anggota maksimal setiap kategori lomba ?
                            </Typography>
                            <Typography variant="h5">
                                Kapan batas akhir pendaftaran tim dan lomba ?
                            </Typography>
                            <Typography variant="h5">
                                Mengapa tim saya belum di verifikasi ?
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Box display="flex" className={classes.blogTitle}>
                        <Typography variant="h3">
                            Masih ada yang ingin ditanyakan ?
                        </Typography>
                    </Box>

                  </Container>

            </div>

        )
}

export default LandingPage;