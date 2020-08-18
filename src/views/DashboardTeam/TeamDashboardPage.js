import React, {useMemo, useState} from 'react'
import {CardContent, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";
import purple from "@material-ui/core/colors/purple";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import {Link} from "react-router-dom";
import Scrollable from "../../components/Scrollable";
import {ENDPOINT} from "../../configs/api";
import {STORAGE_KEY} from "../../configs/local_storage";


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

const createData = (competitionType, status, submission) => {
    return {competitionType, status, submission};
}


const rows = [
        createData(
            'Desain Kapal Rumah Sakit',
            <Button variant={"outlined"} style={{color: 'green'}}>Already uploaded</Button>,
            <Link style={{textDecoration: 'none'}} href={'/dashboard/team/submission'}>
                <Button variant={'contained'} color={'secondary'}>Submission</Button>
            </Link>
        ),
        createData(
            'Desain Kapal Rumah Sakit',
            <Button variant={"outlined"} style={{color: 'red'}}>Not uploaded yet</Button>,
            <Link style={{textDecoration: 'none'}} href={'/dashboard/team/submission'}>
                <Button variant={'contained'} color={'secondary'}>Submission</Button>
            </Link>
        ),
    ]
;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    table: {
        minWidth: '100%',
    },
    header: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(2),
    },
    containedPurple: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        "&:hover": {
            backgroundColor: purple[700],
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: purple[500]
            }
        }
    },
    url: {
        textDecoration: 'none'
    }
}));


const TeamDashboardPage = props => {
    const classes = useStyles();

    const [competitionRow, setCompetitionRow] = useState([])
    const [state, setState] = useState({
        TeamFound : false
    })


    useMemo(() => {
        fetch(ENDPOINT.TEAM + "check/", {method: "GET", headers:{"Token" : localStorage.getItem(STORAGE_KEY.JWT)}})
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                if (resJSON["data"] !== null) {
                    let cRA = []

                    resJSON['data']['Competitions'].map((competition, i) => {
                        if (competition["CompetitionDetail"]["ID"] !== 0) {
                            cRA.push(
                                createData(
                                    competition["CompetitionDetail"]["Name"],
                                    <Button variant={"outlined"} style={{color: 'green'}}>Already uploaded</Button>,
                                    <Button component={Link} to={'/dashboard/team/submission'} variant={'contained'} color={'secondary'}>Submission</Button>
                                )
                            )
                        }
                    })

                    setCompetitionRow([...cRA]);
                    setState({
                        ...state,
                        TeamFound: true
                    })
                }
            })

    }, [])

    return (
        <Grid container style={{width: "100%"}}>
            <Scrollable>
                <Card style={{width: '100%'}}>
                    <CardContent>
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant={"h5"}>Team Management</Typography>
                        </Grid>
                        <Grid item md={4} sm={12} xs={12} style={{marginTop: 20}}>
                            <Link to={'/dashboard/team/edit'} style={{textDecoration: 'none'}}>
                                <Button fullWidth variant={'contained'} color={'primary'}>{state.TeamFound ? "Edit Team" : "Create a new team"}  </Button>
                            </Link>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} style={{marginTop: 25}}>
                            <TableContainer component={Paper}>
                                <Table className={classes.table} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell align="left">Type of Competition</StyledTableCell>
                                            <StyledTableCell align="right">Status</StyledTableCell>
                                            <StyledTableCell align="right">Action</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {competitionRow.map((row) => (
                                            <StyledTableRow key={row.name}>
                                                <StyledTableCell align="left">{row.competitionType}</StyledTableCell>
                                                <StyledTableCell align="right">{row.status}</StyledTableCell>
                                                <StyledTableCell align="right">{row.submission}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>

                    </CardContent>
                </Card>
            </Scrollable>
        </Grid>
    )
}

export default TeamDashboardPage;