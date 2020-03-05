import axios from "axios";

export function getChats() {
    return axios.request({
        method: 'get',
        url: `http://localhost:5000/chats`,
        headers: {Authorization: 'Bearer ' + localStorage.getItem('access_token')}
    });
}