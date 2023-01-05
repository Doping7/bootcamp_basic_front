import axios from "axios";


const axiosInstance = () => {

    const _axios = axios.create({
        baseURL: "http://localhost:8080"
    })

    return _axios;
}

export function getNoticeList() {
    return axiosInstance()
        .post('api/getNoticeList')
        .then(res => res)
        .catch(err => err)
}
