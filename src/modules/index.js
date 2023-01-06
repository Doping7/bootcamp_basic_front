import {combineReducers} from "redux";
import noticeHandler from "./NoticeReducer";
import boardHandler from "./BoardReducer";
import faqHandler from "./FAQReducer";

const rootReducer = combineReducers({
    noticeHandler,
    boardHandler,
    faqHandler,
});
export default rootReducer;