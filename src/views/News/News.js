import React, {Fragment} from "react";
import {Page} from "components";
import {Element} from "react-scroll"
import {Footer, Content} from "./components";
import MobileAppBar from "./components/MobileAppBar/MobileAppBar";
import {useMediaQuery} from "@material-ui/core";
import LandingAppBar from "./components/LandingAppBar";

const LandingPage = () => {
    const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

    return (
        <Page title={"KKCTBN 2020"}
              keyword="KKCTBN, Kompetisi Kapal Cepat, Kompetisi Nasional, Kompetisi, 2020, UMM, Universitas Muhammadiyah Malang, Universitas, Muhammadiyah, Malang"
              description="Kompetisi Kapal Cepat Tak Berawak Nasional (KKCTBN) 2020 merupakan salah satu upaya meningkatkan kualitas SDM yang mumpuni di bidang rancang bangun kapal melalui jalur akademis. Daya kreasi mahasiswa dalam kontes tersebut tidak hanya mencakup desain badan kapal yang baik dari segi performance dan manuver, tetapi juga mencakup perencanaan sistem penggerak, sistem navigasi yang handal, dengan memperhatikan keselarasan faktor teknis lainnya (engine matching).">
            {isMobile ? <MobileAppBar/>
                : <LandingAppBar/>}
            <Element name={"Content"}>
                <Content/>
            </Element>
            <Footer/>
        </Page>
    )
}

export default LandingPage;
