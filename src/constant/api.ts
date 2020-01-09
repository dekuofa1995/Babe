import request from '@request'
import { stringify } from 'querystring'
import { API } from '@constant/constants'
import { CurrentWeatherParam } from '@constant/types'

const api = {
  currentWeather: (params: CurrentWeatherParam) =>
    request.get(
      API.CURRENT_WEATHER +
        '?' +
        stringify({
          key: '08f027b6f79c42e6ad9884bea94dc41b',
          ...params,
        }),
    ),
}

export default api
