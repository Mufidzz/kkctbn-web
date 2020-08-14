import React from 'react'
import Grid from "@material-ui/core/Grid";
import gambarkctbn from 'views/LandingPage/components/Pages/About/gambar_kctbn.png';
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({

}));

const About = props => {

    const classes = useStyles();
        return  (
            <Grid container justify={"space-around"}>
                <Grid item container justify={"space-around"} alignContent={"center"} alignItems={"center"} md={10} xs={10}>
                    <Grid item xs={12} sm={6} md={6}>
                        <img src={gambarkctbn}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                        <Typography variant="h5" component="h2">
                            Apa Itu
                        </Typography>
                        <Typography variant="h3" component="h2" style={{color: "#CF2424"}}>
                            KKCTBN
                        </Typography>
                        <Typography variant="subtitle2" color="textSecondary" component="p">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                            of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic
                        </Typography>

                    </Grid>
                </Grid>

            </Grid>
        )

}

export default About;