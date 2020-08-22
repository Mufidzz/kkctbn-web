import React, {useMemo, useState} from 'react'
import {CardContent, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import {Scrollable} from "../../components";
import {Link} from "react-router-dom";
import {ENDPOINT} from "../../configs/api";


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

function createData(title, action) {
    return {title, action};
}




const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 700,
    },
    header: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(4),
    },
    viewButton : {
        width: 200,
        backgroundColor : theme.palette.primary.main,
        color : "#FFFFFF",
        "&:hover" : {
            backgroundColor : theme.palette.primary.dark,
            color : "#FFFFFF",
        }
    }
}));


const InformationDashboardPage = props => {
    const classes = useStyles();

    const [informationData, setInformationData] = useState([])


    const rows = [
            createData('Title',
                <Button className={classes.viewButton}> View </Button>,
            ),
        ]
    ;

    useMemo(() => {
        fetch(ENDPOINT.NEWS+"-/information", {method: "GET"})
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                let arr = []

                resJSON['data'].map((v,i) => {
                    arr.push(
                        createData(
                            v.Title,
                            <Button className={classes.viewButton}> View </Button>
                        )
                    )
                })

                setInformationData(arr)
            })
    },[])

    return (
        <Grid container style={{width: "100%"}}>
            <Scrollable>
                <Grid item md={12} container spacing={2}>
                    <Grid item md={3}>
                        <Button component={Link} to={"/dashboard/user"} fullWidth style={{minHeight: 60, marginBottom: 20}} variant={'contained'} color={'primary'}
                                size={'large'} startIcon={<CloudDownloadIcon/>}>
                            Lengkapi Profil
                        </Button>
                    </Grid>
                    <Grid item md={3}>
                        <Button component={Link} to={"/dashboard/team"} fullWidth style={{minHeight: 60, marginBottom: 20}} variant={'contained'} color={'primary'}
                                size={'large'} startIcon={<CloudDownloadIcon/>}>
                            Buat Tim
                        </Button>
                    </Grid>
                    <Grid item md={3}>
                        <Button fullWidth style={{minHeight: 60, marginBottom: 20}} variant={'contained'} color={'primary'}
                                size={'large'} startIcon={<CloudDownloadIcon/>}>
                            Download Buku Panduan
                        </Button>
                    </Grid>
                </Grid>
                <Grid item md={12} container>
                    <Card style={{width: "100%"}}>
                        <CardContent>
                            <Grid item md={12}>
                                <Typography variant={"h5"}>Informasi</Typography>
                            </Grid>
                            <Grid item md={12} style={{marginTop: 25}}>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Judul Utama Informasi</StyledTableCell>
                                                <StyledTableCell align="right">Isi</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {informationData.map((row) => (
                                                <StyledTableRow key={row.title}>
                                                    <StyledTableCell component="th" scope="row">
                                                        {row.title}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">{row.action}</StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Scrollable>
        </Grid>
    )
}

export default InformationDashboardPage;