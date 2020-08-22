import React, {useMemo, useState} from 'react'
import {CardContent, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from '@material-ui/icons/Save';
import CardHeader from "@material-ui/core/CardHeader";
import {STORAGE_KEY} from "../../configs/local_storage";
import {ENDPOINT} from "../../configs/api";
import {useHistory} from "react-router-dom"
import FileInputComponent from 'react-file-input-previews-base64'
import CircularProgress from "@material-ui/core/CircularProgress";
import {PrivatePage} from "../../components";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {},
    header: {
        marginTop: '1vh',
        marginBottom: '2vh',
    },
    containedTeal: {
        color: '#FFFFFF',
        backgroundColor: '#009688',
        "&:hover": {
            backgroundColor: '#00796b',
            "@media (hover: none)": {
                backgroundColor: '#009688'
            }
        }
    },
    containedOrange: {
        color: '#FFFFFF',
        backgroundColor: '#ff5722',
        "&:hover": {
            backgroundColor: '#e64a19',
            "@media (hover: none)": {
                backgroundColor: '#ff5722'
            }
        }
    },

    cardHeader: {
        backgroundColor: theme.palette.primary.main,
        color: '#fff'
    },
    saveButton: {
        color: "#FFFFFF",
        backgroundColor: theme.palette.primary.main,
        height: 50,
        "&:hover": {
            backgroundColor: "#a61d1d",
        }
    }

}));


const DashboardUserChangePassword = props => {
    //Variable
    const classes = useStyles();
    const history = useHistory();

    //State
    const [formState, setFormState] = useState({
        OldPassword : "",
        NewPassword : "",
        NewPasswordConfirmation : ""
    })


    //Use
    //Handle
    const handleFormChange = e => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }


    //Function
    const save = () => {
        console.log(JSON.stringify({
            Password : formState.OldPassword
        }))
        if(formState.NewPassword !== formState.NewPasswordConfirmation) {
            alert("New Password Not Valid")
        } else {
            fetch(ENDPOINT.USER+`password`, {
                method: 'PUT',
                headers: {
                    'Token': localStorage.getItem(STORAGE_KEY.JWT)
                },
                body: JSON.stringify({
                    OldPassword : formState.OldPassword,
                    NewPassword : formState.NewPassword
                }),

            })
                .then(res => {
                    if (res.status >= 200) {
                        return res.json();
                    }
                })
                .then(resJSON => {
                    alert(`Result : ${resJSON["message"]}`)
                })
        }

        localStorage.clear();
        history.replace("/auth")
    }


    return (
        <PrivatePage whitelistKey={["ROLE_USER"]}>

        <Grid container>
            <Card style={{width: "100%"}}>
                <CardHeader
                    title={'Change Password'}
                    className={classes.cardHeader}
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item md={12} sm={12} xs={12} style={{marginTop: 20}}>
                            <TextField
                                onChange={handleFormChange}
                                value={formState.OldPassword}
                                className={classes.margin}
                                label="Old Password"
                                required
                                type='password'
                                variant="filled"
                                placeholder={"Entry your Old Password"} fullWidth
                                name="OldPassword"
                            />
                        </Grid>

                        <Grid item md={12} sm={12} xs={12} style={{marginTop: 20}}>
                            <TextField
                                onChange={handleFormChange}
                                value={formState.Phone}
                                className={classes.margin}
                                label="New Password"
                                required
                                type='password'
                                variant="filled"
                                placeholder={"Entry your New Password"} fullWidth
                                name="NewPassword"
                            />
                        </Grid>

                        <Grid item md={12} sm={12} xs={12} style={{marginTop: 20}}>
                            <TextField
                                onChange={handleFormChange}
                                value={formState.Phone}
                                className={classes.margin}
                                label="New Password Confirmation"
                                required
                                type='password'
                                variant="filled"
                                placeholder={"Retype your New Password"} fullWidth
                                name="NewPasswordConfirmation"
                            />
                        </Grid>

                        <Grid item container md={12} sm={12} xs={12} style={{textAlign: "right", marginTop: 25}}
                              justify={"flex-end"}>
                                <Grid item md={6} sm={12} xs={12}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={save}
                                        className={classes.saveButton}
                                        startIcon={<SaveIcon/>}
                                    >
                                        Change Password
                                    </Button>
                                </Grid>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Grid>
        </PrivatePage>
    )
}

export default DashboardUserChangePassword;