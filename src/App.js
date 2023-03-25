import React, {useEffect, useState} from "react";
import RoutePages from "./View/RoutePages";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {createTheme} from "@mui/material";
import {ThemeProvider} from "@mui/styles";


function App() {
    const _userData = useSelector(state => state.userHandler.userData);
    const [userData, setUserData] = useState();
    const loginData = JSON.parse(localStorage.getItem('userData'))
    const navigate = useNavigate();

    useEffect(() => {
        if (!userData) {
            if (_userData)
                setUserData(_userData);
            else if (loginData) {
                setUserData(loginData);
            } else {
                navigate('/login')
            }
        }
    }, [_userData, loginData, userData, navigate])


    const theme = createTheme()

    return (
        <>
            <ThemeProvider theme={theme}>
                <RoutePages userData={userData} setUserData={setUserData}/>
            </ThemeProvider>
        </>

    );

}

export default App;
