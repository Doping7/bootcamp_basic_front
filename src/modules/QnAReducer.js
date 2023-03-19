import {handleActions} from "redux-actions";
import * as api from "./api";

// Action Type
const GET_LIST = 'qna/GET_LIST';
const GET_LIST_SUCCESS = 'qna/GET_LIST_SUCCESS';
const GET_QNA_SUCCESS = 'qna/GET_QNA_SUCCESS';
const GET_ERROR = 'qna/GET_ERROR'


//초기 State
const initialState = {
    loading:{
        GET_LIST: false,
    },
    qnaList: [],
    qna:{
        id: '',
        questionTitle: '',
        questionContents: '',
        quesUser: {
            userId: '',
            userName: ''
        },
        ansUser: '',
        regDate: '',
        answer: ''
    }
}

// dispatch method
export const getApiQnaList = () => async dispatch => {
    dispatch({type: GET_LIST});
    try {
        const data = await api.getQnaList();
        dispatch({type: GET_LIST_SUCCESS, payload: data})
    }catch (e){
        dispatch({type: GET_ERROR, payload: e, error: true})
    }
};

export const getApiQna = (dataId) => async dispatch => {
    dispatch({type:GET_LIST});
    try {
        const data = await api.getQna(dataId);
        dispatch({type: GET_QNA_SUCCESS, payload: data})
    }catch (e) {
        dispatch({type:GET_ERROR,payload:e, error: true})
    }
}

const qnaHandler = handleActions(
    {
        [GET_LIST]: state => ({
            ...state,
            loading: {
                ...state.loading,
                GET_LIST: true,
            },
        }),
        [GET_LIST_SUCCESS]: (state, action) => ({
          ...state,
          loading:{
              ...state.loading,
              GET_LIST: false,
          },
          qnaList: action.payload.data
        }),
        [GET_QNA_SUCCESS]: (state, action) => ({
            ...state,
            loading:{
                ...state.loading,
                GET_LIST: false,
            },
            qna: {
                ...state.qna,
                id: action.payload.data.id,
                questionTitle: action.payload.data.questionTitle,
                questionContents: action.payload.data.questionContents,
                quesUser: {
                    userId: action.payload.data.quesUser.userId,
                    userName: action.payload.data.quesUser.userName
                },
                ansUser: action.payload.data.ansUser,
                regDate: action.payload.data.regDate,
                answer: action.payload.data.answer
            }
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