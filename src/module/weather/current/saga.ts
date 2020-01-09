import { call, put, takeLatest } from 'redux-saga/effects'
import api from '@constant/api'
import {
  CURRENT_FETCH_FAILED,
  CURRENT_FETCH_REQUEST,
  CURRENT_FETCH_SUCCESS,
  CurrentFetchRequestAction,
} from '@module/weather/current/actions'

function* fetchCurrentWeather(action: CurrentFetchRequestAction) {
  try {
    const response = yield call(api.currentWeather, action.param)
    yield put({ type: CURRENT_FETCH_SUCCESS, response })
  } catch (e) {
    yield put({ type: CURRENT_FETCH_FAILED })
  }
}

function* currentSaga() {
  yield takeLatest(CURRENT_FETCH_REQUEST, fetchCurrentWeather)
}

export default currentSaga
