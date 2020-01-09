import axios from 'axios'
import { API } from '@constant/constants'

const request = axios.create({
  baseURL: API.BASE_URL,
  timeout: 5000,
})

request.interceptors.request.use(
  (config) => {
    // do something before send request
    // eg: set auth info (JWT\sessionId)
    return config
  },
  (error) => {
    console.log(error)
    // do something with request error
    return Promise.reject(error)
  },
)

request.interceptors.response.use(
  (response) => {
    // http status code in 2XX
    if (response.status !== 200) {
      console.error(`response status: `, response.status, response.data)
      return Promise.reject(response.data)
    }
    return response.data
  },
  (error) => {
    console.log(error)
    // http status code out of 2XX
    return Promise.reject(error)
  },
)

export default request
