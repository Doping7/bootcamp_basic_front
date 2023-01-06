import {Route, Routes} from "react-router-dom";
import IntroPage from "./IntroPage";
import NoticeContainer from "../Container/NoticeContainer";
import BoardContainer from "../Container/BoardContainer";
import FAQContainer from "../Container/FAQContainer";

const routePages = () => {
    return (
        <>
                <Routes>
                    <Route path="/" element={<IntroPage/>}/>
                    <Route path="/notice" element={<NoticeContainer/>}/>
                    <Route path="/board" element={<BoardContainer/>}/>
                    <Route path="/faq" element={<FAQContainer/>}/>
                </Routes>
        </>
    )

}
export default routePages