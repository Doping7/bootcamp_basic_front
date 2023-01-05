import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoticeContainer from "./Container/NoticeContainer";
import IntroPage from "./View/IntroPage";

const routePages = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<IntroPage/>}/>
                    <Route path="/notice" element={<NoticeContainer/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )

}
export default routePages