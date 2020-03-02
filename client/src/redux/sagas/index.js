import { takeEvery, put, delay, call, all } from "redux-saga/effects";
import watchUserAuthManipulation from './user.saga';

export default function* rootSaga() {
    yield all([watchUserAuthManipulation()]);
}