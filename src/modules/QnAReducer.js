import {handleActions} from "redux-actions";
import * as api from "./api";

// Action Type
const GET_LIST = 'qna/GET_LIST';
const GET_SUCCESS = 'qna/GET_SUCCESS';
const GET_ERROR = 'qna/GET_ERROR'


//초기 State
const initialState = {
    loading:{
        GET_LIST: false,
    },
    qnaList: []
}

// dispatch method
export const getApiQnaList = () => async dispatch => {
    dispatch({type: GET_LIST});
    try {
        const data = await api.getQnaList();
        dispatch({type: GET_SUCCESS, payload: data})
    }catch (e){
        dispatch({type: GET_ERROR, payload: e, error: true})
    }
};

const qnaHandler = handleActions(
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
          qnaList: action.payload.data
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

export default qnaHandler;