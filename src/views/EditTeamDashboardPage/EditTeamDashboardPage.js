import React from 'react'
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


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
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
    label: {
        marginBottom: 10
    },
    containedTeal: {
        color: '#FFF',
        backgroundColor: '#009688',
        "&:hover": {
            backgroundColor: '#00796b',
            // Reset on touch devices, it doesn't add specificity
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
            // Reset on touch devices, it doesn't add specificity
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
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                backgroundColor: '#0097a7'
            }
        }
    },
}));


const ValidationTextField = withStyles({
    root: {
        '& input:valid + fieldset': {
            borderColor: 'green',
            borderWidth: 2,
        },
        '& input:invalid + fieldset': {
            borderColor: 'red',
            borderWidth: 2,
        },
        '& input:valid:focus + fieldset': {
            borderLeftWidth: 6,
            padding: '4px !important', // override inline-style
        },
    },
})(TextField);


const EditTeamDashboardPage = props => {

    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const [checked, setChecked] = React.useState(true);

    return (

        <Grid container>
            <Card style={{width: '100%'}}>
                <CardHeader
                    title={'Create a team'}
                    style={{backgroundColor: '#f50057', color: '#FFF'}}
                />
                <CardContent style={{marginTop: 25}}>
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <Typography variant={"body2"} className={classes.label}>Team Name</Typography>
                            <ValidationTextField
                                className={classes.margin}
                                label="Team name"
                                required
                                variant="outlined"
                                placeholder={"Entry your team name."} fullWidth
                                helperText="ex : Panda Terbang"
                                id="validation-outlined-input"
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
                            <Button variant={"outlined"}>Member 1</Button>
                        </Grid>

                        <Grid item md={6} style={{marginTop: 20}}>
                            <Typography variant={"body2"} className={classes.label}>Full Name According to ID
                                Card</Typography>
                            <ValidationTextField
                                className={classes.margin}
                                label="Full Name According to ID Card"
                                required
                                variant="outlined"
                                placeholder={"Entry your full name."} fullWidth
                                helperText="ex : Joni Irawan"
                                id="validation-outlined-input"
                            />

                        </Grid>

                        <Grid item md={6} style={{marginTop: 20}}>
                            <Typography variant={"body2"} className={classes.label}>Email Address</Typography>
                            <ValidationTextField
                                className={classes.margin}
                                label="Email Address"
                                required
                                variant="outlined"
                                placeholder={"Entry your email address."} fullWidth
                                helperText="ex : kkctbn@gmail.com"
                                id="validation-outlined-input"
                            />
                        </Grid>

                        <Grid item md={12} style={{marginTop: 20}}>
                            <Typography variant={"body2"} className={classes.label}>Student ID Number</Typography>
                            <ValidationTextField
                                className={classes.margin}
                                label="Student ID Number"
                                required
                                variant="outlined"
                                placeholder={"Entry your student id number"} fullWidth
                                helperText="((The student ID number of each campus has its own characteristics))"
                                id="validation-outlined-input"
                            />
                        </Grid>

                        <Grid item md={12} style={{marginTop: 20}}>
                            <Typography variant={"body2"} className={classes.label}>Phone Number</Typography>
                            <ValidationTextField
                                className={classes.margin}
                                label="Phone Number"
                                required
                                variant="outlined"
                                placeholder={"Entry your phone number"} fullWidth
                                helperText="ex : 08123456..."
                                id="validation-outlined-input"
                            />
                        </Grid>

                        <Grid item md={12} style={{marginTop: 20}}>
                            <TextField
                                id="outlined-textarea"
                                label="Multiline Placeholder"
                                placeholder="Entry complete addresss"
                                multiline
                                fullWidth
                                helperText="ex : Jalan Raya Tlogomas No. 246 Tlogomas, Babatan, Tegalgondo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65144"
                                variant="outlined"
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
                            <Button className={classes.containedLightBlue} startIcon={<AddIcon/>} variant={'contained'}
                                    size={'large'} style={{height: '100%'}} fullWidth>Add Members</Button>
                        </Grid>

                        <Grid item md={12}>
                            <hr style={{
                                backgroundColor: '#000000',
                                marginTop: 25
                            }}/>
                        </Grid>

                        <Grid item md={12} style={{marginTop: 20}}>
                            <Typography variant={"body2"} className={classes.label}>Supervisory Lecturer
                                Name</Typography>
                            <ValidationTextField
                                className={classes.margin}
                                label="Supervisory Lecturer Name"
                                required
                                variant="outlined"
                                placeholder={"Entry your supervisory lecturer name."} fullWidth
                                helperText="ex : Joni Irawan, S.Kom"
                                id="validation-outlined-input"
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
                                Create a team now
                            </Button>
                        </Grid>


                    </Grid>

                </CardContent>
            </Card>
        </Grid>
    )
}

export default EditTeamDashboardPage;