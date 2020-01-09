import { CurrentWeatherActionType, CurrentWeatherState } from './types'
import {
  CURRENT_FETCH_FAILED,
  CURRENT_FETCH_REQUEST,
  CURRENT_FETCH_SUCCESS,
} from './actions'

const initState: CurrentWeatherState = {
  loading: false,
}

export default (
  state: CurrentWeatherState = initState,
  action: CurrentWeatherActionType,
): CurrentWeatherState => {
  switch (action.type) {
    case CURRENT_FETCH_FAILED:
      return { ...state, loading: false }
    case CURRENT_FETCH_SUCCESS:
      return { ...state, weather: action.response, loading: false }
    case CURRENT_FETCH_REQUEST:
      return { ...state, loading: true }
    default:
      return state
  }
}
