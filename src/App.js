import React from "react";
import RoutePages from "./View/RoutePages";
import MenuContainer from "./Container/MenuContainer";

function App() {
    return (
        <div>
            <div>
                <MenuContainer/>
            </div>
            <div>
                <RoutePages/>
            </div>
        </div>
    );
}

export default App;
