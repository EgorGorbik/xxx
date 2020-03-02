import {createStore, combineReducers, applyMiddleware, Reducer} from "redux";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../sagas";
import userReducer from '../reducers/user.reducer';
import loaderReducer from '../reducers/loader.reducer';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    user: userReducer,
    loader: loaderReducer
});


export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);