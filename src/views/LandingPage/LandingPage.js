import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Page} from "components";
import {LandingAppBar, Landing} from "./components";


const useStyles = makeStyles((theme) => ({
    blogsContainer: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        justifyContent: "center"
    },
    blogTitle: {
        fontWeight: 800,
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3),
        color: "#f44336"
    },
    card: {
        maxWidth: "100%",
    },
    media: {
        height: 240
    },
    paginationContainer: {
        display: "flex",
        justifyContent: "center"
    }
}));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <Page title={"KKCTBN 2020"}>
            <LandingAppBar/>
            <Landing/>
            {/*<Landing/>*/}
        </Page>
    )
}

export default LandingPage;