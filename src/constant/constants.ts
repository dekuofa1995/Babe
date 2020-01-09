const Constants = {
  ENV_PROD: 'production',
  ENV_DEV: 'development',
}

//prettier-ignore
const BASE_URL          = 'https://api.weatherbit.io/v2.0',
      // weather
      CURRENT_WEATHER   = '/current',
      FORECAST_DAILY    = '/forecast/daily',
      FORECAST_3_HOURLY = '/forecast/daily',
      FORECAST_1_HOURLY = '/forecast/hourly',
      // alert
      ALERTS            = '/alerts',
      // history
      HISTORICAL_DAILY  = '/history/daily',
      HISTORICAL_HOURLY = '/history/hourly',
      // air quality
      AIR_QUALITY         = '/forecast/airquality',
      CURRENT_AIR_QUALITY = '/current/airquality',
      HISTORY_AIR_QUALITY = '/history/airquality'

const API = {
  BASE_URL,
  CURRENT_WEATHER,
  FORECAST_DAILY,
  FORECAST_3_HOURLY,
  FORECAST_1_HOURLY,
  ALERTS,
  HISTORICAL_DAILY,
  HISTORICAL_HOURLY,
  AIR_QUALITY,
  CURRENT_AIR_QUALITY,
  HISTORY_AIR_QUALITY,
}

export default Constants
export { API }
