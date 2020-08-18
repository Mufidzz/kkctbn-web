import React, {Component, Fragment} from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core/styles";
import {Typography} from "@material-ui/core";
import RichTextEditor from "./components/RichTextEditor/RichTextEditor";

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


    return (
        <div>
            <RichTextEditor/>
            <Typography>A</Typography>

        </div>
    )
}


export default ManageNewsDashboardPage;