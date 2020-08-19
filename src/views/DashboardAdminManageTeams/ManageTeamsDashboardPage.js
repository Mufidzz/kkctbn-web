import React, {forwardRef, useMemo} from 'react'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/Button";
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
import {ENDPOINT} from "../../configs/api";

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

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    bullet: {
        display: 'inline-block',
        transform: 'scale(0.8)',
    },
}));


const ManageRegistrationsDashboardPage = props => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const [state, setState] = React.useState({
        columns: [
            {title: 'Team Name', field: 'teamName'},
            {title: 'Campus Name', field: 'campusName'},
            {title: 'Type of Competition', field: 'typeCompetition'},
            {title: 'Documents', field: 'documents'},
            {title: 'Delete', field: 'delete'}
        ],
        data: [
            {
                teamName: 'GaranganAI',
                campusName: 'Universitas Muhammadiyah Malang',
                typeCompetition: 'Desain Kapal',
                documents:
                    <Link to={'/dashboard/manage/teams/view'} style={{textDecoration: 'none'}}>
                        <Button variant={'contained'} color={'secondary'}>View Documents</Button>
                    </Link>
                ,
                delete: <Button variant={'contained'} color={'primary'}>Delete Team</Button>
            }
        ],
    });

    useMemo(() => {
        fetch(ENDPOINT.TEAM, {method: "GET"})
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                let data = []
                resJSON['data'].map((v,i) => {
                    let cS = ""
                    v['Competitions'].map((c,j) => {
                        cS += c['CompetitionDetail']['CompetitionGroup']['Name'] === "" ? "" : "•"
                        cS += c['CompetitionDetail']['CompetitionGroup']['Name']
                        cS += c['CompetitionDetail']['CompetitionGroup']['Name'] === "" ? "" : "\n\n"
                    })

                    data.push({
                        teamName: v['Name'],
                        campusName: '-',
                        typeCompetition: cS,
                        documents:
                            <Link to={'/dashboard/manage/teams/view'} style={{textDecoration: 'none'}}>
                                <Button variant={'contained'} color={'secondary'}>View Documents</Button>
                            </Link>
                        ,
                        delete: <Button variant={'contained'} color={'primary'}>Delete Team</Button>
                    })
                })

                setState({
                    ...state,
                    data : [...data]
                })
            })
    }, [])

    return (
        <Grid container style={{width: '100%'}}>
            <Scrollable>
                <Grid item md={12}>
                    <MaterialTable
                        icons={tableIcons}
                        title="Manage Teams"
                        columns={state.columns}
                        data={state.data}
                    />
                </Grid>
            </Scrollable>
        </Grid>
    )
}

export default ManageRegistrationsDashboardPage;