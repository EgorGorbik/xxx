import {call, put, takeEvery} from "redux-saga/effects";
import {loaderToFalse, loaderToTrue} from "../actionCreators/loader.action";
import * as message from "../services/messages.sercive";
import {setUserFailed, setUserSuccess} from "../actionCreators/user.action";
import {setMessagesFailed, setMessagesSuccess} from "../actionCreators/messages.action";

function* getChats() {
    console.log('we are in saga')
    try {
        yield put(loaderToTrue());
        let { data } = yield call(message.getChats);
        console.log(data)
        yield put(setMessagesSuccess(data));
        yield put(loaderToFalse());
    } catch (error) {
        yield put(setMessagesFailed(error.response.data.error));
        yield put(loaderToFalse());
    }
}


export default function* watchMessages() {
    yield takeEvery("GET_CHATS", getChats);
}