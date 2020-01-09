import {
  CurrentFetchFailedAction,
  CurrentFetchRequestAction,
  CurrentFetchSuccessAction,
} from '@module/weather/current/actions'

interface CurrentWeather {}

interface CurrentWeatherState {
  loading: boolean
  weather?: CurrentWeather
}

type CurrentWeatherActionType =
  | CurrentFetchRequestAction
  | CurrentFetchSuccessAction
  | CurrentFetchFailedAction

export { CurrentWeather, CurrentWeatherActionType, CurrentWeatherState }
