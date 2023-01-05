import {connect} from "react-redux";
import {getApiNoticeList} from "../Reducers/NoticeReducer";
import NoticeView from "../View/Notice/NoticeView";

const NoticeContainer = ({noticeList, getApiNoticeList}) => {

    return(
        <NoticeView/>
    )
}
export default connect(
    ({noticeHandler}) => ({
        noticeList: noticeHandler.noticeList
    }),
    {
        getApiNoticeList,
    }
)(NoticeContainer);