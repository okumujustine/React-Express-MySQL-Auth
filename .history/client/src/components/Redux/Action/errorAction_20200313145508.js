import {
    GET_ERRORS,
    CLEAR_ERRORS
} from '../Action/types'

export const returnErrors = (msg, status, id=null) => {
    return{
        type:GET_ERRORS,
        payload:{msg, status, id}
    }
} 