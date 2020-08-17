import React from 'react'
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
                    Open File
                </Button>
            </Link>,
            <Link to={''} style={{textDecoration: 'none'}}>
                <Button variant={'contained'} color={'primary'}>
                    Open File
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
                    Open File
                </Button>
            </Link>,
            <Link to={''} style={{textDecoration: 'none'}}>
                <Button variant={'contained'} color={'primary'}>
                    Open File
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

    return (
        <Grid container style={{width: '100%'}}>
            <Scrollable>
                <Card style={{width: '100%'}}>
                    <CardContent>
                        <Grid container spacing={1}>
                            <Grid item md={12} style={{marginBottom: 20}}>
                                <Typography variant={"h4"}>Garangan AI</Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Typography variant={"body2"} className={classes.label}>
                                    Type of Competition
                                </Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Typography variant={"h6"}>
                                    Lomba Inovasi Desain
                                </Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Typography variant={"body2"} className={classes.label}>
                                    Team Leader Name
                                </Typography>
                            </Grid>
                            <Grid item md={8}>
                                <Typography variant={"h6"}>
                                    Rerereree
                                </Typography>
                            </Grid>
                            <Grid item md={12}>
                                <Typography variant={"body2"} className={classes.label}>
                                    Supervisory Lecturer Name
                                </Typography>
                            </Grid>
                            <Grid item md={8}>
                                <Typography variant={"h6"}>
                                    Rere, DD.Os
                                </Typography>
                            </Grid>
                            <Grid item md={2} style={{textAlign: 'right'}}>
                                <Button variant={'outlined'} fullWidth>
                                    Student Mandate
                                </Button>
                            </Grid>
                            <Grid item md={2} style={{textAlign: 'right'}}>
                                <Button variant={'outlined'} fullWidth>
                                    Lecturer Mandate
                                </Button>
                            </Grid>
                            <Grid item md={12} style={{marginTop: 25}}>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="customized table">
                                        <TableHead>
                                            <TableRow>
                                                <StyledTableCell>Full Name</StyledTableCell>
                                                <StyledTableCell align="right">Email Address</StyledTableCell>
                                                <StyledTableCell align="right">Student ID Number</StyledTableCell>
                                                <StyledTableCell align="right">Phone Number</StyledTableCell>
                                                <StyledTableCell align="right">Complete Address</StyledTableCell>
                                                <StyledTableCell align="right">Student ID Card</StyledTableCell>
                                                <StyledTableCell align="right">Identity Card</StyledTableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {rows.map((row) => (
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