import { ProxyConfig, SET_KEY, SET_LOCATION, SET_PROXY } from './types'

const setKey = (key: string) => ({
  type: SET_KEY,
  key,
})

const setLocation = (location: Location) => ({
  type: SET_LOCATION,
  location,
})

const setProxy = (proxyConfig: ProxyConfig) => ({
  type: SET_PROXY,
  proxyConfig,
})

export { setKey, setLocation, setProxy }
