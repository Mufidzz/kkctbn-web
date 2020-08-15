import React, {useEffect, useMemo} from "react";
import {Page} from "components";
import {Element, animateScroll as scroll} from "react-scroll"
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


const LandingPage = () => {

    //USE
    return (
        <Page title={"KKCTBN 2020"}>
            <LandingAppBar/>
            <Element name={"landing"}>
                <Landing/>
            </Element>
            <Telkomsel/>

            <Element name={"about"}>
                <About/>
            </Element>

            <News id="news"/>
            <Element name={"competition"}>
                <Competition/>
            </Element>

            <Timeline id="timeline"/>
            <Element name={"faq"}>
                <FAQ id="faq"/>
            </Element>
            <Element name={"contact"}>
                <Contact id="contact"/>
            </Element>
            <Footer id="footer"/>
        </Page>
    )
}

export default LandingPage;
