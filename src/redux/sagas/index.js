import { all } from "redux-saga/effects";
import { watchUsersAsync } from "./user";

export function* rootSaga() {
    // console.log('rootSaga>>>>>>>>>',rootSaga)
    yield all([
        watchUsersAsync()
    ])
}