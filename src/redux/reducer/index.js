import {combineReducers} from 'redux'
import authReducer from '../reducer/authReducer'
import productReducer from '../reducer/productReducer'

const rootReducer =  combineReducers({
    auth : authReducer,
    product: productReducer
})
export default rootReducer
