import { put, delay, takeEvery, all, takeLatest, call } from 'redux-saga/effects'
import { INCRESE, INCRESE_ASYNC, FETCH_REQ } from './action-types'
import axios from 'axios'

interface Action {
    type: string;
    data?: any;
}
function* asyncAdd(action: Action) {
    // 这里的action是调用同步action拿到的值,再延时2s后给reducers
    console.log(action);

    yield delay(2000);
    yield put({ type: INCRESE, data: action.data })
}

type GetUser = () => any
function* asyncGetUser(action: Action) {
    console.log(action);
    
    const res: GetUser = yield call(axios.get, 'https://jsonplaceholder.typicode.com/todos')
    console.log(res);

    yield put({ type: FETCH_REQ, data: res })
}




function* watcherAddAsync() {
    yield takeLatest(INCRESE_ASYNC, asyncAdd)
}
function* watcherGetUser() {
    yield takeLatest(FETCH_REQ, asyncGetUser)
}

function* rootSaga() {
    yield all([
        watcherAddAsync(),
        watcherGetUser()
    ])
}
export default rootSaga;
