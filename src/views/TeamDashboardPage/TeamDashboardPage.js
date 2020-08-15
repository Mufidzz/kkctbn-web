import React from 'react'
import {CardContent, FormControl, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import green from "@material-ui/core/colors/green";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import purple from "@material-ui/core/colors/purple";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import CardHeader from "@material-ui/core/CardHeader";
import Link from "@material-ui/core/Link";


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#f50057',
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

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}


const rows = [
    createData('Garangan AI',
        'Desain Kapal Rumah Sakit',
        <Button variant={"outlined"} style={{color: 'green'}}>Already uploaded</Button>,
        <Button variant={'contained'} color={'secondary'}>Submission</Button>,
        <Button variant={'contained'} color={'primary'}>Edit Team</Button>),
    createData('Ayam Kalkulus',
        'Desain Kapal Rumah Sakit',
        <Button variant={"outlined"} style={{color: 'red'}}>Not uploaded yet</Button>,
        <Button variant={'contained'} color={'secondary'}>Submission</Button>,
        <Button variant={'contained'} color={'primary'}>Edit Team</Button>),

];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    table: {
        minWidth: 700,
    },
    header: {
        marginTop: '1vh',
        marginBottom: '2vh',
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
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Grid container>
            <Card style={{width: '100%'}}>
                <CardContent>
                    <Grid item md={12}>
                        <Typography variant={"h5"}>Team Management</Typography>
                    </Grid>
                    <Grid item md={12} style={{marginTop: 25}}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Team Name</StyledTableCell>
                                        <StyledTableCell align="right">Type of Competition</StyledTableCell>
                                        <StyledTableCell align="right">Status</StyledTableCell>
                                        <StyledTableCell align="right">Submission</StyledTableCell>
                                        <StyledTableCell align="right">Action</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.name}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.name}
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item md={2} style={{marginTop: 20}}>
                        <Link href={'/dashboard/team/create'} style={{textDecoration: 'none'}}>
                            <Button variant={'contained'}>Create a new team</Button>
                        </Link>
                    </Grid>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default TeamDashboardPage;