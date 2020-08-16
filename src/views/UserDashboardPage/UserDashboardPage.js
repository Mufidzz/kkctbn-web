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
import CardHeader from "@material-ui/core/CardHeader";

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
    label : {
        marginBottom: 10
    }
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

const theme = createMuiTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        neutral: {
            main: '#5c6ac4',
        },
    },
});

const UserDashboardPage = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Grid container>
            <Card style={{width: "100%"}}>
                <CardHeader
                    title={'Chairman\'s Personal Data'}
                    style={{backgroundColor: '#f50057', color: '#fff'}}
                />
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item md={6} style={{marginTop: 20}}>
                            <Typography variant={"body2"} className={classes.label}>Full Name According to ID Card</Typography>
                            <ValidationTextField
                                className={classes.margin}
                                label="Full name according to ID card"
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
                            <Typography variant={"body2"} className={classes.label}>Complete Address</Typography>
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
                            <Button fullWidth variant="contained" component="span" className={classes.containedTeal}>
                                Download
                            </Button>
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
                            <Button fullWidth variant="contained" component="span" className={classes.containedTeal}>
                                Download
                            </Button>
                        </Grid>

                        <Grid item md={12}>
                            <hr style={{marginTop: 25, maxWidth: '100%'}}/>
                        </Grid>

                        <Grid item md={12} style={{textAlign: "right", marginTop: 25}}>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                className={classes.button}
                                startIcon={<SaveIcon/>}
                            >
                                Save
                            </Button>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Grid>
    )
}

export default UserDashboardPage;