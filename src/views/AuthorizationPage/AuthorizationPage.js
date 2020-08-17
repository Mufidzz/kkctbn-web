import React, {useEffect, useState} from 'react';
import Register from "./components/Register";
import Login from "./components/Login";
import Page from "../../components/Page";


const AuthorizationPage = () => {

    const [activeRefs, setActiveRefs] = useState("login")
    const [activeView, setActiveView] = useState(<Login mover={setActiveRefs}/>)

    useEffect(() => {
            switch (activeRefs) {
                case "login":
                    setActiveView(<Login mover={setActiveRefs}/>)
                    break
                case "register":
                    setActiveView(<Register mover={setActiveRefs}/>)
                    break
                default:
                    setActiveView(<Login mover={setActiveRefs}/>)
                    break
            }
        return () => {}
    }, [activeRefs])

    return (
        <Page title={"KKCTBN 2020 - Authentication"}
              keyword="KKCTBN, Kompetisi Kapal Cepat, Kompetisi Nasional, Kompetisi, 2020, UMM, Universitas Muhammadiyah Malang, Universitas, Muhammadiyah, Malang, Login, Daftar, Masuk, Register, Registrasi, Autentikasi"
              description="Halaman Autentikasi Pengguna Website KKCTBN 2020">
            {activeView}
        </Page>
    );
  }
  
export default AuthorizationPage;
