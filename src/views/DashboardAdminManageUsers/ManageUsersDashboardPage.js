import React, {forwardRef} from 'react'
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
import MaterialTable from "material-table";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {Scrollable} from "../../components";

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref}/>),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};


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

const createData = (fullName, emailAddress, studentIdNumber, phoneNumber, completeAddress, studentIdCard, identityCard, deleteUser) => {
    return {
        fullName,
        emailAddress,
        studentIdNumber,
        phoneNumber,
        completeAddress,
        studentIdCard,
        identityCard,
        deleteUser
    };
}


const rows = [
        createData('Garangan AI',
            'tes123@gmail.com',
            '20181231231',
            '62812312',
            'Jl. Ikan Segar No. 9331 Malang',
            <Link style={{textDecoration: 'none'}}>
                <Button variant={'contained'} color={'secondary'}>Open File</Button>
            </Link>,
            <Link style={{textDecoration: 'none'}}>
                <Button variant={'contained'} color={'secondary'}>Open File</Button>
            </Link>,
            <Link style={{textDecoration: 'none'}}>
                <Button variant={'contained'} color={'primary'}>Delete</Button>
            </Link>
        ),
        createData('Garangan AI',
            'tes123@gmail.com',
            '20181231231',
            '62812312',
            'Jl. Ikan Segar No. 9331 Malang',
            <Link style={{textDecoration: 'none'}}>
                <Button variant={'contained'} color={'secondary'}>Open File</Button>
            </Link>,
            <Link style={{textDecoration: 'none'}}>
                <Button variant={'contained'} color={'secondary'}>Open File</Button>
            </Link>,
            <Link style={{textDecoration: 'none'}}>
                <Button variant={'contained'} color={'primary'}>Delete</Button>
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


const ManageUsersDashboardPage = props => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        columns: [
            {title: 'Full Name', field: 'fullName'},
            {title: 'Email Address', field: 'emailAddress'},
            {title: 'Student ID Number', field: 'studentIdNumber'},
            {title: 'Phone Number', field: 'phoneNumber'},
            {title: 'Complete Address', field: 'completeAddress'},
            {title: 'Student ID Card', field: 'studentIdCard'},
            {title: 'Identity Card', field: 'identityCard'},
            {title: 'Delete User', field: 'deleteUser'}
        ],
        data: [
            {
                fullName: 'Apobobo',
                emailAddress: 'apoboboasda@gmail.com',
                studentIdNumber: '2012831',
                phoneNumber: '6281232131',
                completeAddress: 'Jl. Ikan Pahlawan No. -21 Malang',
                studentIdCard: <Button variant={'contained'} color={'secondary'}>Open File</Button>,
                identityCard: <Button variant={'contained'} color={'secondary'}>Open File</Button>,
                deleteUser: <Button variant={'contained'} color={'primary'}>Delete User</Button>,

            },
        ],
    });

    return (

        <Grid container style={{width: '100%'}}>
            <Scrollable>
                <Grid item md={12}>
                    <MaterialTable
                        icons={tableIcons}
                        title="Manage Users"
                        columns={state.columns}
                        data={state.data}
                    />
                </Grid>
            </Scrollable>
        </Grid>

    )
}

export default ManageUsersDashboardPage;