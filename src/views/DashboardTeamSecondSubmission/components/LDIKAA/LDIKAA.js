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

const LDIKAA = props => {
    const {useStyles, handleFormChange, formState, setFormState, setModalBody, setModalAction, setModalOpen, submit} = props
    const classes = useStyles()

    const secondSubmissionStruct = {
        Name : "",
        URL : ""
    }

    useMemo(() => {
        let sS = []

        if (formState.SecondSubmission.length <= 0) {
            for(let i = 0; i < 12; i++) {
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

                    <CardContent style={{marginTop: 25}}>
                        <Grid container spacing={2}>

                            <Grid item md={12} sm={12} xs={12}>
                                <Typography variant={'body1'}><b>Submission Lanjutan - PDF</b></Typography>

                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <hr width={"100%"}/>
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <Typography variant={'body2'}><b>Desain Dasar</b></Typography>
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    onChange={(e, i) => handleFormChange(e, 0)}
                                    value={formState.SecondSubmission[0].URL}
                                    name="Ukuran utama"
                                    className={classes.margin}
                                    label="URL Ukuran utama (Perhitungan - A4)"
                                    required
                                    variant="filled"
                                    placeholder={"Masukkan URL Ukuran utama"} fullWidth
                                />
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    onChange={(e, i) => handleFormChange(e, 1)}
                                    value={formState.SecondSubmission[1].URL}
                                    name="Rencana Garis"
                                    className={classes.margin}
                                    label="URL Rencana Garis (Gambar - A3)"
                                    required
                                    variant="filled"
                                    placeholder={"Masukkan URL Rencana Garis"} fullWidth
                                />
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    onChange={(e, i) => handleFormChange(e, 2)}
                                    value={formState.SecondSubmission[2].URL}
                                    name="Rencana Umum"
                                    className={classes.margin}
                                    label="URL Rencana Umum (Gambar - A3)"
                                    required
                                    variant="filled"
                                    placeholder={"Masukkan URL Rencana Umum"} fullWidth
                                />
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <hr width={"100%"}/>
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <Typography variant={'body2'}><b>Perhitungan keselamatan dan Kenyamanan Pasien</b></Typography>
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    onChange={(e, i) => handleFormChange(e, 3)}
                                    value={formState.SecondSubmission[3].URL}
                                    name="Perhitungan Stabilitas"
                                    className={classes.margin}
                                    label="URL Perhitungan Stabilitas A4"
                                    required
                                    variant="filled"
                                    placeholder={"Masukkan URL Perhitungan Stabilitas"} fullWidth
                                />
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    onChange={(e, i) => handleFormChange(e, 4)}
                                    value={formState.SecondSubmission[4].URL}
                                    name="Perhitungan Seakeeping"
                                    className={classes.margin}
                                    label="URL Perhitungan Seakeeping A4"
                                    required
                                    variant="filled"
                                    placeholder={"Masukkan URL Perhitungan Seakeeping"} fullWidth
                                />
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    onChange={(e, i) => handleFormChange(e, 5)}
                                    value={formState.SecondSubmission[5].URL}
                                    name="Desain rencana keselamatan"
                                    className={classes.margin}
                                    label="URL Desain rencana keselamatan (Gambar - A3)"
                                    required
                                    variant="filled"
                                    placeholder={"Masukkan URL Desain rencana keselamatan"} fullWidth
                                />
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <hr width={"100%"}/>
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <Typography variant={'body2'}><b>Desain Sistem Kapal (Perhitungan + Gambar)</b></Typography>
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    onChange={(e, i) => handleFormChange(e, 6)}
                                    value={formState.SecondSubmission[6].URL}
                                    name="Sistem Autonomous"
                                    className={classes.margin}
                                    label="URL Sistem Autonomous A3/A4"
                                    required
                                    variant="filled"
                                    placeholder={"Masukkan URL Sistem Autonomous"} fullWidth
                                />
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    onChange={(e, i) => handleFormChange(e, 7)}
                                    value={formState.SecondSubmission[7].URL}
                                    name="Perhitungan Power dan Sistem Propulsi"
                                    className={classes.margin}
                                    label="URL Perhitungan Power dan Sistem Propulsi A3/A4"
                                    required
                                    variant="filled"
                                    placeholder={"Masukkan URL Perhitungan Power dan Sistem Propulsi"} fullWidth
                                />
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    onChange={(e, i) => handleFormChange(e, 7)}
                                    value={formState.SecondSubmission[8].URL}
                                    name="Perhitungan Sistem Kemudi"
                                    className={classes.margin}
                                    label="URL Perhitungan Sistem Kemudi A3/A4"
                                    required
                                    variant="filled"
                                    placeholder={"Masukkan URL Perhitungan Sistem Kemudi"} fullWidth
                                />
                            </Grid>


                            <Grid item md={12} sm={12} xs={12}>
                                <hr width={"100%"}/>
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <Typography variant={'body2'}><b>Spesifikasi Teknis (laporan teknis)</b></Typography>
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    onChange={(e, i) => handleFormChange(e, 8)}
                                    value={formState.SecondSubmission[9].URL}
                                    name="Desain Inovasi pada kapal"
                                    className={classes.margin}
                                    label="URL Desain Inovasi pada kapal A4"
                                    required
                                    variant="filled"
                                    placeholder={"Masukkan URL Desain Inovasi pada kapal"} fullWidth
                                />
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    onChange={(e, i) => handleFormChange(e, 9)}
                                    value={formState.SecondSubmission[10].URL}
                                    name="Peralatan dan perlengkapan yang ada di kapal"
                                    className={classes.margin}
                                    label="URL Peralatan dan perlengkapan yang ada di kapal A4"
                                    required
                                    variant="filled"
                                    placeholder={"Masukkan URL Peralatan dan perlengkapan yang ada di kapal"} fullWidth
                                />
                            </Grid>

                            <Grid item md={12} sm={12} xs={12}>
                                <TextField
                                    onChange={(e, i) => handleFormChange(e, 10)}
                                    value={formState.SecondSubmission[11].URL}
                                    name="3D model"
                                    className={classes.margin}
                                    label="URL 3D model A3"
                                    required
                                    variant="filled"
                                    placeholder={"Masukkan URL 3D model"} fullWidth
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

LDIKAA.propTypes = {
    handleFormChange: PropTypes.func.isRequired,
    formState: PropTypes.object.isRequired,
    setFormState: PropTypes.func.isRequired,
    setModalBody: PropTypes.func.isRequired,
    setModalAction: PropTypes.func.isRequired,
    setModalOpen: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    useStyles: PropTypes.func.isRequired,
}

export default LDIKAA;