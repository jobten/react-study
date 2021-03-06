import { createStore, applyMiddleware, combineReducers } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { user } from './user'
import mySaga from './sagas'

// 1. 创建saga中间件并注册
const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    combineReducers({ user }),
    applyMiddleware(logger, sagaMiddleware)
)

// 2.中间件运行saga
sagaMiddleware.run(mySaga)

export default store