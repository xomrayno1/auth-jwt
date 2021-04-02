import { all } from "@redux-saga/core/effects";
import authSaga from './authSaga'
import productSaga from './productSaga'

export default function* rootSaga(){
       yield all([
              authSaga(),
              productSaga()
       ])
        
}