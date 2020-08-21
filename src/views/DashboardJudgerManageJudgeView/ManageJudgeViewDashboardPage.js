import React, {Fragment, useMemo, useState} from 'react'
import {CardContent, FormControl, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import theme from "../../theme";
import {Link} from 'react-router-dom';
import {Scrollable} from "../../components";
import {ENDPOINT} from "../../configs/api";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    label: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1)
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
    cardHeader: {
        backgroundColor: theme.palette.primary.main,
        color: "#FFFFFF"
    }

}));

const ManageJudgeViewDashboardPage = props => {
    const {tid} = props.match.params;
    const classes = useStyles();
    const [value, setValue] = React.useState('Controlled');

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    const [checked, setChecked] = React.useState(true);
    const [apiData, setApiData] = useState({
        Competitions: []
    })
    useMemo(() => {
        fetch(ENDPOINT.TEAM + `check/${tid}`, {method: "GET"})
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                setApiData(resJSON.data)
            })

        return () => {
        }
    }, [])

    return (

        <Grid container style={{width: '100%'}}>
            <Scrollable>
                <Card style={{width: '100%'}}>
                    <CardHeader
                        title={'Submission'}
                        className={classes.cardHeader}
                    />

                    {apiData.Competitions.map((v, i) => {
                        return (
                            v.Status ?
                                <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant={"body2"}
                                                        className={classes.label}>Competition</Typography>
                                            <Typography
                                                variant={"h6"}>{`${v.CompetitionDetail.CompetitionGroup.Name}`}</Typography>
                                            <Typography variant={"h6"}>{`${v.CompetitionDetail.Name}`}</Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant={"body2"} className={classes.label}>Title of
                                                Innovation</Typography>
                                            <Typography variant={"h6"}>{v.Submission.Title || "Not Available"}</Typography>
                                        </Grid>
                                        <Grid item md={12} xs={12}>
                                            <Typography variant={"body2"} className={classes.label}>URL Link of
                                                Innovation</Typography>
                                            <Typography variant={"h6"}>{v.Submission.MediaURL || "Not Available"}</Typography>
                                        </Grid>


                                        <Grid item md={12} xs={12}>
                                            <Typography variant={'body2'} style={{marginTop: 10}}>Submission
                                                File</Typography>
                                        </Grid>


                                        {v.Submission.ID !== 0 ?

                                            <Fragment>
                                                <Grid item md={2} xs={12}>
                                                    <Button fullWidth variant="contained" component="span"
                                                            color={"secondary"}
                                                            onClick={() => {
                                                                window.open(ENDPOINT.SUBMISSION + v.Submission.AssignmentSubmissionID + "/download", '_blank')
                                                            }}>
                                                        Download
                                                    </Button>
                                                </Grid>


                                                <Grid item md={2} xs={12}>
                                                    <Button variant={"contained"} color='primary' fullWidth
                                                            onClick={() => {
                                                                window.open(ENDPOINT.SUBMISSION + v.Submission.AssignmentSubmissionID + "/stream", '_blank')
                                                            }}>
                                                        View
                                                    </Button>
                                                </Grid>
                                            </Fragment>


                                            :
                                            <Grid item md={12} xs={12}>
                                                <Typography variant={'h6'} style={{marginTop: 10}}>Not yet Uploaded</Typography>
                                            </Grid>
                                        }


                                        <Grid item md={12} xs={12} style={{marginTop: theme.spacing(3)}}>
                                            <hr/>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                                : null
                        )
                    })}
                </Card>
            </Scrollable>
        </Grid>
    )
}

export default ManageJudgeViewDashboardPage;