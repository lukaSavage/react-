import { INCRESE, INCRESE_ASYNC, FETCH_REQ } from './action-types'


export const increment = (data: number) => ({ type: INCRESE, data })

export const incrementAsync = (data: number) => ({ type: INCRESE_ASYNC, data })
export const getUserDataAsync = () => ({ type: FETCH_REQ })