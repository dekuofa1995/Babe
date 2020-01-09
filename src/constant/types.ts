import { Language } from '@module/weather/types'

interface Response {}

interface CurrentWeatherParam {
  lat: number
  lon: number
  lang?: Language
}

interface CurrentWeatherResponse {}

export { Response, CurrentWeatherParam, CurrentWeatherResponse }
