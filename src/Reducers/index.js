import {combineReducers} from "redux";
import noticeHandler from "./NoticeReducer";

const rootReducer = combineReducers({
    noticeHandler,
});
export default rootReducer;