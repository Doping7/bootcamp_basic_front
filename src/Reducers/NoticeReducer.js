import {handleActions} from "redux-actions";
import * as api from "./api";

// Action Type
const GET_LIST = 'notice/GET_LIST';
const GET_SUCCESS = 'notice/GET_SUCCESS';
const GET_ERROR = 'notice/GET_ERROR'


//초기 State
const initialState = {
    loading:{
        GET_LIST: false,
    },
    noticeList: []
}

// dispatch method
export const getApiNoticeList = () => async dispatch => {
    dispatch({type: GET_LIST});
    try {
        const data = await api.getNoticeList();
        dispatch({type: GET_SUCCESS, payload: data})
    }catch (e){
        dispatch({type: GET_ERROR, payload: e, error: true})
    }
};

const noticeHandler = handleActions(
    {
        [GET_LIST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_LIST: true,
            },
        }),
        [GET_SUCCESS]: (state, action) => ({
          ...state,
          loading:{
              ...state.loading,
              GET_LIST: false,
          },
          noticeList: action.payload.noticeList.data
        }),
        [GET_ERROR]: (state, action) => ({
            ...state,
            loading: {
                ...state.loading,
                GET_LIST: false,
            }
        }),
    },
    initialState,
);

export default noticeHandler;