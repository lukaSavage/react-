import { put, delay, takeEvery, all } from 'redux-saga/effects'
import { INCRESE } from './action-types'


function* asyncAdd() {
    yield delay(2000);
    yield put({ type: INCRESE })
}


function* watcherAddAsync() {
    yield takeEvery('INCRESE_ASYNC', asyncAdd)
}

function* rootSaga() {
    yield all([
        watcherAddAsync()
    ])
}
export default rootSaga;