import {
    LOGIN_REQUEST,
    REGISTER_REQUEST,
    UPLOAD_FILE
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
export const uploadFile =  (data)=>{
    return {
        type : UPLOAD_FILE,
        payload:  data
    }
}