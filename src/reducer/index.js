import { combineReducers } from 'redux'

import events from './events'

console.log(combineReducers)
//events.jsをimportして丸々conbinereducersで囲っている
export default combineReducers({ events })