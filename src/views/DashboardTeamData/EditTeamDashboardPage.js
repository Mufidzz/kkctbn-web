import React, {Fragment, useEffect, useMemo, useState} from 'react'
import {CardContent, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import CardHeader from "@material-ui/core/CardHeader";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import RemoveIcon from '@material-ui/icons/Remove';
import Switch from "@material-ui/core/Switch";
import Autocomplete from "@material-ui/lab/Autocomplete";
import {STORAGE_KEY} from "../../configs/local_storage";
import {ENDPOINT} from "../../configs/api";
import CircularProgress from "@material-ui/core/CircularProgress";
import SaveIcon from '@material-ui/icons/Save';
import FileInputComponent from "react-file-input-previews-base64";
import {ConfirmationModal, PrivatePage} from "../../components";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    label: {
        marginBottom: 10
    },
    containedLightBlue: {
        color: '#FFF',
        backgroundColor: '#039be5',
        "&:hover": {
            backgroundColor: '#0277bd',
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: '#039be5'
            }
        }
    },
    containedTeal: {
        color: '#FFF',
        backgroundColor: '#009688',
        "&:hover": {
            backgroundColor: '#00796b',
            "@media (hover: none)": {
                backgroundColor: '#009688'
            }
        }
    },
    containedOrange: {
        color: '#FFF',
        backgroundColor: '#ff5722',
        "&:hover": {
            backgroundColor: '#e64a19',
            "@media (hover: none)": {
                backgroundColor: '#ff5722'
            }
        }
    },
    containedCyan: {
        color: '#FFF',
        backgroundColor: '#0097a7',
        "&:hover": {
            backgroundColor: '#006064',
            "@media (hover: none)": {
                backgroundColor: '#0097a7'
            }
        }
    },
    containedRed: {
        color: '#FFF',
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            "@media (hover: none)": {
                backgroundColor: theme.palette.primary.main
            }
        }
    },
    cardHeader: {
        backgroundColor: theme.palette.primary.main,
        color: '#FFF'
    },
    memberSelectorContainer: {
        paddingRight: theme.spacing(3)
    },
    activeMember: {
        color: '#FFF',
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            "@media (hover: none)": {
                backgroundColor: theme.palette.primary.main
            }
        }
    },
    inactiveMember: {
        color: theme.palette.primary.main,
        backgroundColor: "rgba(0,0,0,0)",
        border: "solid 1px " + theme.palette.primary.light,
        "&:hover": {
            color: theme.palette.white,
            backgroundColor: theme.palette.primary.light,
            "@media (hover: none)": {
                backgroundColor: "rgba(0,0,0,0)"
            }
        },
    },
    bottomSpacing: {
        marginBottom: 32
    }
}));


const EditTeamDashboardPage = props => {
    //Variable
    const classes = useStyles();
    const memberStruct = {
        UserDetail: {
            FullName: "",
            StudentID: "",
            Email: "",
            Phone: "",
            Address: "",
        },
    }

    const teamCompetitionStruct = {
        Status: false,
        CompetitionID: 0,
    }

    const memberFileDataStruct = {
        isUserFileChanged: false,
        StudentIdentityCardSubmission: {
            ID: 0,
            OriginFileName: "",
            Base: ""
        },
        IdentityCardSubmission: {
            ID: 0,
            OriginFileName: "",
            Base: ""
        }
    }
    const teamFileDataStruct = {
        isUserFileChanged: false,
        StudentIdentityCardSubmission: {
            ID: 0,
            OriginFileName: "",
            Base: ""
        },
        IdentityCardSubmission: {
            ID: 0,
            OriginFileName: "",
            Base: ""
        }
    }

    //State
    const [state, setState] = useState({
        flag: 0,
        initialMemberLength: 1,
        loading: true,
    })
    const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);
    const [formState, setFormState] = useState({
        Name: "",
        LecturerName: "",
        LecturerNIDN: ""
    })
    const [teamLeaderData, setTeamLeaderData] = useState({})
    const [memberData, setMemberData] = useState([
        memberStruct
    ]);
    const [memberFileData, setMemberFileData] = useState([
        memberFileDataStruct
    ])
    const [teamAdministrationData, setTeamAdministrationData] = useState({
        isChanged: false,
        TeamID: 0,
        StudentMandateLetter: {
            ...teamFileDataStruct
        },
        LecturerMandateLetter: {
            ...teamFileDataStruct
        }
    })
    const [teamCompetition, setTeamCompetition] = useState([
        teamCompetitionStruct,
        teamCompetitionStruct,
        {
            Status: true,
            CompetitionID: 7,
        },
    ])
    const [competitionList, setCompetitionList] = useState([])
    const [modalOpen, setModalOpen] = useState(false)
    const [modalAction, setModalAction] = useState(true)
    const [modalBody, setModalBody] = useState("")
    const [userEmailList, setUserEmailList] = useState([])

    //Use
    useMemo(() => {
        let mFA = []
        fetch(ENDPOINT.USER+`-/email`, {method: "GET"})
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                setUserEmailList(resJSON["data"]);
            })
        fetch(ENDPOINT.TEAM + "check", {method: "GET", headers: {"Token": localStorage.getItem(STORAGE_KEY.JWT)}})
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                if (resJSON["data"] !== null) {
                    const {LecturerName, LecturerNIDN, Name, Competitions, Members, LeaderDetail} = resJSON["data"]

                    setTeamLeaderData(LeaderDetail)
                    console.log(LeaderDetail)

                    setFormState({
                        ...formState,
                        LecturerName: LecturerName,
                        LecturerNIDN: LecturerNIDN,
                        Name: Name
                    })

                    setTeamCompetition([...Competitions])
                    setMemberData([...Members])

                    Members.map((v, i) => {
                        mFA.push(memberFileDataStruct)
                        fetch(ENDPOINT.USER_SUBMISSION + Members[i]['UserID'], {method: "GET"})
                            .then(res => {
                                if (res.status === 200) {
                                    return res.json()
                                }
                            })
                            .then(resJSON => {
                                mFA[i] = {
                                    ...memberFileDataStruct,
                                    StudentIdentityCardSubmission: {...resJSON['data']['StudentIdentityCardSubmission']},
                                    IdentityCardSubmission: {...resJSON['data']['IdentityCardSubmission']}
                                }
                            }).then(() => {
                            setMemberFileData(mFA)
                        })
                    })


                    fetch(ENDPOINT.TEAM_ADMINISTRATION_SUBMISSION + resJSON['data']["ID"], {method: "GET"})
                        .then(res => {
                            if (res.status === 200) {
                                return res.json()
                            }
                        })
                        .then(resJSON => {
                            setTeamAdministrationData({
                                ...teamAdministrationData,
                                LecturerMandateLetter: {...resJSON['data']['LecturerMandateLetter']},
                                StudentMandateLetter: {...resJSON['data']['StudentMandateLetter']}
                            })
                        })


                    setState({
                        ...state,
                        flag: 1,
                        initialMemberLength: Members.length,
                        loading: false
                    })
                } else {
                    setState({
                        ...state,
                        flag: 0
                    })
                }
            })

        if (localStorage.getItem(STORAGE_KEY.COMPETITION) === "" || localStorage.getItem(STORAGE_KEY.COMPETITION) === null) {
            fetch(ENDPOINT.COMPETITION, {method: "GET"})
                .then(res => {
                    if (res.status === 200) {
                        return res.json()
                    }
                })
                .then(resJSON => {
                    console.log(resJSON)
                    localStorage.setItem(STORAGE_KEY.COMPETITION, JSON.stringify(resJSON["data"]));
                    setCompetitionList(resJSON["data"]);
                })
        } else {
            setCompetitionList(JSON.parse(localStorage.getItem(STORAGE_KEY.COMPETITION)));
        }


        return () => {
        }
    }, [])


    useEffect(() => {
        console.log(competitionList)

    }, [competitionList])

    //Handle
    const handleTeamFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleMemberFormChange = (i, e) => {
        let mD = memberData;

        console.log(e.target.value)
        console.log(userEmailList.find((email) => email === e.target.value))

        if (e.target.name === "Email") {
            // if (e.target.value === teamLeaderData.Email) {
            if (userEmailList.find((email) => email === e.target.value) !== undefined) {
                setModalBody("Email Terdaftar tidak tidak dapat digunakan kembali");
                setModalAction(true)
                setModalOpen(true)

                mD[i] = {
                    ...mD[i],
                    UserDetail: {
                        ...mD[i].UserDetail,
                        [e.target.name]: ""
                    }
                }
                setMemberData([
                    ...mD
                ])
            } else {
                mD[i] = {
                    ...mD[i],
                    UserDetail: {
                        ...mD[i].UserDetail,
                        [e.target.name]: e.target.value
                    }
                }

            }
        } else {
            mD[i] = {
                ...mD[i],
                UserDetail: {
                    ...mD[i].UserDetail,
                    [e.target.name]: e.target.value
                }
            }
        }
        setMemberData([
            ...mD
        ])

    }

    const handleSetCompetition = (e, v, i) => {
        let tC = teamCompetition
        tC[i] = {
            ...tC[i],
            CompetitionID: v.ID
        }
        console.log(teamCompetition)

        setTeamCompetition([...tC])
        console.log(teamCompetition)
    }

    //Function
    const addMember = () => {
        if (memberData.length < 2) {
            setMemberData([
                ...memberData,
                memberStruct
            ])

            setMemberFileData([
                ...memberFileData,
                memberFileDataStruct
            ])
        }
    }

    const removeMember = () => {
        setSelectedMemberIndex(0)

        if (memberData.length > 1) {
            let memberArray = memberData
            memberArray.splice(selectedMemberIndex, 1)
            setMemberData([...memberArray])

            let memberFileArray = memberFileData
            memberFileData.splice(selectedMemberIndex, 1)
            setMemberFileData([...memberFileArray])
        }
    }

    const save = () => {
        setModalBody(
            <Fragment>
                <Grid container justify={"center"}>
                    <Grid item container justify={"center"} md={12} sm={12} xs={12}
                          style={{paddingTop: 10, paddingBottom: 10}}>
                        <CircularProgress color="primary"/>
                    </Grid>
                    <Grid item container justify={"center"} md={12} sm={12} xs={12}>
                        <Typography>Loading</Typography>
                    </Grid>
                </Grid>
            </Fragment>
        )
        setModalAction(false)
        setModalOpen(true)



        const json = {
            ...formState,
            Competitions: [
                ...teamCompetition
            ],
            Members: [
                ...memberData
            ]
        };


        fetch(ENDPOINT.TEAM, {
            method: state.flag === 1 ? "PUT" : "POST",
            headers: {
                'Token': localStorage.getItem(STORAGE_KEY.JWT)
            },
            body: JSON.stringify(json)
        })
            .then(res => {
                if (res.status >= 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                setModalBody(
                    <Fragment>
                        <Grid container justify={"center"}>
                            <Grid item container justify={"center"} md={12} sm={12} xs={12}
                                  style={{paddingTop: 10, paddingBottom: 10}}>
                                <CircularProgress color="primary"/>
                            </Grid>
                            <Grid item container justify={"center"} md={12} sm={12} xs={12}>
                                <Typography>Updating Member File Data</Typography>
                            </Grid>
                        </Grid>
                    </Fragment>
                )

                memberFileData.map((v, i) => {
                    console.log("JSON",
                        JSON.stringify({
                            UserID: resJSON['data']['Members'][i]["UserID"],
                            ...v
                        })
                    )

                    if (v.isUserFileChanged) {
                        console.log("JSON",
                            JSON.stringify({
                                UserID: resJSON['data']['Members'][i]["UserID"],
                                ...v
                            })
                        )

                        fetch(ENDPOINT.USER_SUBMISSION, {
                            method: "POST",
                            body: JSON.stringify({
                                UserID: resJSON['data']['Members'][i]["UserID"],
                                ...v
                            })
                        })
                            .then(res => {
                                if (res.status === 200) {
                                    return res.json()
                                }
                            })
                            .then(resJSON => {

                            })
                    }
                })

                if (teamAdministrationData.isChanged) {
                    setModalBody(
                        <Fragment>
                            <Grid container justify={"center"}>
                                <Grid item container justify={"center"} md={12} sm={12} xs={12}
                                      style={{paddingTop: 10, paddingBottom: 10}}>
                                    <CircularProgress color="primary"/>
                                </Grid>
                                <Grid item container justify={"center"} md={12} sm={12} xs={12}>
                                    <Typography>Updating Team Administration Data</Typography>
                                </Grid>
                            </Grid>
                        </Fragment>
                    )
                    setModalAction(false)

                    fetch(ENDPOINT.TEAM_ADMINISTRATION_SUBMISSION, {
                        method: "POST",
                        body: JSON.stringify({
                            ...teamAdministrationData,
                            TeamID: resJSON['data']['ID']
                        })
                    })
                        .then(res => {
                            if (res.status === 200) {
                                return res.json()
                            }
                        })
                        .then(resJSON => {

                        })
                }
            })
            .then(() => {
                setModalAction(true)
                setModalBody(`Update Status Success`)
            })

    }


    const toggleCompetition = (index) => {
        let tC = teamCompetition;
        tC[index] = {
            ...tC[index],
            Status: !teamCompetition[index].Status,
            CompetitionID: 0
        }
        setTeamCompetition([...tC])
    }


    return (
        // state.loading ? <CircularProgress/> :
        <PrivatePage whitelistKey={["ROLE_USER"]}>

            <Grid container>
                <Grid item md={12}>

                    <Card style={{width: '100%'}}>
                        <CardHeader
                            title={'Edit team'}
                            className={classes.cardHeader}
                        />


                        <CardContent style={{marginTop: 25}}>
                            <Grid container spacing={2}>
                                <Grid item md={12} sm={12} xs={12}>
                                    <Typography variant={"body2"} className={classes.label}>Informasi Tim</Typography>
                                </Grid>
                                <Grid item md={12}>
                                    <TextField
                                        value={formState.Name}
                                        onChange={handleTeamFormChange}
                                        name="Name"
                                        className={classes.margin}
                                        label="Nama Tim"
                                        required
                                        variant="filled"
                                        placeholder={"Masukkan nama tim."}
                                        fullWidth
                                        helperText="ex : Panda Terbang"
                                    />
                                </Grid>

                                <Grid item md={12}>

                                    <TextField
                                        value={formState.LecturerNIDN}
                                        onChange={handleTeamFormChange}
                                        name="LecturerNIDN"
                                        className={classes.margin}
                                        label="NIDN Dosen Pembimbing"
                                        required
                                        variant="filled"
                                        placeholder={"Masukkan NIDN Dosen Pembimbing."} fullWidth
                                        helperText="ex : 2222...."
                                    />
                                </Grid>

                                <Grid item md={12}>

                                    <TextField
                                        value={formState.LecturerName}
                                        onChange={handleTeamFormChange}
                                        name="LecturerName"
                                        className={classes.margin}
                                        label="Nama Dosen Pembimbing"
                                        required
                                        variant="filled"
                                        placeholder={"Masukkan Nama Dosen Pembimbing."} fullWidth
                                        helperText="ex : Joni Irawan, S.Kom"
                                    />
                                </Grid>


                                <Grid item container md={12} sm={12} xs={12}>

                                    <Grid item md={12} sm={12} xs={12}>
                                        <Typography variant={"body2"} className={classes.label}>Pilihan
                                            Kompetisi</Typography>
                                    </Grid>


                                    <Grid item container md={12} sm={12} xs={12} justify={"center"}>
                                        {/*{competitionList != null ? competitionList.map((competition, i) => {*/}
                                        {/*    return (*/}
                                        {/*        <Grid item container md={11} sm={12} xs={12} justify={"center"}*/}
                                        {/*              alignItems={"center"} className={classes.bottomSpacing}>*/}
                                        {/*            <Grid item md={6} sm={12} xs={12}>*/}
                                        {/*                <FormControlLabel*/}
                                        {/*                    control={<Switch key={competition["Name"]}*/}
                                        {/*                                     checked={teamCompetition[i].Status}*/}
                                        {/*                                     onChange={() => competition["Competitions"].length <= 1 ? null : toggleCompetition(i)}*/}
                                        {/*                                     color={"primary"}/>}*/}
                                        
                                        {/*                    label={competition["Name"]}*/}
                                        {/*                />*/}
                                        {/*            </Grid>*/}
                                        {/*            <Grid item md={6} sm={12} xs={12}>*/}
                                        {/*                <Autocomplete*/}
                                        {/*                    disableClearable*/}
                                        {/*                    fullWidth*/}
                                        {/*                    disabled={competition["Competitions"].length <= 1 || !teamCompetition[i].Status}*/}
                                        {/*                    options={competition["Competitions"]}*/}
                                        {/*                    getOptionLabel={(option) => option.Name}*/}
                                        {/*                    value={competition["Competitions"].find(e => e.ID === teamCompetition[i].CompetitionID)}*/}
                                        {/*                    defaultValue={competition["Competitions"].find(e => e.ID === teamCompetition[i].CompetitionID)}*/}
                                        {/*                    onChange={(e, v) => handleSetCompetition(e, v, i)}*/}
                                        {/*                    renderInput={(params) =>*/}
                                        {/*                        <TextField {...params} fullWidth*/}
                                        {/*                                   label="Sub Kategori"*/}
                                        {/*                                   variant="filled"/>*/}
                                        {/*                    }*/}
                                        {/*                />*/}
                                        {/*            </Grid>*/}
                                        {/*            <Grid item container md={12} justify={"flex-end"}>*/}
                                        {/*                <Grid item md={6}>*/}
                                        {/*                    <Typography variant={"caption"}>*/}
                                        {/*                        Saat ini*/}
                                        {/*                        : <br/>{competition["Competitions"].find(e => e.ID === teamCompetition[i].CompetitionID) !== undefined ? competition["Competitions"].find(e => e.ID === teamCompetition[i].CompetitionID)["Name"] : "-"}*/}
                                        {/*                    </Typography>*/}
                                        {/*                </Grid>*/}
                                        {/*            </Grid>*/}
                                        {/*        </Grid>*/}
                                        {/*    )*/}
                                        {/*}) : <CircularProgress/>}*/}

                                    </Grid>
                                </Grid>


                                <Grid item md={12}>
                                    <hr style={{
                                        backgroundColor: '#000000',
                                    }}/>
                                </Grid>

                                <Grid item md={12}>
                                    <Typography variant={'body2'} style={{marginBottom: 10}}>
                                        Pengaturan Anggota
                                    </Typography>
                                </Grid>

                                <Grid item container md={12} justify={"flex-start"} spacing={2}>

                                    {memberData.map((v, i) => {
                                        return (
                                            <Grid item md={3}>
                                                <Button variant={selectedMemberIndex === i ? 'contained' : 'outlined'}
                                                        className={selectedMemberIndex === i ? classes.activeMember : classes.inactiveMember}
                                                        size={'large'} onClick={() => setSelectedMemberIndex(i)}
                                                        fullWidth>Member {i + 1}</Button>
                                            </Grid>
                                        )
                                    })}


                                    <Grid item container md={3} spacing={1}>
                                        <Grid item md={6} justify={"space-between"}>
                                            <Button
                                                disabled={memberData.length <= 1 || memberData.length <= state.initialMemberLength}
                                                fullWidth
                                                className={classes.containedRed} variant={'contained'}
                                                onClick={removeMember}
                                                size={'large'} style={{height: '100%'}}><RemoveIcon/></Button>
                                        </Grid>
                                        <Grid item md={6}>
                                            <Button disabled={memberData.length >= 2} fullWidth
                                                    className={classes.containedLightBlue} variant={'contained'}
                                                    size={'large'} style={{height: '100%'}}
                                                    onClick={addMember}><AddIcon/></Button>
                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item md={6} style={{marginTop: 20}}>

                                    <TextField
                                        name="FullName"
                                        onChange={e => handleMemberFormChange(selectedMemberIndex, e)}
                                        value={memberData[selectedMemberIndex].UserDetail.FullName}
                                        className={classes.margin}
                                        label="Nama Lengkap"
                                        required
                                        variant="filled"
                                        placeholder={"Masukkan Nama Lengkap Anggota."} fullWidth
                                        helperText="Nama Lengkap Harus Sesuai KTP"
                                    />
                                </Grid>

                                <Grid item md={6} style={{marginTop: 20}}>
                                    <TextField
                                        name="Email"
                                        onChange={e => handleMemberFormChange(selectedMemberIndex, e)}
                                        value={memberData[selectedMemberIndex].UserDetail.Email}
                                        className={classes.margin}
                                        label="Email"
                                        required
                                        variant="filled"
                                        placeholder={"Masukkan Email."} fullWidth
                                        helperText="ex : kkctbn@gmail.com"
                                    />
                                </Grid>

                                <Grid item md={12} style={{marginTop: 20}}>
                                    <TextField
                                        name="StudentID"
                                        onChange={e => handleMemberFormChange(selectedMemberIndex, e)}
                                        value={memberData[selectedMemberIndex].UserDetail.StudentID}
                                        className={classes.margin}
                                        label="NIM"
                                        required
                                        variant="filled"
                                        placeholder={"Masukkan NIM"} fullWidth
                                        helperText="NIM harus sesuai Kartu Tanda Mahasiswa"

                                    />
                                </Grid>

                                <Grid item md={12} style={{marginTop: 20}}>
                                    <TextField
                                        name="Phone"
                                        onChange={e => handleMemberFormChange(selectedMemberIndex, e)}
                                        value={memberData[selectedMemberIndex].UserDetail.Phone}
                                        className={classes.margin}
                                        label="Nomor HP"
                                        required
                                        variant="filled"
                                        placeholder={"Masukkan Nomor HP"} fullWidth
                                        helperText="ex : 628123456..."
                                    />
                                </Grid>

                                <Grid item md={12} style={{marginTop: 20}}>
                                    <TextField
                                        name="Address"
                                        onChange={e => handleMemberFormChange(selectedMemberIndex, e)}
                                        value={memberData[selectedMemberIndex].UserDetail.Address}
                                        label="Alamat"
                                        placeholder="Masukkan Alamat Lengkap"
                                        multiline
                                        fullWidth
                                        helperText="ex : Jalan Raya Tlogomas No. 246 Tlogomas, Babatan, Tegalgondo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144"
                                        variant="filled"
                                    />
                                </Grid>

                                <Grid item md={12} style={{marginTop: 10}}>
                                    <Typography variant={'body2'} style={{marginBottom: 10}}>
                                        Kartu Tanda Mahasiswa* (image, pdf file) [1MB Max]
                                    </Typography>

                                </Grid>

                                <Grid item md={2}>
                                    <FileInputComponent
                                        parentStyle={{margin: "0 !important"}}
                                        labelText={"Saat ini : -"}
                                        labelStyle={{display: "none"}}
                                        buttonComponent={
                                            <Button fullWidth variant="contained" component="span"
                                                    className={classes.containedOrange}>
                                                {memberFileData[selectedMemberIndex].StudentIdentityCardSubmission.OriginFileName !== "" ? "Reupload" : "Upload"}
                                            </Button>
                                        }
                                        multiple={false}
                                        imagePreview={false}
                                        callbackFunction={(fileMeta) => {
                                            if (fileMeta['size'] > 1024) {
                                                setModalBody("Ukuran File Terlalu Besar")
                                                setModalAction(true)
                                                setModalOpen(true)
                                            } else {
                                                let mFDA = memberFileData
                                                mFDA[selectedMemberIndex] = {
                                                    ...mFDA[selectedMemberIndex],
                                                    isUserFileChanged: true,
                                                    StudentIdentityCardSubmission: {
                                                        ...mFDA[selectedMemberIndex].StudentIdentityCardSubmission,
                                                        OriginFileName: fileMeta['name'],
                                                        Base: fileMeta['base64']
                                                    }
                                                }

                                                setMemberFileData([...mFDA])
                                            }

                                        }}
                                        accept="image/*, application/pdf"
                                    />
                                </Grid>

                                <Grid item md={2}>
                                    <Button fullWidth variant="contained" component="span"
                                            className={classes.containedTeal} onClick={() => {
                                        window.open(ENDPOINT.SUBMISSION + memberFileData[selectedMemberIndex].StudentIdentityCardSubmission.ID + "/download", '_blank')
                                    }}>
                                        Download
                                    </Button>
                                </Grid>
                                <Grid item md={12} sm={12} xs={12}>
                                    <Typography variant={'caption'}>
                                        Saat ini
                                        : {memberFileData[selectedMemberIndex].StudentIdentityCardSubmission.OriginFileName !== "" ? memberFileData[selectedMemberIndex].StudentIdentityCardSubmission.OriginFileName : '-'}
                                    </Typography>
                                </Grid>

                                <Grid item md={12} style={{marginTop: 10}}>
                                    <Typography variant={'body2'} style={{marginBottom: 10}}>
                                        Kartu Tanda Penduduk* (pdf file) [1MB Max]
                                    </Typography>

                                </Grid>

                                <Grid item md={2}>
                                    <FileInputComponent
                                        parentStyle={{margin: "0 !important"}}
                                        labelText={"Saat ini : -"}
                                        labelStyle={{display: "none"}}
                                        buttonComponent={
                                            <Button fullWidth variant="contained" component="span"
                                                    className={classes.containedOrange}>
                                                {memberFileData[selectedMemberIndex].IdentityCardSubmission.OriginFileName !== "" ? "Reupload" : "Upload"}
                                            </Button>
                                        }
                                        multiple={false}
                                        imagePreview={false}
                                        callbackFunction={(fileMeta) => {
                                            if (fileMeta['size'] > 1024) {
                                                setModalBody("Ukuran File Terlalu Besar")
                                                setModalAction(true)
                                                setModalOpen(true)
                                            } else {
                                                let mFDA = memberFileData
                                                mFDA[selectedMemberIndex] = {
                                                    ...mFDA[selectedMemberIndex],
                                                    isUserFileChanged: true,
                                                    IdentityCardSubmission: {
                                                        ...mFDA[selectedMemberIndex].IdentityCardSubmission,
                                                        OriginFileName: fileMeta['name'],
                                                        Base: fileMeta['base64']
                                                    }
                                                }

                                                setMemberFileData([...mFDA])
                                            }
                                        }}
                                        accept="image/*, application/pdf"
                                    />
                                </Grid>

                                <Grid item md={2}>
                                    <Button fullWidth variant="contained" component="span" onClick={() => {
                                        window.open(ENDPOINT.SUBMISSION + memberFileData[selectedMemberIndex].IdentityCardSubmission.ID + "/download", '_blank')
                                    }}
                                            className={classes.containedTeal}>

                                        Download
                                    </Button>
                                </Grid>

                                <Grid item md={12} sm={12} xs={12}>
                                    <Typography variant={'caption'}>
                                        Saat ini
                                        : {memberFileData[selectedMemberIndex].IdentityCardSubmission.OriginFileName !== "" ? memberFileData[selectedMemberIndex].IdentityCardSubmission.OriginFileName : '-'}
                                    </Typography>
                                </Grid>


                                <Grid item md={12}>
                                    <hr style={{
                                        backgroundColor: '#000000',
                                        marginTop: 25
                                    }}/>
                                </Grid>


                                <Grid item md={12} style={{marginTop: 10}}>
                                    <Typography variant={'body2'} style={{marginBottom: 10}}>
                                        Surat Mandat Mahasiswa* (pdf file) [1MB Max]
                                    </Typography>

                                </Grid>

                                <Grid item md={2}>
                                    <FileInputComponent
                                        parentStyle={{margin: "0 !important"}}
                                        labelText={"Saat ini : -"}
                                        labelStyle={{display: "none"}}
                                        buttonComponent={
                                            <Button fullWidth variant="contained" component="span"
                                                    color={"secondary"}>
                                                {teamAdministrationData.StudentMandateLetter.OriginFileName !== "" ? "Reupload" : "Upload"}
                                            </Button>
                                        }
                                        multiple={false}
                                        imagePreview={false}
                                        callbackFunction={(fileMeta) => {
                                            if (fileMeta['size'] > 1024) {
                                                setModalBody("Ukuran File Terlalu Besar")
                                                setModalAction(true)
                                                setModalOpen(true)
                                            } else {
                                                setTeamAdministrationData({
                                                    ...teamAdministrationData,
                                                    isChanged: true,
                                                    StudentMandateLetter: {
                                                        ...teamAdministrationData.StudentMandateLetter,
                                                        OriginFileName: fileMeta['name'],
                                                        Base: fileMeta['base64']
                                                    }
                                                })
                                            }

                                        }}
                                        accept="application/pdf"
                                    />

                                </Grid>

                                <Grid item md={2}>
                                    <Button fullWidth variant="contained" component="span"
                                            className={classes.containedTeal} onClick={() => {
                                        window.open(ENDPOINT.SUBMISSION + teamAdministrationData.StudentMandateLetter.ID + "/download", '_blank')
                                    }}>
                                        Download
                                    </Button>
                                </Grid>

                                <Grid item md={12} sm={12} xs={12}>
                                    <Typography variant={'caption'}>
                                        Saat ini
                                        : {teamAdministrationData.StudentMandateLetter.OriginFileName !== "" ? teamAdministrationData.StudentMandateLetter.OriginFileName : '-'}
                                    </Typography>
                                </Grid>


                                <Grid item md={12} style={{marginTop: 10}}>
                                    <Typography variant={'body2'} style={{marginBottom: 10}}>
                                        Surat Mandat Dosen* (pdf file) [1MB Max]
                                    </Typography>
                                </Grid>

                                <Grid item md={2}>
                                    <FileInputComponent
                                        parentStyle={{margin: "0 !important"}}
                                        labelText={"Saat ini : -"}
                                        labelStyle={{display: "none"}}
                                        buttonComponent={
                                            <Button fullWidth variant="contained" component="span"
                                                    color={"secondary"}>
                                                {teamAdministrationData.LecturerMandateLetter.OriginFileName !== "" ? "Reupload" : "Upload"}
                                            </Button>
                                        }
                                        multiple={false}
                                        imagePreview={false}
                                        callbackFunction={(fileMeta) => {
                                            if (fileMeta['size'] > 1024) {
                                                setModalBody("Ukuran File Terlalu Besar")
                                                setModalAction(true)
                                                setModalOpen(true)
                                            } else {
                                                setTeamAdministrationData({
                                                    ...teamAdministrationData,
                                                    isChanged: true,
                                                    LecturerMandateLetter: {
                                                        ...teamAdministrationData.LecturerMandateLetter,
                                                        OriginFileName: fileMeta['name'],
                                                        Base: fileMeta['base64']
                                                    }
                                                })
                                            }

                                        }}
                                        accept="application/pdf"
                                    />
                                </Grid>

                                <Grid item md={2}>
                                    <input
                                        accept="application/pdf"
                                        className={classes.input}
                                        style={{display: 'none'}}
                                        id="raised-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="raised-button-file">
                                        <Button fullWidth variant="contained" component="span"
                                                className={classes.containedTeal} onClick={() => {
                                            window.open(ENDPOINT.SUBMISSION + teamAdministrationData.LecturerMandateLetter.ID + "/download", '_blank')
                                        }}>
                                            Download
                                        </Button>
                                    </label>
                                </Grid>

                                <Grid item md={12} sm={12} xs={12}>
                                    <Typography variant={'caption'}>
                                        Saat ini
                                        : {teamAdministrationData.LecturerMandateLetter.OriginFileName !== "" ? teamAdministrationData.LecturerMandateLetter.OriginFileName : '-'}
                                    </Typography>
                                </Grid>


                                <Grid item md={12}>
                                    <hr style={{
                                        marginTop: 25
                                    }}/>
                                </Grid>

                                <Grid item container md={12} justify={"flex-end"} style={{marginTop: 10}}>
                                    <Grid item md={6}>
                                        <Button fullWidth size={"large"} onClick={save} variant={"contained"}
                                                color={'primary'}
                                                startIcon={state.flag !== 1 ? <GroupAddIcon/> : <SaveIcon/>}>
                                            {state.flag === 1 ? "Save" : "Create Team"}
                                        </Button>
                                    </Grid>
                                </Grid>


                            </Grid>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <ConfirmationModal displayAction={modalAction} textBody={modalBody} open={modalOpen}
                               setOpen={setModalOpen}/>
        </PrivatePage>
    )
}

export default EditTeamDashboardPage;