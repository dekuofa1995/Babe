import { CurrentWeather } from '@module/weather/current/types'
import { CurrentWeatherParam } from '@constant/types'

// prettier-ignore
const CURRENT_FETCH_REQUEST = 'CURRENT_FETCH_REQUEST',
      CURRENT_FETCH_SUCCESS = 'CURRENT_FETCH_SUCCESS',
      CURRENT_FETCH_FAILED  = 'CURRENT_FETCH_FAILED'

interface CurrentFetchRequestAction {
  type: typeof CURRENT_FETCH_REQUEST
  param: CurrentWeatherParam
}

interface CurrentFetchSuccessAction {
  type: typeof CURRENT_FETCH_SUCCESS
  response: CurrentWeather
}

interface CurrentFetchFailedAction {
  type: typeof CURRENT_FETCH_FAILED
}

const currentFetchRequest = (param: CurrentWeatherParam): CurrentFetchRequestAction => ({
  type: CURRENT_FETCH_REQUEST,
  param,
})

export {
  CURRENT_FETCH_REQUEST,
  CURRENT_FETCH_SUCCESS,
  CURRENT_FETCH_FAILED,
  CurrentFetchFailedAction,
  CurrentFetchRequestAction,
  CurrentFetchSuccessAction,
  currentFetchRequest,
}
