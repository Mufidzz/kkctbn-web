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
    cardHeader : {
        color: "#FFF",
        backgroundColor : theme.palette.primary.main,
        fontWeight: 700
    }
}));


const SubmissionTeamDashboardPage = props => {
    const classes = useStyles();

    return (

        <Grid container>
            <Card style={{width: '100%'}}>
                <CardHeader
                    title={'Submission'}
                    className={classes.cardHeader}
                />
                <CardContent style={{marginTop: 25}}>
                    <Grid container spacing={2}>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                className={classes.margin}
                                label="Title of Innovation"
                                required
                                variant="filled"
                                placeholder={"Entry your title of innovation."} fullWidth
                            />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <hr width={"100%"}/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant={'body2'}><b>Submission</b></Typography>
                        </Grid>
                        <Grid item md={8} sm={12} xs={12}>
                            <TextField
                                className={classes.margin}
                                label="Youtube URL"
                                required
                                variant="filled"
                                placeholder={"Entry your youtube url."} fullWidth
                            />
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant={'body2'} style={{marginTop: 10}}>Upload Proposal* (pdf/jpg/png/obj)</Typography>
                        </Grid>

                        <Grid item md={2} sm={6} xs={6}>
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

                        <Grid item md={2} sm={6} xs={6}>
                            <Button variant={"contained"} className={classes.containedTeal} fullWidth>
                                Download
                            </Button>
                        </Grid>

                        <Grid item container md={12} sm={12} xs={12} justify={"flex-end"} style={{marginTop: 10}}>
                            <Grid item md={6} sm={12} xs={12}>
                                <Button fullWidth variant={"contained"} size={"large"} color={'primary'} endIcon={<SendIcon/>}>
                                    Submit Proposal
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>

                </CardContent>
            </Card>
        </Grid>
    )
}

export default SubmissionTeamDashboardPage;