import { INCRESE, INCRESE_ASYNC } from './action-types'

export const increment = () => ({ type: INCRESE })

export const incrementAsync = () => ({ type: INCRESE_ASYNC })