import React from 'react'
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import {CardContent, Typography} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FileInputComponent from "react-file-input-previews-base64";
import Button from "@material-ui/core/Button";
import {ENDPOINT} from "../../../../configs/api";
import SendIcon from "@material-ui/icons/Send";
import PropTypes from "prop-types"

const FirstCategory = props => {
    const {useStyles, handleFormChange, formState, setFormState, setModalBody, setModalAction, setModalOpen, submit} = props

    const classes = useStyles()

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
                                onChange={handleFormChange}
                                value={formState.Title}
                                name="Title"
                                className={classes.margin}
                                label="Judul Inovasi"
                                required
                                variant="filled"
                                placeholder={"Masukkan Judul Inovasi"} fullWidth
                            />
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <hr width={"100%"}/>
                        </Grid>
                        <Grid item md={12} sm={12} xs={12}>
                            <TextField
                                onChange={handleFormChange}
                                value={formState.Description}
                                name="Description"
                                className={classes.margin}
                                label="Deskripsi Inovasi"
                                required
                                multiline
                                rows={6}
                                variant="filled"
                                placeholder={"Masukkan Deskripsi Inovasi."} fullWidth
                            />
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
        </Grid>
    )
}

FirstCategory.propTypes = {
    handleFormChange: PropTypes.func.isRequired,
    formState: PropTypes.object.isRequired,
    setFormState: PropTypes.func.isRequired,
    setModalBody: PropTypes.func.isRequired,
    setModalAction: PropTypes.func.isRequired,
    setModalOpen: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired,
    useStyles: PropTypes.func.isRequired,
}

export default FirstCategory;