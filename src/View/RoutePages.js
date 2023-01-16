import {Route, Routes} from "react-router-dom";
import NoticeContainer from "../Container/NoticeContainer";
import BoardContainer from "../Container/BoardContainer";
import FAQContainer from "../Container/FAQContainer";
import QnAContainer from "../Container/QnAContainer";
import React from "react";
import BoardDetailView from "./Board/BoardDetailView";

const routePages = ({}) => {

    return (
        <>
                <Routes>
                    <Route path="/notice" element={<NoticeContainer/>}/>
                    <Route path="/board">
                        <Route path=":dataId" element={<BoardDetailView/>}/>
                        <Route path="" element={<BoardContainer/>}/>
                    </Route>
                    <Route path="/faq" element={<FAQContainer/>}/>
                    <Route path="/qna" element={<QnAContainer/>}/>
                </Routes>
        </>
    )

}
export default routePages