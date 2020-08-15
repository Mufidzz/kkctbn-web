import React from 'react'
import {CardContent, FormControl, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from '@material-ui/icons/Send';
import CardHeader from "@material-ui/core/CardHeader";
import withStyles from "@material-ui/core/styles/withStyles";
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


const SubmissionTeamDashboardPage = props => {

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
                    title={'Submission'}
                    style={{backgroundColor: '#f50057', color: '#FFF'}}
                />
                <CardContent style={{marginTop: 25}}>
                    <Grid container spacing={2}>
                        <Grid item md={12}>
                            <Typography variant={"body2"} className={classes.label}>Title of Innovation</Typography>
                            <ValidationTextField
                                className={classes.margin}
                                label="Title of Innovation"
                                required
                                variant="outlined"
                                placeholder={"Entry your title of innovation."} fullWidth
                                id="validation-outlined-input"
                            />
                        </Grid>
                        <Grid item md={12}>
                            <Typography variant={'body2'} style={{marginTop: 10}}>Upload Proposal* (pdf/jpg/png/obj)</Typography>
                        </Grid>
                        <Grid item md={2}>
                            <input
                                accept="image/jpeg, image/png, application/pdf, .obj"
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
                            <Button variant={"contained"} className={classes.containedTeal} fullWidth>
                                Download
                            </Button>
                        </Grid>

                        <Grid item md={12} style={{textAlign: "right", marginTop: 10}}>
                            <Button variant={"contained"} color={'secondary'} endIcon={<SendIcon/>}>
                                Submit Proposal
                            </Button>
                        </Grid>


                    </Grid>

                </CardContent>
            </Card>
        </Grid>
    )
}

export default SubmissionTeamDashboardPage;