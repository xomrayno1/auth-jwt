import {
    LOGIN_SUCCESS,
    LOGIN_REQUEST,
    LOGIN_FAILED,
    LOG_OUT,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    UPLOAD_FILE,
    UPLOAD_FILE_SUCCESS,
    UPLOAD_FILE_FAILED
} from '../../utils/Constant'

const initalState = {
    loading : false,
    isLogin : false,
    user : {
        username : '',
        roles : [],
        jwt : '',
        images: ''
    },
    error : ''
}
 
const  getAuthState = () => {
    console.log("authh");
    const auth = localStorage.getItem("auth");
   
    try {
        const authObject = JSON.parse(auth);
        if(authObject){
             return authObject;
        }
        return initalState
    } catch (error) {
        return initalState;
    }
}
const newsState = getAuthState();

export default function authReducer(state = newsState, action){
    const  {type,payload} = action;
   
    switch(type){
        case LOG_OUT:
            return {
                ...state,
                isLogin : false,
                user : {}
            }
        case LOGIN_REQUEST:
            return {
                ...state,
                loading : true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading : false,
                isLogin : true,
                user: {
                    username: payload.username,
                    roles : payload.roles,
                    images : payload.images
                }
            }
        case LOGIN_FAILED:
            return {
                ...state,
                loading : false,
                error :  payload
            }
        case REGISTER_REQUEST:
            return {
                ...state, 
                loading : true
            }
        case REGISTER_SUCCESS: {
            return {
                ...state,
                loading : false
            }
        }
        case REGISTER_FAILED: {
            return {
                ...state,
                loading : false,
                error: payload
            }
        }
        case UPLOAD_FILE:
            return {
                ...state,
                loading: true,
            }
        case UPLOAD_FILE_SUCCESS:
            return {
                ...state,
                loading: false,
                isLogin : true,
                user: {
                    username: payload.username,
                    roles : payload.roles,
                    images : payload.images
                }
            }
        case UPLOAD_FILE_FAILED:
            return {
                ...state,
                loading: false,
                error : payload
            }
        default :
            return state;
    }

}
 