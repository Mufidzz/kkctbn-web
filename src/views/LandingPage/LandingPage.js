import React from "react";
import {Page} from "components";
import {Element} from "react-scroll"
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


    return (
        <Page title={"KKCTBN 2020"} keyword="KKCTBN, Kompetisi Kapal Cepat, Kompetisi Nasional, Kompetisi, 2020, UMM, Universitas Muhammadiyah Malang, Universitas, Muhammadiyah, Malang" description="Kompetisi Kapal Cepat Tak Berawak Nasional (KKCTBN) 2020 merupakan salah satu upaya meningkatkan kualitas SDM yang mumpuni di bidang rancang bangun kapal melalui jalur akademis. Daya kreasi mahasiswa dalam kontes tersebut tidak hanya mencakup desain badan kapal yang baik dari segi performance dan manuver, tetapi juga mencakup perencanaan sistem penggerak, sistem navigasi yang handal, dengan memperhatikan keselarasan faktor teknis lainnya (engine matching).">
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
            <Element name={"timeline"}>
                <Timeline id="timeline"/>
            </Element>
            <Element name={"faq"}>
                <FAQ id="faq"/>
                <Contact id="contact"/>
            </Element>
            <Footer id="footer"/>
        </Page>
    )
}

export default LandingPage;
