import React, {Fragment, useMemo, useState} from 'react'
import {CardContent, FormControl, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import theme from "../../theme";
import {ConfirmationModal, Scrollable} from "../../components";
import {ENDPOINT} from "../../configs/api";
import TextField from "@material-ui/core/TextField";
import PrivatePage from "../../components/PrivatePage";

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
    },
    iFrame: {
        width: "100%",
        height: "75vh"
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
    const [modalOpen, setModalOpen] = useState(false)
    const [modalBody, setModalBody] = useState("")

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
        <PrivatePage whitelistKey={["ROLE_JUDGE"]}>
            <Grid container style={{width: '98%'}}>
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
                                                <Typography
                                                    variant={"h6"}>{v.Submission.Title || "Not Available"}</Typography>
                                            </Grid>

                                            <Grid item md={12} xs={12}>
                                                <Typography variant={"body2"} className={classes.label}>URL Link of
                                                    Innovation</Typography>
                                                <Typography
                                                    variant={"h6"}>{v.Submission.MediaURL || "Not Available"}</Typography>
                                            </Grid>

                                            {v.Submission.ID !== 0 ?
                                                <Grid item container md={12} xs={12} sm={12} justify={"center"}>
                                                    <Grid item md={12} xs={12}>
                                                        <Typography gutterBottom={true} variant={'body2'}
                                                                    style={{marginTop: 10}}>Submission File</Typography>
                                                    </Grid>

                                                    <Grid item md={11} xs={12} sm={12} style={{padding: 32}}>
                                                        <iframe className={classes.iFrame}
                                                                src={ENDPOINT.SUBMISSION + v.Submission.AssignmentSubmissionID + "/stream"}/>
                                                    </Grid>

                                                    <Grid item container spacing={2} md={12} sm={12} xs={12}
                                                          justify={"center"} alignItems={"center"}
                                                          style={{width: "99%"}}>
                                                        <Grid item md={3} sm={12} xs={12}>
                                                            <Button fullWidth variant="contained"
                                                                    style={{height: 56}}
                                                                    color={"secondary"}>
                                                                Download
                                                            </Button>
                                                        </Grid>
                                                        <Grid item md={3} sm={12} xs={12}>
                                                            <TextField
                                                                // onChange={handleFormChange}
                                                                // value={formState.Address}
                                                                label="Nilai"
                                                                placeholder="Masukkan Nilai"
                                                                fullWidth
                                                                variant="filled"
                                                                name="Grade"
                                                            />
                                                        </Grid>
                                                        <Grid item md={3} sm={12} xs={12}>
                                                            <Button fullWidth variant="contained"
                                                                    onClick={() => {
                                                                        setModalBody(`Nilai Tersimpan`)
                                                                        setModalOpen(true)
                                                                    }}
                                                                    style={{height: 56}}
                                                                    color={"Primary"}>
                                                                Simpan Nilai
                                                            </Button>
                                                        </Grid>
                                                    </Grid>

                                                </Grid>


                                                :
                                                <Grid item md={12} xs={12}>
                                                    <Typography variant={'h6'} style={{marginTop: 10}}>Not yet
                                                        Uploaded</Typography>
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
            <ConfirmationModal textBody={modalBody} open={modalOpen} setOpen={setModalOpen}/>

        </PrivatePage>
    )
}

export default ManageJudgeViewDashboardPage;