import { combineReducers } from 'redux'

import events from './events'
import operationLogs from './oprationLogs'

console.log(combineReducers)
//events.jsをimportして丸々conbinereducersで囲っている
export default combineReducers({ events, operationLogs })