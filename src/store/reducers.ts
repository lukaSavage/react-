import { combineReducers } from 'redux'
import { INCRESE } from './action-types'

export interface countType {
    type: string;
}

interface Action {
    type: string,
    data?: any
}

function count(init = 0, action: Action) {
    switch (action.type) {
        case INCRESE:
            return init += 1;
        default:
            return init;
    }
}

export default combineReducers({
    count
})