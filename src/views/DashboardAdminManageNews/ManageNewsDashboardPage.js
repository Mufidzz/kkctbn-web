import React, {useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import RichTextEditor from "./components/RichTextEditor/RichTextEditor";
import {convertToRaw, EditorState} from "draft-js";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import FileInputComponent from "react-file-input-previews-base64";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/Send";
import {Typography} from "@material-ui/core";
import {STORAGE_KEY} from "../../configs/local_storage";
import draftToHtml from 'draftjs-to-html';
import {ENDPOINT} from "../../configs/api";
import PrivatePage from "../../components/PrivatePage";

const useStyles = makeStyles((theme) => ({

}));


const ManageNewsDashboardPage = props => {
    const classes = useStyles();
    const formStateStruct = {
        Title : "",
        Type : 0,
        NewsImage : {
            OriginFileName : "",
            Base : ""
        }
    }

    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [formState, setFormState] = useState(formStateStruct)
    const typeList = [
        {
            ID : 0,
            Name : "News"
        },
        {
            ID : 1,
            Name : "Information"
        }
    ]


    const save = () => {
        const data = {
            ...formState,
            Content : draftToHtml(convertToRaw(editorState.getCurrentContent()))
        }

        const JWT = localStorage.getItem(STORAGE_KEY.JWT)

        fetch(ENDPOINT.NEWS, {
            method: "POST",
            headers : {
                Token : JWT
            },
            body : JSON.stringify(data)
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                alert("Update News Status : " + resJSON['message'])
            })

        setFormState(formStateStruct)
    }



    return (
        <PrivatePage whitelistKey={["ROLE_ADMIN"]} >
            <div style={{width: "100%"}}>

                <Grid container>
                    <Grid item md={6} sm={12} xs={12} style={{marginTop: 20}}>
                        <Autocomplete
                            disableClearable
                            fullWidth
                            options={typeList}
                            getOptionLabel={(option) => option.Name}
                            defaultValue={typeList[0]}
                            onChange={(e, v) => setFormState({
                                ...formState,
                                Type: v.ID
                            })}
                            renderInput={(params) =>
                                <TextField {...params} fullWidth
                                           label="Type"
                                           variant="filled"/>
                            }
                        />
                    </Grid>
                    <Grid item container md={12} sm={12} xs={12} style={ formState.NewsImage.Base === "" ? null : {marginTop: 20}} justify={"center"}>
                        {formState.NewsImage.Base === "" ? null : (<img src={formState.NewsImage.Base} height={150}/>)}
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} style={{marginTop: 20}}>
                        <FileInputComponent
                            parentStyle={{margin: "0 !important"}}
                            labelStyle={{display: "none"}}
                            buttonComponent={
                                <Button fullWidth variant="contained" component="span" color={"primary"}>
                                    Upload Main Image
                                </Button>
                            }
                            multiple={false}
                            imagePreview={false}
                            callbackFunction={(fileMeta) => {
                                setFormState({
                                    ...formState,
                                    NewsImage: {
                                        ...formState.NewsImage,
                                        OriginFileName: fileMeta['name'],
                                        Base: fileMeta['base64']
                                    }
                                })
                            }}
                            accept="image/*"
                        />
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} style={{marginTop: 10}}>
                        <Typography variant={'caption'} style={{marginBottom: 10}}>
                            Current : {formState.NewsImage.OriginFileName || '-'}
                        </Typography>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12} style={{marginTop: 20}}>
                        <TextField
                            onChange={(e) => {
                                setFormState({
                                    ...formState,
                                    Title: e.target.value
                                })
                            }}
                            value={formState.Title}
                            label="Title"
                            placeholder="Entry Article Title"
                            fullWidth
                            helperText="ex : Sambutan Rektor"
                            variant="filled"
                            name="Title"
                        />
                    </Grid>

                    <Grid item md={12} sm={12} xs={12} style={{marginTop: 20}}>
                        <RichTextEditor editorState={editorState} setEditorState={setEditorState}/>
                    </Grid>
                    <Grid item container md={12} sm={12} xs={12} justify={"flex-end"} style={{marginTop: 10}}>
                        <Grid item md={6} sm={12} xs={12}>
                            <Button fullWidth variant={"contained"} size={"large"}
                                    onClick={save} color={'primary'} endIcon={<SendIcon/>}>
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>

            </div>
        </PrivatePage>

    )
}


export default ManageNewsDashboardPage;