import { combineReducers } from 'redux'
import { INCRESE, FETCH_REQ } from './action-types'

export interface countType {
    type: string;
}

// interface Action {
//     type: string,
//     data?: any
// }

function count(init = 0, action: Action) {
    /**
     * ·如果是同步action，直接从action模块拿到action对象
     * ·如果是异步action,redux-saga会watch哪一个action触发了，调用请求拿到的值并触发dispatch方法给到reducers
     * 
     * 不同点：
     *      同步的话拿到的action是{type: "INCRESE", data:1}
     *      通过redux-saga拿到的action是{type: "INCRESE", data: 1, @@redux-saga/SAGA_ACTION: true}
     */
    console.log(action);

    switch (action.type) {
        case INCRESE:
            return init + action.data;
        default:
            return init;
    }
}

function user(init = {}, action: Action) {
    switch (action.type) {
        case FETCH_REQ:
            return action.data;
        default:
            return init;
    }
}

export default combineReducers({
    count,
    user
})