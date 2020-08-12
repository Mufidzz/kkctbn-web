import React from "react";
import {ButtonRed} from "components";
import Page from "components/Page";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const LandingPage = () => {
    return (
        <Page title={"KKCTBN"}>
            <ButtonRed component={Link} to={"/login"}/>
        </Page>
    )
}

export default LandingPage;