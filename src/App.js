import React, {useEffect, useState} from "react";
import RoutePages from "./View/RoutePages";
import MenuContainer from "./Container/MenuContainer";
import LoginPage from "./View/LoginPage";
import {useDispatch, useSelector} from "react-redux";

function App() {
    const _userData = useSelector(state => state.userHandler.userData);
    const [userData, setUserData] = useState();

    useEffect(() => {
        setUserData(_userData);
    },[_userData])


    const logout = () => {
        localStorage.clear();
        setUserData(undefined);
    }

    return (
        <>
            {userData &&
                <div>
                    <div>
                        <MenuContainer logout={logout}/>
                    </div>
                    <div>
                        <RoutePages/>
                    </div>
                </div>
            }
            {!userData &&
                <div>
                    <LoginPage/>
                </div>
            }
        </>

    );
}

export default App;
