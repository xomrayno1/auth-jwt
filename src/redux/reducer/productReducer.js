import {
    GET_ALL_PRODUCTS_SUCCESS,
    GET_ALL_PRODUCTS_FAILED,
    GET_ALL_PRODUCTS
} from '../../utils/Constant'


const initalState = {
    data : [],
    isLoading: false,
    error : ''
}
export default function productReducer(state = initalState, action){
    const {type, payload} = action;
    switch(type){
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                isLoading : true,
            }
        case GET_ALL_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data : payload
            }
        case GET_ALL_PRODUCTS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        default :
            return state;
    }
}