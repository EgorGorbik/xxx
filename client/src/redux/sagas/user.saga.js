import * as user from "../services/user.service";
import { takeEvery, put, delay, call, all } from "redux-saga/effects";
import {loaderToFalse, loaderToTrue} from "../actionCreators/loader.action";
import {setUserFailed, setUserSuccess} from "../actionCreators/user.action";

function* loginUser(action) {
    try {
        yield put(loaderToTrue());
        let { data } = yield call(user.loginUser, action.user);
        console.log(data)
        localStorage.setItem('access_token', data.accessToken)
        yield put(setUserSuccess(data));
        yield put(loaderToFalse());
    } catch (error) {
        console.log(error.response)
        yield put(setUserFailed(error.response.data.error));
        yield put(loaderToFalse());
    }
}

export default function* watchUserAuthManipulation() {
    yield takeEvery("LOGIN_USER", loginUser);
}