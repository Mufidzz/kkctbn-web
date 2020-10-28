import React, {useMemo, useState} from "react";
import MobileAppBar from "./components/MobileAppBar/MobileAppBar";
import {Typography, useMediaQuery} from "@material-ui/core";
import LandingAppBar from "./components/LandingAppBar";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import CardContent from "@material-ui/core/CardContent";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {ENDPOINT} from "../../configs/api";
import {Page} from "../../components";
import withStyles from "@material-ui/core/styles/withStyles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";

const useStyles = makeStyles((theme) => ({
    footer: {
        padding: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
        color: "#FFFFFF",

    },
    table: {
        minWidth: 700,
    },
    header: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
    },
    viewButton: {
        width: 200,
        backgroundColor: theme.palette.primary.main,
        color: "#FFFFFF",
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            color: "#FFFFFF",
        }
    }
}))

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

function createData(teamName, sc1, sc2, sc3, sc4, sc5, total) {
    return {teamName, sc1, sc2, sc3, sc4, sc5, total};
}

const jsonObj = [
    {
        TeamName : "My First Team",
        Score : {
            Score1 : 99,
            Score2 : 99,
            Score3 : 99,
            Score4 : 99,
            Score5 : 99
        }
    },
    {
        TeamName : "My Second Team",
        Score : {
            Score1 : 99,
            Score2 : 99,
            Score3 : 99,
            Score4 : 99,
            Score5 : 99
        }
    }
]


const RankPage = props => {
    const classes = useStyles()
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))
    const [height, setHeight] = useState({
        footer : 0,
    })

    const [dataState, setDataState] = useState(
        {
            DIKRSA: [],
            DIKAA: [],
            RoRo: [],
            Poster : []
        }
    )

    const [rtDataState, setRtDataState] = useState(
        {
            ASV : [],
            ERC : [],
            FERC : [],
        }
    )

    useMemo(() => {
        let arr = [];

        jsonObj.map((v, i) => {
            arr.push(createData(v.TeamName, v.Score.Score1, v.Score.Score2, v.Score.Score3, v.Score.Score4, v.Score.Score5, v.Score.Score1 + v.Score.Score2 + v.Score.Score3 + v.Score.Score4 + v.Score.Score5))
        })

        console.log(arr)

        setDataState({
            DIKRSA: arr,
            DIKAA: arr,
            RoRo: arr,
            Poster : arr
        })

        setRtDataState({
            ASV : arr,
            ERC : arr,
            FERC : arr,
        })
    }, [])


    const getFooterHeight = element => {
        if (element && height.footer <= 0) {
            setHeight({
                ...height,
                footer: element.clientHeight
            })
        }
    }


    return (
        <Page title={"KKCTBN 2020 - Peringkat"}
              keyword="KKCTBN, Kompetisi Kapal Cepat, Kompetisi Nasional, Kompetisi, 2020, UMM, Universitas Muhammadiyah Malang, Universitas, Muhammadiyah, Malang"
              description="Kompetisi Kapal Cepat Tak Berawak Nasional (KKCTBN) 2020 merupakan salah satu upaya meningkatkan kualitas SDM yang mumpuni di bidang rancang bangun kapal melalui jalur akademis. Daya kreasi mahasiswa dalam kontes tersebut tidak hanya mencakup desain badan kapal yang baik dari segi performance dan manuver, tetapi juga mencakup perencanaan sistem penggerak, sistem navigasi yang handal, dengan memperhatikan keselarasan faktor teknis lainnya (engine matching).">

            <Grid container justify={"center"}>
                <Grid item container justify={"center"} md={12} xs={12} sm={12}>
                    {isMobile ? <MobileAppBar/> : <LandingAppBar/>}

                    <Grid item container md={10} sm={11} xs={11} style={{paddingBottom: 5,marginTop: 110, "wordWrap": "break-word"}}>
                        <Typography variant={"h4"} > <b> Pengumuman Kategori 1 </b> </Typography>
                        <hr width={"100%"} color={"#000"} style={{margin : "15px 0 25px 0"}}/>
                    </Grid>

                    <Grid item md={10} sm={11} xs={11} style={{paddingBottom: 5, "wordWrap": "break-word", marginBottom: 25}}>
                        <Typography variant={"h6"} style={{marginBottom : "15px"}}> 1. DIKRSA </Typography>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Rank</StyledTableCell>
                                        <StyledTableCell align={"center"}>Team</StyledTableCell>
                                        <StyledTableCell align={"center"}>1</StyledTableCell>
                                        <StyledTableCell align={"center"}>2</StyledTableCell>
                                        <StyledTableCell align={"center"}>3</StyledTableCell>
                                        <StyledTableCell align={"center"}>4</StyledTableCell>
                                        <StyledTableCell align={"center"}>5</StyledTableCell>
                                        <StyledTableCell align={"center"}>Total</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        dataState.DIKRSA.map((row, i) => (
                                            <StyledTableRow key={row.TeamName}>
                                                <StyledTableCell>{i+1}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.teamName}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc1}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc2}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc3}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc4}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc5}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.total}</StyledTableCell>
                                            </StyledTableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid item md={10} sm={11} xs={11} style={{paddingBottom: 5, "wordWrap": "break-word", marginBottom: 25}}>
                        <Typography variant={"h6"} style={{marginBottom : "15px"}}> 2. DIKAA </Typography>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Rank</StyledTableCell>
                                        <StyledTableCell align={"center"}>Team</StyledTableCell>
                                        <StyledTableCell align={"center"}>1</StyledTableCell>
                                        <StyledTableCell align={"center"}>2</StyledTableCell>
                                        <StyledTableCell align={"center"}>3</StyledTableCell>
                                        <StyledTableCell align={"center"}>4</StyledTableCell>
                                        <StyledTableCell align={"center"}>5</StyledTableCell>
                                        <StyledTableCell align={"center"}>Total</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        dataState.DIKAA.map((row, i) => (
                                            <StyledTableRow key={row.TeamName}>
                                                <StyledTableCell>{i+1}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.teamName}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc1}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc2}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc3}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc4}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc5}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.total}</StyledTableCell>
                                            </StyledTableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid item md={10} sm={11} xs={11} style={{paddingBottom: 5, "wordWrap": "break-word", marginBottom: 25}}>
                        <Typography variant={"h6"} style={{marginBottom : "15px"}}> 3. Ro-Ro </Typography>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Rank</StyledTableCell>
                                        <StyledTableCell align={"center"}>Team</StyledTableCell>
                                        <StyledTableCell align={"center"}>1</StyledTableCell>
                                        <StyledTableCell align={"center"}>2</StyledTableCell>
                                        <StyledTableCell align={"center"}>3</StyledTableCell>
                                        <StyledTableCell align={"center"}>4</StyledTableCell>
                                        <StyledTableCell align={"center"}>5</StyledTableCell>
                                        <StyledTableCell align={"center"}>Total</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        dataState.RoRo.map((row, i) => (
                                            <StyledTableRow key={row.TeamName}>
                                                <StyledTableCell>{i+1}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.teamName}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc1}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc2}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc3}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc4}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc5}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.total}</StyledTableCell>
                                            </StyledTableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid item container md={10} sm={11} xs={11} style={{paddingBottom: 5,marginTop: 35, "wordWrap": "break-word"}}>
                        <Typography variant={"h4"} > <b> Pengumuman Kategori 2 </b> </Typography>
                        <hr width={"100%"} color={"#000"} style={{margin : "15px 0 25px 0"}}/>
                    </Grid>

                    <Grid item md={10} sm={11} xs={11} style={{paddingBottom: 5, "wordWrap": "break-word", marginBottom: 25}}>
                        <Typography variant={"h6"} style={{marginBottom : "15px"}}> 1. ASV </Typography>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Rank</StyledTableCell>
                                        <StyledTableCell align={"center"}>Team</StyledTableCell>
                                        <StyledTableCell align={"center"}>1</StyledTableCell>
                                        <StyledTableCell align={"center"}>2</StyledTableCell>
                                        <StyledTableCell align={"center"}>3</StyledTableCell>
                                        <StyledTableCell align={"center"}>4</StyledTableCell>
                                        <StyledTableCell align={"center"}>5</StyledTableCell>
                                        <StyledTableCell align={"center"}>Total</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        rtDataState.ASV.map((row, i) => (
                                            <StyledTableRow key={row.TeamName}>
                                                <StyledTableCell>{i+1}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.teamName}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc1}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc2}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc3}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc4}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc5}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.total}</StyledTableCell>
                                            </StyledTableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid item md={10} sm={11} xs={11} style={{paddingBottom: 5, "wordWrap": "break-word", marginBottom: 25}}>
                        <Typography variant={"h6"} style={{marginBottom : "15px"}}> 2. ERC </Typography>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Rank</StyledTableCell>
                                        <StyledTableCell align={"center"}>Team</StyledTableCell>
                                        <StyledTableCell align={"center"}>1</StyledTableCell>
                                        <StyledTableCell align={"center"}>2</StyledTableCell>
                                        <StyledTableCell align={"center"}>3</StyledTableCell>
                                        <StyledTableCell align={"center"}>4</StyledTableCell>
                                        <StyledTableCell align={"center"}>5</StyledTableCell>
                                        <StyledTableCell align={"center"}>Total</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        rtDataState.ERC.map((row, i) => (
                                            <StyledTableRow key={row.TeamName}>
                                                <StyledTableCell>{i+1}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.teamName}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc1}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc2}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc3}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc4}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc5}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.total}</StyledTableCell>
                                            </StyledTableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>

                    <Grid item md={10} sm={11} xs={11} style={{paddingBottom: 5, "wordWrap": "break-word", marginBottom: 25}}>
                        <Typography variant={"h6"} style={{marginBottom : "15px"}}> 3. FERC </Typography>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Rank</StyledTableCell>
                                        <StyledTableCell align={"center"}>Team</StyledTableCell>
                                        <StyledTableCell align={"center"}>1</StyledTableCell>
                                        <StyledTableCell align={"center"}>2</StyledTableCell>
                                        <StyledTableCell align={"center"}>3</StyledTableCell>
                                        <StyledTableCell align={"center"}>4</StyledTableCell>
                                        <StyledTableCell align={"center"}>5</StyledTableCell>
                                        <StyledTableCell align={"center"}>Total</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        rtDataState.FERC.map((row, i) => (
                                            <StyledTableRow key={row.TeamName}>
                                                <StyledTableCell>{i+1}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.teamName}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc1}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc2}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc3}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc4}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc5}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.total}</StyledTableCell>
                                            </StyledTableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>


                    <Grid item container md={10} sm={11} xs={11} style={{paddingBottom: 5,marginTop: 35, "wordWrap": "break-word"}}>
                        <Typography variant={"h4"} > <b> Pengumuman Kategori 3 </b> </Typography>
                        <hr width={"100%"} color={"#000"} style={{margin : "15px 0 25px 0"}}/>
                    </Grid>

                    <Grid item md={10} sm={11} xs={11} style={{paddingBottom: 5, "wordWrap": "break-word", marginBottom: 25}}>
                        <Typography variant={"h6"} style={{marginBottom : "15px"}}> Poster </Typography>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Rank</StyledTableCell>
                                        <StyledTableCell align={"center"}>Team</StyledTableCell>
                                        <StyledTableCell align={"center"}>1</StyledTableCell>
                                        <StyledTableCell align={"center"}>2</StyledTableCell>
                                        <StyledTableCell align={"center"}>3</StyledTableCell>
                                        <StyledTableCell align={"center"}>4</StyledTableCell>
                                        <StyledTableCell align={"center"}>5</StyledTableCell>
                                        <StyledTableCell align={"center"}>Total</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        dataState.Poster.map((row, i) => (
                                            <StyledTableRow key={row.TeamName}>
                                                <StyledTableCell>{i+1}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.teamName}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc1}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc2}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc3}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc4}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.sc5}</StyledTableCell>
                                                <StyledTableCell align={"center"}>{row.total}</StyledTableCell>
                                            </StyledTableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </TableContainer>
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

export default RankPage;