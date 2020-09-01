import React, {Fragment, useEffect, useMemo, useState} from "react";
import {Page} from "components";
import {Element} from "react-scroll"
// import {Footer} from "./components";
import MobileAppBar from "./components/MobileAppBar/MobileAppBar";
import {Typography, useMediaQuery} from "@material-ui/core";
import LandingAppBar from "./components/LandingAppBar";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {ENDPOINT} from "../../configs/api";

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        color: "#FFFFFF",

    },
}))


const NewsPage = props => {
    const {nid} = props.match.params
    const classes = useStyles()
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

    // const htmlInput = "<p>Gunakan <strong>Shift + Enter</strong> Jika ingin line spacing kecil</p>\n"

    const [newsData, setNewsData] = useState({})
    const [height, setHeight] = useState({
        footer : 0,
    })

    useMemo(() => {
        fetch(ENDPOINT.NEWS+nid, {method: "GET"})
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                setNewsData(resJSON['data'])
            })
    },[])

    const getFooterHeight = element => {
        if (element && height.footer <= 0) {
            setHeight({
                ...height,
                footer: element.clientHeight
            })
        }
    }

    return (
        <Page title={"KKCTBN 2020 - " + newsData.Title}
              keyword="KKCTBN, Kompetisi Kapal Cepat, Kompetisi Nasional, Kompetisi, 2020, UMM, Universitas Muhammadiyah Malang, Universitas, Muhammadiyah, Malang"
              description="Kompetisi Kapal Cepat Tak Berawak Nasional (KKCTBN) 2020 merupakan salah satu upaya meningkatkan kualitas SDM yang mumpuni di bidang rancang bangun kapal melalui jalur akademis. Daya kreasi mahasiswa dalam kontes tersebut tidak hanya mencakup desain badan kapal yang baik dari segi performance dan manuver, tetapi juga mencakup perencanaan sistem penggerak, sistem navigasi yang handal, dengan memperhatikan keselarasan faktor teknis lainnya (engine matching).">

            <Grid container justify={"center"}>
                <Grid item container justify={"center"} md={12} xs={12} sm={12}>
                    {isMobile ? <MobileAppBar/> : <LandingAppBar/>}

                    <Grid item md={10} sm={11} xs={11} style={{minHeight: `calc(100vh - 110px - ${height.footer}px)`, paddingBottom: 5,marginTop: 110, "wordWrap": "break-word"}}>
                        <Typography variant={"h6"} style={{marginBottom : 5}}> <b> {newsData.Title} </b> </Typography>
                        {ReactHtmlParser(newsData.Content)}
                    </Grid>

                    <Grid ref={getFooterHeight} item container md={12} sm={12} xs={12}
                          justify={"center"} alignContent={"center"} alignItems={"center"}
                          className={classes.footer}>
                        <Typography variant={"subtitle2"}> Copyright © 2020 All rights reserved </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Page>
    )
}

export default NewsPage;
