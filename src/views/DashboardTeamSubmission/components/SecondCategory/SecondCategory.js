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

const SecondCategory = props => {
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
                            <Typography variant={'body2'}><b>Proposal Tahap 1</b></Typography>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12}>
                            <Typography variant={'body2'} style={{marginTop: 10}}>File Proposal* (pdf) 10MB
                                Max</Typography>
                        </Grid>

                        <Grid item md={2} sm={6} xs={6}>
                            <FileInputComponent
                                parentStyle={{margin: "0 !important"}}
                                labelText={"Current : -"}
                                labelStyle={{display: "none"}}
                                buttonComponent={
                                    <Button fullWidth variant="contained" component="span"
                                            className={classes.containedOrange}>
                                        {formState.Assignment.OriginFileName !== "" ? "Reupload" : "Upload"}
                                    </Button>
                                }
                                multiple={false}
                                imagePreview={false}
                                callbackFunction={(fileMeta) => {
                                    if (fileMeta['size'] > 10240) {
                                        setModalBody(`Ukuran File Terlalu Besar`)
                                        setModalAction(true)
                                        setModalOpen(true)
                                    } else {
                                        setFormState({
                                            ...formState,
                                            Assignment: {
                                                ...formState.Assignment,
                                                OriginFileName: fileMeta['name'],
                                                Base: fileMeta['base64']
                                            }
                                        })
                                    }
                                }}
                                accept="application/pdf"
                            />
                        </Grid>

                        <Grid item md={2} sm={6} xs={6}>
                            <Button fullWidth variant="contained" component="span" className={classes.containedTeal}
                                    onClick={() => {
                                        window.open(ENDPOINT.SUBMISSION + formState.Assignment.ID + "/download", '_blank')
                                    }}>
                                Download
                            </Button>
                        </Grid>

                        <Grid item md={12} sm={12} xs={12} style={{marginTop: 10}}>
                            <Typography variant={'caption'} style={{marginBottom: 10}}>
                                Current
                                : {formState.Assignment.OriginFileName !== "" ? formState.Assignment.OriginFileName : '-'}
                            </Typography>
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

SecondCategory.propTypes = {
    handleFormChange : PropTypes.func.isRequired,
    formState : PropTypes.object.isRequired,
    setFormState : PropTypes.func.isRequired,
    setModalBody : PropTypes.func.isRequired,
    setModalAction : PropTypes.func.isRequired,
    setModalOpen : PropTypes.func.isRequired,
    submit : PropTypes.func.isRequired,
    useStyles : PropTypes.func.isRequired,
}

export default SecondCategory;