import React, {useEffect} from "react";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {EditorState, ContentState} from "draft-js";
import {Editor} from "react-draft-wysiwyg"
import htmlToDraft from 'html-to-draftjs';
import PropTypes from "prop-types"

const RichTextEditor = props => {

    const uploadImageCallBack = file => {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.imgur.com/3/image');
            xhr.setRequestHeader('Authorization', 'Client-ID 8d26ccd12712fca');
            const data = new FormData();
            data.append('image', file);
            xhr.send(data);
            xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            });
            xhr.addEventListener('error', () => {
                const error = JSON.parse(xhr.responseText);
                reject(error);
            });
        })
    }

    const html = '<p>Gunakan <strong>Shift + Enter</strong> Jika ingin line spacing kecil</p>';
    const {editorState, setEditorState} = props;

    useEffect(() => {
        let unmounted = false;
        if(!unmounted) {
            const contentBlock = htmlToDraft(html);
            if (contentBlock) {
                const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
                const editorStateS = EditorState.createWithContent(contentState);
                setEditorState(editorStateS)
            }
        }
        return () => {unmounted = true}
    },[])

    const onEditorStateChange = (es) => {
        setEditorState(es)
    };

    return (
        <div>
            <Editor
                editorStyle={{
                    border: "1px solid #F1F1F1",
                    backgroundColor: "white",
                    minHeight: "650px",
                    padding: "0 8px 0 8px"
                }}
                editorState={editorState}
                onEditorStateChange={onEditorStateChange}
                toolbar={{
                    inline: {inDropdown: true},
                    list: {inDropdown: true},
                    textAlign: {inDropdown: true},
                    link: {inDropdown: true},
                    history: {inDropdown: true},
                    image: {uploadCallback: uploadImageCallBack, alt: {present: true, mandatory: true}},
                }}
            />
            {/*<textarea*/}
            {/*    readOnly*/}
            {/*    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}*/}
            {/*/>*/}
        </div>
    )
}

RichTextEditor.propTypes = {
    editorState: PropTypes.object.isRequired,
    setEditorState: PropTypes.func.isRequired,
}

export default RichTextEditor;