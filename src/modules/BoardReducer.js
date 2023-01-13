import {handleActions} from "redux-actions";
import * as api from "./api";

// Action Type
const GET_LIST = 'board/GET_LIST';
const GET_SUCCESS = 'board/GET_SUCCESS';
const GET_ERROR = 'board/GET_ERROR'


//초기 State
const initialState = {
    loading:{
        GET_LIST: false,
    },
    boardList: []
}

// dispatch method
export const getApiBoardList = () => async dispatch => {
    dispatch({type: GET_LIST});
    try {
        const data = await api.getBoardList();
        console.log(data);
        dispatch({type: GET_SUCCESS, payload: data})
    }catch (e){
        dispatch({type: GET_ERROR, payload: e, error: true})
    }
};

const boardHandler = handleActions(
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
          boardList: action.payload.data
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

export default boardHandler;