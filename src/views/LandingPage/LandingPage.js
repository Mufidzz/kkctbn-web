import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import {Page} from "components";
import {
    About,
    Competition,
    Contact,
    FAQ,
    Footer,
    Landing,
    LandingAppBar,
    News,
    Telkomsel,
    Timeline
} from "./components";

const useStyles = makeStyles((theme) => ({}));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <Page title={"KKCTBN 2020"}>
            <LandingAppBar/>
            <Landing/>
            <Telkomsel/>
            <About/>
            {/*<News/>*/}
            {/*<Box p={2}/>*/}
            {/*<Competition/>*/}
            {/*<Box p={2}/>*/}
            {/*<Timeline/>*/}
            {/*<Box p={2}/>*/}
            {/*<FAQ/>*/}
            {/*<Box p={2}/>*/}
            {/*<Contact/>*/}
            {/*<Box p={2}/>*/}
            {/*<Footer/>*/}
        </Page>
    )
}

export default LandingPage;
