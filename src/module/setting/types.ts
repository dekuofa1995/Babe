// prettier-ignore
const SET_PROXY    = 'SET_PROXY',
      SET_LOCATION = 'SET_LOCATION',
      SET_KEY      = 'SET_KEY'

interface Location {
  longitude: string
  latitude: string
}

interface ProxyConfig {
  type: ProxyType
  host: string
  port: number
  user?: string
  passwd?: string
}

interface SettingState {
  key?: string
  proxy?: ProxyConfig
  location?: Location
}

interface SetLocationAction {
  type: typeof SET_LOCATION
  location: Location
}

interface SetProxyAction {
  type: typeof SET_PROXY
  proxyConfig: ProxyConfig
}

interface SetKeyAction {
  type: typeof SET_KEY
  key: string
}

enum ProxyType {
  Http = 0,
  Socks = 1,
  Socks5 = 2,
}

export type SettingActionType = SetKeyAction | SetLocationAction | SetProxyAction
export { ProxyType, Location, ProxyConfig, SettingState, SET_PROXY, SET_LOCATION, SET_KEY }
