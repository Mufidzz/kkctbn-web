import React, {Component, Fragment, useState} from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import RichTextEditor from "./components/RichTextEditor/RichTextEditor";
import {EditorState, convertToRaw, ContentState} from "draft-js";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    table: {
        minWidth: 700,
    },
    header: {
        marginTop: '1vh',
        marginBottom: '2vh',
    }
}));


const ManageNewsDashboardPage = props => {
    const classes = useStyles();
    const [editorState, setEditorState] = useState(EditorState.createEmpty())

    return (
        <div style={{width : "100%"}}>
            <RichTextEditor editorState={editorState} setEditorState={setEditorState}/>
        </div>
    )
}


export default ManageNewsDashboardPage;