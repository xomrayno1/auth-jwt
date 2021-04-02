import {takeEvery,put,call} from 'redux-saga/effects'
import {LOGIN_FAILED,LOGIN_SUCCESS,LOGIN_REQUEST, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILED, UPLOAD_FILE, UPLOAD_FILE_SUCCESS, UPLOAD_FILE_FAILED } from '../../utils/Constant'
import authAPI from '../../api/authApi'

function* login({payload}){
    try {
        const  token =   yield call(authAPI.login,payload);
        localStorage.setItem('accessToken',token.token);
        const auth = {
            isLogin : true,
            user: {
                username: token.username,
                roles : token.roles,
                jwt : token.token,
                images : token.images
            }
        }
        localStorage.setItem('auth',JSON.stringify(auth));
        yield put({type : LOGIN_SUCCESS, payload : token})
    } catch (error) {
        yield put({type : LOGIN_FAILED,  payload : error})
    }
}
function* register({payload}){
    try {
        yield call(authAPI.register, payload);
        yield put({type: REGISTER_SUCCESS})
    } catch (error) {
        yield put({type: REGISTER_FAILED, payload : error})
        
    }
}
function* uploadFile({payload}){
    try {
        
        const response = yield call(authAPI.uploadFile, payload);
         
        yield put({type: UPLOAD_FILE_SUCCESS,payload: response})
    } catch (error) {
        yield put({type: UPLOAD_FILE_FAILED, payload : error})
    }
}

export default function* authSaga(){
   yield takeEvery(LOGIN_REQUEST, login);
   yield takeEvery(REGISTER_REQUEST, register);
   yield takeEvery(UPLOAD_FILE, uploadFile);
}
 