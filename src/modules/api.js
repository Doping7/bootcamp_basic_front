import axios from "axios";

const axiosInstance = () => {
    const _axios = axios.create({
        baseURL: "http://localhost:8080",
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
        }
    })
    return _axios;
}

export function getUserData(data) {
    return axiosInstance()
        .post('api/user/getUserData', data)
        .then(res => res)
        .catch(err => err)
}

export function regUser(data) {
    return axiosInstance()
        .post('api/user/regUser', data)
        .then(res => res)
        .catch(err => err)
}

export function getNoticeList() {
    return axiosInstance()
        .post('api/notice/getNoticeList')
        .then(res => res)
        .catch(err => err)
}
export function getBoardList() {
    return axiosInstance()
        .post('api/board/getBoardList')
        .then(res => res)
        .catch(err => err)
}

export function getBoard(dataId) {
    return axiosInstance()
        .post('api/board/getBoard', dataId)
        .then(res => res)
        .catch(err => err)
}

export function getFaqList() {
    return axiosInstance()
        .post('api/faq/getFaqList')
        .then(res => res)
        .catch(err => err)
}

export function getQnaList() {
    return axiosInstance()
        .post('api/qna/getQnAList')
        .then(res => res)
        .catch(err => err)
}

export function getMenuList() {
    return axiosInstance()
        .post('api/common/getSideMenuList')
        .then(res => res)
        .catch(err => err)
}