import { combineReducers } from 'redux'
import { reducer as currentReducer } from './current'

export default combineReducers({ current: currentReducer })
