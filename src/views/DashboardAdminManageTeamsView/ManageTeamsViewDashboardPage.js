import React, {useMemo, useState} from 'react'
import {CardContent, FormControl, Typography} from "@material-ui/core";
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
import Link from "@material-ui/core/Link";
import {Scrollable} from "../../components";
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

const createData = (fullName, emailAddress, studentIdNumber, phoneNumber, completeAddress, studentIdCard, identityCard) => {
    return {fullName, emailAddress, studentIdNumber, phoneNumber, completeAddress, studentIdCard, identityCard};
}


const rows = [
        createData('Rodirgo',
            'Desain Kapal Rumah Sakit',
            '2018239123912',
            '6281239213912',
            'Jl. Ikan Tongkol, No. 9231 Malang',
            <Link to={''} style={{textDecoration: 'none'}}>
                <Button variant={'contained'} color={'primary'}>
                    Buka File
                </Button>
            </Link>,
            <Link to={''} style={{textDecoration: 'none'}}>
                <Button variant={'contained'} color={'primary'}>
                    Buka File
                </Button>
            </Link>
        ),
        createData('Rodirgo',
            'Desain Kapal Rumah Sakit',
            '2018239123912',
            '6281239213912',
            'Jl. Ikan Tongkol, No. 9231 Malang',
            <Link to={''} style={{textDecoration: 'none'}}>
                <Button variant={'contained'} color={'primary'}>
                    Buka File
                </Button>
            </Link>,
            <Link to={''} style={{textDecoration: 'none'}}>
                <Button variant={'contained'} color={'primary'}>
                    Buka File
                </Button>
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
    label: {
        marginTop: 20
    }


}));


const ManageTeamsViewDashboardPage = props => {
    const classes = useStyles();

    const {tid} = props.match.params

    const [teamData, setTeamData] = useState({
        Name: "",
        LecturerName: "",
        MembersRow: [],
        Competitions: [],
        LeaderDetail: {},
        Submission: {}
    })

    useMemo(() => {
        fetch(ENDPOINT.TEAM + `check/${tid}`, {method: "GET"})
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                const {Members} = resJSON['data']

                console.log(resJSON)

                let mR = [];

                Members.map((v, i) => {
                    const {UserDetail} = v

                    mR.push(
                        createData(
                            UserDetail["FullName"],
                            UserDetail["Email"],
                            UserDetail["StudentID"],
                            UserDetail["Phone"],
                            UserDetail["Address"],
                            <Link to={''} style={{textDecoration: 'none'}}>
                                <Button variant={'contained'} color={'primary'}
                                        onClick={() => {
                                            window.open(ENDPOINT.SUBMISSION + v.Submission.StudentIdentityCardSubmission.ID + "/stream", '_blank')
                                        }}>
                                    Buka File
                                </Button>
                            </Link>,
                            <Link to={''} style={{textDecoration: 'none'}}>
                                <Button variant={'contained'} color={'primary'}
                                        onClick={() => {
                                            window.open(ENDPOINT.SUBMISSION + v.Submission.IdentityCardSubmission.ID + "/stream", '_blank')
                                        }}>
                                    Buka File
                                </Button>
                            </Link>
                        )
                    )
                })

                setTeamData({
                    ...resJSON['data'],
                    MembersRow: mR
                })
            })

        return () => {
        }
    }, [])


    return (
        <Grid container style={{width: '100%'}}>
            <Scrollable>
                <Card style={{width: '100%'}}>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item md={12} style={{marginBottom: 20}}>
                                <Typography variant={"h4"}>{teamData.Name}</Typography>
                            </Grid>
                            <Grid item md={12}>


                                <Typography variant={"body2"} className={classes.label}>
                                    Tipe Kompetisi
                                </Typography>
                            </Grid>
                            <Grid item md={12}>
                                {
                                    teamData.Competitions.map((c, j) => {

                                        return (
                                            c['CompetitionDetail']['CompetitionGroup']['Name'] !== "" ?
                                                <Typography variant={"h6"}>
                                                    <li>
                                                        {c['CompetitionDetail']['CompetitionGroup']['Name']}
                                                    </li>
                                                </Typography>
                                                :
                                                null
                                        )
                                    })
                                }
                            </Grid>
                            <Grid item md={12}>
                                <Typography variant={"body2"} className={classes.label}>
                                    Nama Pemimpin Tim
                                </Typography>
                            </Grid>
                            <Grid item md={8}>
                                <Typography variant={"h6"}>
                                    {teamData.LeaderDetail.FullName}
                                </Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Typography variant={"body2"} className={classes.label}>
                                    Nama Dosen Pengawas
                                </Typography>
                            </Grid>
                            <Grid item md={8}>
                                <Typography variant={"h6"}>
                                    {teamData.LecturerName}
                                </Typography>
                            </Grid>
                            <Grid item md={2} style={{textAlign: 'right'}}>
                                <Button variant={'outlined'} fullWidth
                                        onClick={() => {
                                            window.open(ENDPOINT.SUBMISSION + teamData.Submission.StudentMandateLetter.ID + "/stream", '_blank')
                                        }}>
                                    Amanat Mahasiswa
                                </Button>
                            </Grid>
                            <Grid item md={2} style={{textAlign: 'right'}}>
                                <Button variant={'outlined'} fullWidth
                                        onClick={() => {
                                            window.open(ENDPOINT.SUBMISSION + teamData.Submission.LecturerMandateLetter.ID + "/stream", '_blank')
                                        }}>
                                    Amanat Dosen
                                </Button>
                            </Grid>
                            <Grid item md={12} style={{marginTop: 25}}>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Full Name</StyledTableCell>
                                                <StyledTableCell align="right">Alamat Email</StyledTableCell>
                                                <StyledTableCell align="right">Nomor ID Mahasiswa</StyledTableCell>
                                                <StyledTableCell align="right">Nomor Telepon</StyledTableCell>
                                                <StyledTableCell align="right">Alamat Lengkap</StyledTableCell>
                                                <StyledTableCell align="right">Kartu Tanda Mahasiswa</StyledTableCell>
                                                <StyledTableCell align="right">Kartu Tanda Penduduk</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {teamData.MembersRow.map((row) => (
                                                <StyledTableRow key={row.name}>
                                                    <StyledTableCell component="th" scope="row">
                                                        {row.fullName}
                                                    </StyledTableCell>
                                                    <StyledTableCell align="right">{row.emailAddress}</StyledTableCell>
                                                    <StyledTableCell
                                                        align="right">{row.studentIdNumber}</StyledTableCell>
                                                    <StyledTableCell align="right">{row.phoneNumber}</StyledTableCell>
                                                    <StyledTableCell
                                                        align="right">{row.completeAddress}</StyledTableCell>
                                                    <StyledTableCell align="right">{row.studentIdCard}</StyledTableCell>
                                                    <StyledTableCell align="right">{row.identityCard}</StyledTableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Scrollable>
        </Grid>
    )
}

export default ManageTeamsViewDashboardPage;