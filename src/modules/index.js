import {combineReducers} from "redux";
import noticeHandler from "./NoticeReducer";
import boardHandler from "./BoardReducer";
import faqHandler from "./FAQReducer";
import menuHandler from "./MenuReducer";
import qnaHandler from "./QnAReducer";

const rootReducer = combineReducers({
    noticeHandler,
    boardHandler,
    faqHandler,
    menuHandler,
    qnaHandler,
});
export default rootReducer;