import * as user from "../services/user.service";
import { takeEvery, put, delay, call, all } from "redux-saga/effects";
import {loaderToFalse, loaderToTrue} from "../actionCreators/loader.action";
import {setUserFailed, setUserSuccess} from "../actionCreators/user.action";
import socket from '../../config/socket';

function* loginUser(action) {
    try {
        yield put(loaderToTrue());
        let { data } = yield call(user.loginUser, action.user);
        localStorage.setItem('access_token', data.accessToken)
        yield put(setUserSuccess(data));
        socket.emit('join', data.id)
        yield put(loaderToFalse());
    } catch (error) {
        yield put(setUserFailed(error.response.data.error));
        yield put(loaderToFalse());
    }
}

function* registrationUser(action) {
    try {
        yield put(loaderToTrue());
        let { data } = yield call(user.registrationUser, action.user);
        localStorage.setItem('access_token', data.accessToken)
        yield put(setUserSuccess(data));
        yield put(loaderToFalse());
    } catch (error) {
        yield put(setUserFailed(error.response.data.error));
        yield put(loaderToFalse());
    }
}

function* getUser() {
    try {
        yield put(loaderToTrue());
        let { data } = yield call(user.getUser);
        yield put(setUserSuccess(data));
        console.log(data)
        socket.emit('join', data._id)
        yield put(loaderToFalse());
    } catch (e) {

    }
}

export default function* watchUserAuthManipulation() {
    yield takeEvery("LOGIN_USER", loginUser);
    yield takeEvery("REGISTRATION_USER", registrationUser);
    yield takeEvery("GET_USER", getUser);
}