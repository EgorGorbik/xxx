import axios from "axios";

export function loginUser(data) {
    console.log(data)
    return axios.request({
        method: 'post',
        url: `http://localhost:5000/login`,
        data: data
    });
}