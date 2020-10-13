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

const LRLRAKRE = props => {
    const {useStyles, handleFormChange, formState, setFormState, setModalBody, setModalAction, setModalOpen, submit} = props
    const classes = useStyles()

    const secondSubmissionStruct = {
        Name: "",
        URL: ""
    }

    useMemo(() => {
        let sS = []

        if (formState.SecondSubmission.length <= 0) {
            for (let i = 0; i < 10; i++) {
                sS.push(secondSubmissionStruct)
            }

            setFormState({
                ...formState,
                SecondSubmission: sS
            })
        }

    }, [])

    return (
        <Grid container>
            {formState.SecondSubmission.length <= 0 ? null :
                <CardContent style={{marginTop: 25}}>
                    <Grid container spacing={2}>

                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant={'body1'}><b>Submission Lanjutan - PDF</b></Typography>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>
                            <hr width={"100%"}/>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant={'body2'}><b> Re-desain layout (dalam bentuk
                                gambar) </b></Typography>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                onChange={(e, i) => handleFormChange(e, 0)}
                                value={formState.SecondSubmission[0].URL}
                                name="Safety plan"
                                className={classes.margin}
                                label="URL Safety plan A3"
                                required
                                variant="filled"
                                placeholder={"Masukkan URL Safety plan"} fullWidth
                            />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                onChange={(e, i) => handleFormChange(e, 1)}
                                value={formState.SecondSubmission[1].URL}
                                name="Evacuation plan"
                                className={classes.margin}
                                label="URL Evacuation plan A3"
                                required
                                variant="filled"
                                placeholder={"Masukkan URL Evacuation plan"} fullWidth
                            />
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant={'body2'}><b>Analisis desain (dalam bentuk laporan)
                            </b></Typography>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                onChange={(e, i) => handleFormChange(e, 2)}
                                value={formState.SecondSubmission[2].URL}
                                name="Analisis Keselamatan"
                                className={classes.margin}
                                label="URL Analisis Keselamatan A4"
                                required
                                variant="filled"
                                placeholder={"Masukkan URL Analisis Keselamatan"} fullWidth
                            />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                onChange={(e, i) => handleFormChange(e, 3)}
                                value={formState.SecondSubmission[3].URL}
                                name="Analisis Ekonomi"
                                className={classes.margin}
                                label="URL Analisis Ekonomi A4"
                                required
                                variant="filled"
                                placeholder={"Masukkan URL Analisis Ekonomi"} fullWidth
                            />
                        </Grid>


                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant={'body2'}><b> Desain prosedur (dalam bentuk
                                laporan) </b></Typography>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                onChange={(e, i) => handleFormChange(e, 4)}
                                value={formState.SecondSubmission[4].URL}
                                name="Prosedur penumpang naik kapal"
                                className={classes.margin}
                                label="URL Prosedur penumpang naik kapal A4"
                                required
                                variant="filled"
                                placeholder={"Masukkan URL Prosedur penumpang naik kapal"} fullWidth
                            />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                onChange={(e, i) => handleFormChange(e, 5)}
                                value={formState.SecondSubmission[5].URL}
                                name="Prosedur penumpang saat kapal"
                                className={classes.margin}
                                label="URL Prosedur penumpang saat kapal A4"
                                required
                                variant="filled"
                                placeholder={"Masukkan URL Prosedur penumpang saat kapal"} fullWidth
                            />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                onChange={(e, i) => handleFormChange(e, 6)}
                                value={formState.SecondSubmission[6].URL}
                                name="Prosedur penumpang turun kapal"
                                className={classes.margin}
                                label="URL Prosedur penumpang turun kapal A4"
                                required
                                variant="filled"
                                placeholder={"Masukkan URL Prosedur penumpang turun kapal"} fullWidth
                            />
                        </Grid>


                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant={'body2'}><b> Pembuatan Video (Dalam bentuk Video Animasi)</b></Typography>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                onChange={(e, i) => handleFormChange(e, 7)}
                                value={formState.SecondSubmission[7].URL}
                                name="Petunjuk penumpang naik kapal"
                                className={classes.margin}
                                label="URL Petunjuk penumpang naik kapal"
                                required
                                variant="filled"
                                placeholder={"Masukkan URL Petunjuk penumpang naik kapal"} fullWidth
                            />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                onChange={(e, i) => handleFormChange(e, 8)}
                                value={formState.SecondSubmission[8].URL}
                                name="Petunjuk penumpang saat kapal"
                                className={classes.margin}
                                label="URL Petunjuk penumpang saat kapal"
                                required
                                variant="filled"
                                placeholder={"Masukkan URL Petunjuk penumpang saat kapal"} fullWidth
                            />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                onChange={(e, i) => handleFormChange(e, 9)}
                                value={formState.SecondSubmission[9].URL}
                                name="Petunjuk penumpang turun kapal"
                                className={classes.margin}
                                label="URL Petunjuk penumpang turun kapal"
                                required
                                variant="filled"
                                placeholder={"Masukkan URL Petunjuk penumpang turun kapal"} fullWidth
                            />
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>
                            <hr width={"100%"}/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12} container>
                            <Typography variant={"caption"}> Pastikan URL dapat dibuka tanpa meminta
                                persetujuan </Typography>
                        </Grid>


                        <Grid item container md={12} sm={12} xs={12} justify={"flex-end"} style={{marginTop: 10}}>
                            <Grid item md={6} sm={12} xs={12}>
                                <Button disabled fullWidth variant={"contained"} size={"large"}
                                        color={'primary'} endIcon={<SendIcon/>}>
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>


                    </Grid>

                </CardContent>
            }
        </Grid>
    )
}

LRLRAKRE.propTypes = {
    handleFormChange: PropTypes.func.isRequired,
    formState: PropTypes.object.isRequired,
    setFormState: PropTypes.func.isRequired,
    setModalBody: PropTypes.func.isRequired,
    setModalAction: PropTypes.func.isRequired,
    setModalOpen: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    useStyles: PropTypes.func.isRequired,
}

export default LRLRAKRE;