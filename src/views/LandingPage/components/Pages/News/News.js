import React, {Fragment, useEffect, useMemo, useState} from 'react'
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import NewsCard from "./components/NewsCard";
import GridList from "@material-ui/core/GridList";
import {GridListTile, useMediaQuery} from "@material-ui/core";
import {ENDPOINT} from "../../../../../configs/api";
import {mysqlToDate, mysqlToDateString} from "../../../../../utils/mysqlDate";
import LinesEllipsis from 'react-lines-ellipsis'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(6),
        [theme.breakpoints.down("sm")]: {
            paddingLeft: 0,
            paddingRight: 0,
        }
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
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

    const [newsData, setNewsData] = useState([])


    useMemo(() => {

        fetch(ENDPOINT.NEWS, {method: "GET"})
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                setNewsData(resJSON['data'])
            })

    }, [])

    return (
        <Fragment>

            <Grid container justify={"center"} className={classes.root}>
                <Grid item md={12} sm={11} xs={11}>
                    <Grid item container justify={"center"} className={classes.title}>
                        <Typography variant="h3" fontWeight align='center'
                                    style={{color: "#CF2424"}}>
                            <b>Berita KKCTBN</b>
                        </Typography>
                    </Grid>


                    <GridList cellHeight={"auto"} cols={isMobile ? 1 : 3}
                              style={{flexWrap: "noWrap", transform: 'translateZ(0)'}}>
                        {newsData.map((v, i) => {
                            return (
                                <GridListTile item>
                                    <NewsCard title={
                                        <Typography variant="body1" style={{color: "#FFFFFF"}}>
                                            <b>{v.Title}</b>
                                        </Typography>}
                                              image={`${ENDPOINT.SUBMISSION}${v.NewsImageID}/stream`}>




                                        <Typography variant="subtitle2" align={"right"}>
                                            Diposting oleh Admin, {mysqlToDateString(v.CreatedAt)}
                                        </Typography>
                                    </NewsCard>
                                </GridListTile>
                            )
                        })}
                    </GridList>

                </Grid>
            </Grid>
        </Fragment>
    )
}

export default News;