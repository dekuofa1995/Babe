import { reducer as settingReducer } from './module/setting'
import { combineReducers, createStore } from 'redux'

const rootReducer = combineReducers({
  setting: settingReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default createStore(rootReducer, {})
