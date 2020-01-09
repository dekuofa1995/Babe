import { reducer as settingReducer } from '@module/setting'
import { reducer as weatherReducer, saga as weatherSaga } from '@module/weather'
import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  setting: settingReducer,
  weather: weatherReducer,
})

export type RootState = ReturnType<typeof rootReducer>

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(sagaMiddleware, composeEnhancers),
)

sagaMiddleware.run(weatherSaga)

export default store
