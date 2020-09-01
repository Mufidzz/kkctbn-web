import React, {useMemo, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import RichTextEditor from "./components/RichTextEditor/RichTextEditor";
import {convertToRaw, EditorState, ContentState} from "draft-js";
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
import {ConfirmationModal} from "../../components";
import htmlToDraft from 'html-to-draftjs';

const useStyles = makeStyles((theme) => ({}));


const ManageNewsDashboardPage = props => {
    const classes = useStyles();

    const {nid} = props.match.params;

    const formStateStruct = {
        Title: "",
        Type: 0,
        NewsImage: {
            isChanged: false,
            ID : 0,
            OriginFileName: "",
            Base: ""
        }
    }

    const [editorState, setEditorState] = useState(EditorState.createEmpty())
    const [formState, setFormState] = useState(formStateStruct)
    const typeList = [
        {
            ID: 0,
            Name: "News"
        },
        {
            ID: 1,
            Name: "Information"
        }
    ]

    const [modalOpen, setModalOpen] = useState(false)
    const [modalBody, setModalBody] = useState("")

    useMemo((blocks, entityMap) => {
        if (nid !== "create") {
            fetch(ENDPOINT.NEWS + nid, {method: "GET"})
                .then(res => {
                    if (res.status === 200) {
                        return res.json()
                    }
                })
                .then(resJSON => {
                    const {data} = resJSON
                    setFormState({
                        ...formState,
                        Title: data.Title,
                        Type: data.Type,
                        NewsImage: {
                            ...formState.NewsImage,
                            ID : data.NewsImage.ID,
                            OriginFileName: data.NewsImage.OriginFileName,
                            Base: ""
                        }
                    })
                    const contentBlock = htmlToDraft(data.Content);

                    if (contentBlock) {
                        const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                        const editorStateS = EditorState.createWithContent(contentState);
                        setEditorState(editorStateS)
                    }
                })
        }
        return () => {
        }
    }, []);


    const save = () => {
        const data =
            formState.NewsImage.isChanged ?
                {
                    ...formState,
                    Content: draftToHtml(convertToRaw(editorState.getCurrentContent()))
                }
                :
                {
                    Title: formState.Title,
                    Type: formState.Type,
                    Content: draftToHtml(convertToRaw(editorState.getCurrentContent()))
                }

        const JWT = localStorage.getItem(STORAGE_KEY.JWT)


        fetch(ENDPOINT.NEWS + (nid === "create" ? "" : nid), {
            method: nid !== "create" ? "PUT" : "POST",
            headers: {
                Token: JWT
            },
            body: JSON.stringify(data)
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json()
                }
            })
            .then(resJSON => {
                setModalBody("Submit News Status : " + resJSON['message'])
                setModalOpen(true)
            })

        if (nid === "create") {
            setFormState(formStateStruct);
            setEditorState(EditorState.createEmpty());
        }
    }

    return (
        <PrivatePage whitelistKey={["ROLE_ADMIN"]}>
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
                    <Grid item container md={12} sm={12} xs={12}
                          style={formState.NewsImage.Base === "" && formState.NewsImage.ID === 0 ? null : {marginTop: 20}} justify={"center"}>
                        {formState.NewsImage.Base === "" && formState.NewsImage.ID === 0 ? null : (<img src={nid !== "create" ? (ENDPOINT.SUBMISSION + `${formState.NewsImage.ID}/stream`) : formState.NewsImage.Base} height={150} alt={"News Image"}/>)}
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
                                        isChanged: true,
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
            <ConfirmationModal textBody={modalBody} open={modalOpen} setOpen={setModalOpen}/>

        </PrivatePage>

    )
}


export default ManageNewsDashboardPage;