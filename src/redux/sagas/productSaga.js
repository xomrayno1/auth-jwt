import {takeEvery, put, call} from 'redux-saga/effects'
import {
    GET_ALL_PRODUCTS,
    GET_ALL_PRODUCTS_FAILED,
    GET_ALL_PRODUCTS_SUCCESS
} 
from '../../utils/Constant'
import productApi from '../../api/productApi'
 

 
function* fetchProduct(){
    try {
        const response = yield call(productApi.getAll);
        yield put({type: GET_ALL_PRODUCTS_SUCCESS, payload : response})
    } catch (error) {
        yield put({type: GET_ALL_PRODUCTS_FAILED, payload : error})       
    }   
}

export default function* productSaga(){
    yield takeEvery(GET_ALL_PRODUCTS, fetchProduct)
}