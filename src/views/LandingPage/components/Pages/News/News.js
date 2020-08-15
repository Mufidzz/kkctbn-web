import React, {Fragment} from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import NewsCard from "./components/NewsCard";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(6)
    },
    title: {
        paddingBottom: theme.spacing(4)
    }

    // card: {
    //     maxWidth: "100%",
    //     padding: theme.spacing(2),
    //     // textAlign: 'center',
    // },
    // media: {
    //     height: 240
    // },
    // header: {
    //     marginTop: 50,
    //     marginBottom: 50,
    // },
    // label: {
    //     padding: 7,
    //     fontSize: 10,
    //     backgroundColor: '#45aef5',
    //     color: '#fff'
    // },
    // img: {
    //     width: '100%'
    // }
}))

const News = props => {
    //Variable
    const classes = useStyles();

    return (
        <Fragment>

            <Grid container justify={"center"} className={classes.root}>
                <Grid item container={12} justify={"center"} className={classes.title}>
                    <Typography variant="h3" fontWeight align='center'
                                style={{color: "#CF2424"}}>
                        <b>Berita KKCTBN</b>
                    </Typography>
                </Grid>
                <Grid item container={10} spacing={3} justify={"center"} className={classes.title}>
                    <Grid item md={4}>
                        <NewsCard title={
                            <Typography variant="body1" style={{color: "#FFFFFF"}}>
                                <b>Desain Kapal Kesehatan</b>
                            </Typography>} image={"https://blog.static.mamikos.com/wp-content/uploads/2020/02/UMM-Mamikos.jpg"}>
                            <Typography variant="subtitle2" align={"justify"}>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown...
                            </Typography>
                            <br/>
                            <Typography variant="subtitle2" align={"right"}>
                                Diposting oleh Admin, 13 Agustus 2020
                            </Typography>
                        </NewsCard>
                    </Grid>
                    <Grid item md={4}>
                        <NewsCard title={
                            <Typography variant="body1" style={{color: "#FFFFFF"}}>
                                <b>Desain Kapal Kesehatan</b>
                            </Typography>} image={"https://blog.static.mamikos.com/wp-content/uploads/2020/02/UMM-Mamikos.jpg"}>
                            <Typography variant="subtitle2" align={"justify"}>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown...
                            </Typography>
                            <br/>
                            <Typography variant="subtitle2" align={"right"}>
                                Diposting oleh Admin, 13 Agustus 2020
                            </Typography>
                        </NewsCard>
                    </Grid>
                    <Grid item md={4}>
                        <NewsCard title={
                            <Typography variant="body1" style={{color: "#FFFFFF"}}>
                                <b>Desain Kapal Kesehatan</b>
                            </Typography>} image={"https://blog.static.mamikos.com/wp-content/uploads/2020/02/UMM-Mamikos.jpg"}>
                            <Typography variant="subtitle2" align={"justify"}>
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown...
                            </Typography>
                            <br/>
                            <Typography variant="subtitle2" align={"right"}>
                                Diposting oleh Admin, 13 Agustus 2020
                            </Typography>
                        </NewsCard>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    )
}

export default News;