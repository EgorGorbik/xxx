import axios from "axios";

export function loginUser(data) {
    return axios.request({
        method: 'post',
        url: `http://localhost:5000/login`,
        data: data
    });
}

export function registrationUser(data) {
    return axios.request({
        method: 'post',
        url: `http://localhost:5000/registration`,
        data: data
    });
}

export function getUser() {
    return axios.request({
        method: 'get',
        url: `http://localhost:5000/user`,
        headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}
    });
}