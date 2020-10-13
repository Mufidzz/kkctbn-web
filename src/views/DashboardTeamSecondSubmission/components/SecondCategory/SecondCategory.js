import React, {Fragment, useEffect, useMemo, useRef, useState} from 'react'
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {CardContent, Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import PropTypes from "prop-types";
import FirstCategory from "../../../DashboardTeamSubmission/components/FirstCategory";

const SecondCategory = props => {
    const {useStyles, handleFormChange, formState, setFormState, setModalBody, setModalAction, setModalOpen, submit} = props
    const classes = useStyles()

    const secondSubmissionStruct = {
        Name : "",
        URL : ""
    }

    useMemo(() => {
        let sS = []

        if (formState.SecondSubmission.length <= 0) {
            for(let i = 0; i < 2; i++) {
                sS.push(secondSubmissionStruct)
            }

            setFormState({
                ...formState,
                SecondSubmission : sS
            })
        }

    }, [])

    return (
        <Grid container>

            {formState.SecondSubmission.length <= 0 ? null :
                <Card style={{width: '100%'}}>
                    <CardHeader
                        title={'Submission - Tahap 2'}
                        className={classes.cardHeader}
                    />
                    <CardContent style={{marginTop: 25}}>
                        <Grid container spacing={2}>
                            <Grid item md={12} sm={12} xs={12}>
                                <Typography variant={'body2'}><b>Laporan Kemajuan - PDF</b></Typography>
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    onChange={(e, i) => handleFormChange(e, 0)}
                                    value={formState.SecondSubmission[0].URL}
                                    name="Laporan Kemajuan"
                                    className={classes.margin}
                                    label="URL Laporan Kemajuan"
                                    required
                                    variant="filled"
                                    placeholder={"Masukkan URL Laporan Kemajuan"} fullWidth
                                />
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    onChange={(e, i) => handleFormChange(e, 1)}
                                    value={formState.SecondSubmission[1].URL}
                                    name="Video Prototipe"
                                    className={classes.margin}
                                    label="URL Video Prototipe"
                                    required
                                    variant="filled"
                                    placeholder={"Masukkan URL Video Prototipe"} fullWidth
                                />
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <hr width={"100%"}/>
                            </Grid>
                            <Grid item md={12} sm={12} xs={12} container>
                                <Typography variant={"caption"}> Pastikan URL dapat dibuka tanpa meminta persetujuan </Typography>
                            </Grid>


                            <Grid item container md={12} sm={12} xs={12} justify={"flex-end"} style={{marginTop: 10}}>
                                <Grid item md={6} sm={12} xs={12}>
                                    <Button onClick={submit} fullWidth variant={"contained"} size={"large"}
                                            color={'primary'} endIcon={<SendIcon/>}>
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            }



        </Grid>
    )
}

SecondCategory.propTypes = {
    handleFormChange: PropTypes.func.isRequired,
    formState: PropTypes.object.isRequired,
    setFormState: PropTypes.func.isRequired,
    setModalBody: PropTypes.func.isRequired,
    setModalAction: PropTypes.func.isRequired,
    setModalOpen: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    useStyles: PropTypes.func.isRequired,
}

export default SecondCategory;