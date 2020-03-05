import { takeEvery, put, delay, call, all } from "redux-saga/effects";
import watchUserAuthManipulation from './user.saga';
import watchMessages from "./messages.saga";

export default function* rootSaga() {
    yield all([watchUserAuthManipulation(), watchMessages()]);
}