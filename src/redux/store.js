import { compose, applyMiddleware,createStore } from "redux"
import rootSaga from '../redux/sagas/index'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer/index'

const sagaMiddleware = createSagaMiddleware();
const store =  compose(
    applyMiddleware(sagaMiddleware),
    window.devToolsExtension && window.devToolsExtension(),
)(createStore)(rootReducer)

sagaMiddleware.run(rootSaga)

export default store;