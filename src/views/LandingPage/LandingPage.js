import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Page} from "components";
import {LandingAppBar, Landing} from "./components";
import {About} from "./components";
import {Competition} from "./components";
import {Contact} from "./components";
import {FAQ} from "./components";
import {News} from "./components";
import {Telkomsel} from "./components";
import {Timeline} from "./components";
import {Footer} from "./components";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
}));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <Page title={"KKCTBN 2020"}>
            <LandingAppBar/>
            <Landing/>
            <Telkomsel/>
                <Box p={2} />
                <About/>
                <Box p={2} />
                <News/>
                <Box p={2} />
                <Competition/>
                <Box p={2} />
                <Timeline/>
                <Box p={2} />
                <FAQ/>
                <Box p={2} />
                <Contact/>
                <Box p={2} />
                <Footer/>
        </Page>
    )
}

export default LandingPage;