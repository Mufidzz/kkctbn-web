import React, {forwardRef, useMemo, useState} from 'react'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
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
import {ConfirmationModal, Scrollable} from "../../components";
import {ENDPOINT} from "../../configs/api";
import {Link} from "react-router-dom";
import PrivatePage from "../../components/PrivatePage";
import {STORAGE_KEY} from "../../configs/local_storage";

const tableIcons = {
    Add: forwardRef((props, ref) => {
        return <AddBox {...props} ref={ref}/>;
    }),
    Check: forwardRef((props, ref) => {
        return <Check {...props} ref={ref}/>;
    }),
    Clear: forwardRef((props, ref) => {
        return <Clear {...props} ref={ref}/>;
    }),
    Delete: forwardRef((props, ref) => {
        return <DeleteOutline {...props} ref={ref}/>;
    }),
    DetailPanel: forwardRef((props, ref) => {
        return <ChevronRight {...props} ref={ref}/>;
    }),
    Edit: forwardRef((props, ref) => {
        return <Edit {...props} ref={ref}/>;
    }),
    Export: forwardRef((props, ref) => {
        return <SaveAlt {...props} ref={ref}/>;
    }),
    Filter: forwardRef((props, ref) => {
        return <FilterList {...props} ref={ref}/>;
    }),
    FirstPage: forwardRef((props, ref) => {
        return <FirstPage {...props} ref={ref}/>;
    }),
    LastPage: forwardRef((props, ref) => {
        return <LastPage {...props} ref={ref}/>;
    }),
    NextPage: forwardRef((props, ref) => {
        return <ChevronRight {...props} ref={ref}/>;
    }),
    PreviousPage: forwardRef((props, ref) => {
        return <ChevronLeft {...props} ref={ref}/>;
    }),
    ResetSearch: forwardRef((props, ref) => {
        return <Clear {...props} ref={ref}/>;
    }),
    Search: forwardRef((props, ref) => {
        return <Search {...props} ref={ref}/>;
    }),
    SortArrow: forwardRef((props, ref) => {
        return <ArrowDownward {...props} ref={ref}/>;
    }),
    ThirdStateCheck: forwardRef((props, ref) => {
        return <Remove {...props} ref={ref}/>;
    }),
    ViewColumn: forwardRef((props, ref) => {
        return <ViewColumn {...props} ref={ref}/>;
    })
};

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    table: {
        minWidth: 700,
    }
}));


const ManageNewsList = () => {
    const classes = useStyles();

    const [state, setState] = React.useState({
        columns: [
            {title: 'Title', field: 'title'},
            {title: 'Type', field: 'type'},
            {title: 'Edit', field: 'edit'},
            {title: 'Delete', field: 'delete'},
        ],
        data: [],
    });

    const [modalOpen, setModalOpen] = useState(false)
    const [modalBody, setModalBody] = useState("")

    const showModal = (text) => {
        setModalBody(text)
        setModalOpen(true)
    }

    const resendActivation = () => {
        showModal(`Aktivasi Ulang Telah Terkirim`)
    }
    const sendPasswordChange = () => {
        showModal(`Konfirmasi Ganti Password Sudah Terkirim`)
    }


    const deleteNews = (id) => {
        fetch(ENDPOINT.NEWS + id, {method: "DELETE", headers : {
            Token : localStorage.getItem(STORAGE_KEY.JWT)
            }})
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                showModal("News Delete Status : " + resJSON['message']);
            })
    }

    useMemo(() => {
        fetch(ENDPOINT.NEWS, {method: "GET"})
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                let data = []
                resJSON['data'].map((v,i) => {
                    data.push({
                        title : v.Title,
                        type: v.Type === 0 ? "News" : "Information",
                        edit: <Button component={Link} to={"/dashboard/manage/news/" + v.ID} variant={"contained"} color={'secondary'}>Edit</Button>,
                        delete: <Button variant={"contained"} color={'primary'} onClick={() => deleteNews(v.ID)}>Hapus</Button>,
                    })
                })

                setState({
                    ...state,
                    data : [...data]
                })
            })
    }, [])




    return (
        <PrivatePage whitelistKey={["ROLE_ADMIN"]}>
            <Grid container style={{width: '100%'}}>

                <Scrollable>
                    <Grid item md={6} style={{marginBottom : 12, marginTop: 12}}>
                        <Button component={Link} to={"/dashboard/manage/news/create"} variant={"contained"} fullWidth color={'primary'}>Buat Baru</Button>
                    </Grid>
                    <Grid item md={12}>
                        <MaterialTable
                            icons={tableIcons}
                            title="Manage News"
                            columns={state.columns}
                            data={state.data}
                        />
                    </Grid>
                </Scrollable>
            </Grid>
            <ConfirmationModal textBody={modalBody} open={modalOpen} setOpen={setModalOpen}/>
        </PrivatePage>
    )
}

export default ManageNewsList;