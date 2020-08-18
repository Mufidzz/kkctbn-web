import React, {useState} from 'react'
import {CardContent, FormControl, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import CardHeader from "@material-ui/core/CardHeader";
import withStyles from "@material-ui/core/styles/withStyles";
import Checkbox from "@material-ui/core/Checkbox";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import RemoveIcon from '@material-ui/icons/Remove';

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
    memberSelectorContainer : {
        paddingRight: theme.spacing(3)
    },
    activeMember : {
        color: '#FFF',
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
            backgroundColor: theme.palette.primary.dark,
            "@media (hover: none)": {
                backgroundColor: theme.palette.primary.main
            }
        }
    },
    inactiveMember : {
        color: theme.palette.primary.main,
        backgroundColor: "rgba(0,0,0,0)",
        border : "solid 1px " + theme.palette.primary.light,
        "&:hover": {
            color: theme.palette.white,
            backgroundColor: theme.palette.primary.light,
            "@media (hover: none)": {
                backgroundColor: "rgba(0,0,0,0)"
            }
        },
    }
}));


const EditTeamDashboardPage = props => {

    const classes = useStyles();
    const [memberData, setMemberData] = useState(["a"]);
    const [selectedMemberIndex, setSelectedMemberIndex] = useState(0);

    const addMember = () => {
        if(memberData.length < 3) {
            setMemberData([
                ...memberData,
                "x"
            ])
        }
    }

    const [formState, setFormState] = useState({
        TeamName : "",
        FullName : "",
        StudentIDNumber : "",
        EmailAddress : "",
        PhoneNumber : "",
        CompleteAddress : "",
        LecturerName : ""
    })

    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }


    return (
        <Grid container>
            <Grid item md={12}>

                <Card style={{width: '100%'}}>
                    <CardHeader
                        title={'Edit team'}
                        className={classes.cardHeader}
                    />


                    <CardContent style={{marginTop: 25}}>
                        <Grid container spacing={2}>
                            <Grid item md={12}>
                                <TextField
                                    name="TeamName"
                                    className={classes.margin}
                                    label="Team name"
                                    required
                                    variant="filled"
                                    placeholder={"Entry your team name."} fullWidth
                                    helperText="ex : Panda Terbang"
                                />
                            </Grid>

                            <Grid item md={12}>
                                <Typography variant={"body2"} className={classes.label}>Selected competition</Typography>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Checkbox name="competition[]"/>}
                                        label="Desain Inovasi Kapal Rumah Sakit"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="competition[]"/>}
                                        label="Desain Inovasi Kapal Rumah Sakit"
                                    />
                                    <FormControlLabel
                                        control={<Checkbox name="competition[]"/>}
                                        label="Desain Inovasi Kapal Rumah Sakit"
                                    />
                                </FormGroup>
                            </Grid>


                            <Grid item md={12}>
                                <hr style={{
                                    backgroundColor: '#000000',
                                }}/>
                            </Grid>

                            <Grid item md={12}>
                                <Typography variant={'body2'} style={{marginBottom: 10}}>
                                    Members Management
                                </Typography>
                            </Grid>

                            <Grid item container md={12} justify={"flex-start"} spacing={2}>

                                {memberData.map((v,i) => {
                                    return (
                                        <Grid item md={3}>
                                            <Button variant={selectedMemberIndex === i ? 'contained' : 'outlined'}
                                                    className={selectedMemberIndex === i ? classes.activeMember : classes.inactiveMember}
                                                    size={'large'} fullWidth>Member {i + 1}</Button>
                                        </Grid>
                                    )
                                })}


                                <Grid item container md={3} spacing={1}>
                                    <Grid item md={6} justify={"space-between"}>
                                        <Button disabled={memberData.length <= 1} fullWidth className={classes.containedRed} variant={'contained'}
                                                size={'large'} style={{height: '100%'}}><RemoveIcon/></Button>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Button disabled={memberData.length >= 3} fullWidth className={classes.containedLightBlue} variant={'contained'}
                                                size={'large'} style={{height: '100%'}} onClick={addMember} ><AddIcon/></Button>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item md={6} style={{marginTop: 20}}>

                                <TextField
                                    name="FullName"
                                    className={classes.margin}
                                    label="Full Name According to ID Card"
                                    required
                                    variant="filled"
                                    placeholder={"Entry your full name."} fullWidth
                                    helperText="ex : Joni Irawan"
                                />
                            </Grid>

                            <Grid item md={6} style={{marginTop: 20}}>
                                <TextField
                                    name="EmailAddress"
                                    className={classes.margin}
                                    label="Email Address"
                                    required
                                    variant="filled"
                                    placeholder={"Entry your email address."} fullWidth
                                    helperText="ex : kkctbn@gmail.com"
                                />
                            </Grid>

                            <Grid item md={12} style={{marginTop: 20}}>
                                <TextField
                                    name="StudentIdNumber"
                                    className={classes.margin}
                                    label="Student ID Number"
                                    required
                                    variant="filled"
                                    placeholder={"Entry your student id number"} fullWidth
                                    helperText="The student ID number of each campus has its own characteristics"

                                />
                            </Grid>

                            <Grid item md={12} style={{marginTop: 20}}>
                                <TextField
                                    name="PhoneNumber"
                                    className={classes.margin}
                                    label="Phone Number"
                                    required
                                    variant="filled"
                                    placeholder={"Entry your phone number"} fullWidth
                                    helperText="ex : 628123456..."
                                />
                            </Grid>

                            <Grid item md={12} style={{marginTop: 20}}>
                                <TextField
                                    name="CompleteAddress"
                                    label="Multiline Placeholder"
                                    placeholder="Entry complete addresss"
                                    multiline
                                    fullWidth
                                    helperText="ex : Jalan Raya Tlogomas No. 246 Tlogomas, Babatan, Tegalgondo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144"
                                    variant="filled"
                                />
                            </Grid>

                            <Grid item md={12} style={{marginTop: 10}}>
                                <Typography variant={'body2'} style={{marginBottom: 10}}>
                                    Student ID Card* (pdf file)
                                </Typography>

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
                                            className={classes.containedOrange}>
                                        Reupload
                                    </Button>
                                </label>
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
                                            className={classes.containedTeal}>
                                        Download
                                    </Button>
                                </label>
                            </Grid>

                            <Grid item md={12} style={{marginTop: 10}}>
                                <Typography variant={'body2'} style={{marginBottom: 10}}>
                                    Identity Card* (pdf file)
                                </Typography>

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
                                            className={classes.containedOrange}>
                                        Reupload
                                    </Button>
                                </label>
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
                                            className={classes.containedTeal}>
                                        Download
                                    </Button>
                                </label>
                            </Grid>

                            <Grid item md={12}/>


                            <Grid item md={12}>
                                <hr style={{
                                    backgroundColor: '#000000',
                                    marginTop: 25
                                }}/>
                            </Grid>

                            <Grid item md={12} style={{marginTop: 20}}>

                                <TextField
                                    name="LecturerName"
                                    className={classes.margin}
                                    label="Supervisory Lecturer Name"
                                    required
                                    variant="filled"
                                    placeholder={"Entry your supervisory lecturer name."} fullWidth
                                    helperText="ex : Joni Irawan, S.Kom"
                                />
                            </Grid>

                            <Grid item md={12} style={{marginTop: 10}}>
                                <Typography variant={'body2'} style={{marginBottom: 10}}>
                                    Student Mandate Card* (pdf file)
                                </Typography>

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
                                    <Button fullWidth variant="contained" component="span">
                                        Reupload
                                    </Button>
                                </label>
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
                                            className={classes.containedTeal}>
                                        Download
                                    </Button>
                                </label>
                            </Grid>

                            <Grid item md={12} style={{marginTop: 10}}>
                                <Typography variant={'body2'} style={{marginBottom: 10}}>
                                    Lecturer Mandate Letter* (pdf file)
                                </Typography>

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
                                    <Button fullWidth variant="contained" component="span">
                                        Reupload
                                    </Button>
                                </label>
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
                                            className={classes.containedTeal}>
                                        Download
                                    </Button>
                                </label>
                            </Grid>

                            <Grid item md={12}>
                                <hr style={{
                                    marginTop: 25
                                }}/>
                            </Grid>

                            <Grid item md={12} style={{textAlign: "right", marginTop: 10}}>
                                <Button variant={"contained"} color={'secondary'} startIcon={<GroupAddIcon/>}>
                                    Edit now
                                </Button>
                            </Grid>


                        </Grid>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}

export default EditTeamDashboardPage;