import {
    LOGIN_REQUEST,
    REGISTER_REQUEST

} from '../../utils/Constant'


export const loginAction =  (data)=>{
    return {
        type : LOGIN_REQUEST,
        payload:  data
    }
}

export const registerAction =  (data)=>{
    return {
        type : REGISTER_REQUEST,
        payload:  data
    }
}