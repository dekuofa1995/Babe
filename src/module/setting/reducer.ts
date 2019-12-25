import { ProxyType, SET_KEY, SET_LOCATION, SET_PROXY, SettingActionType, SettingState } from './types'

const initState: SettingState = {}

// todo just for test redux
const testState: SettingState = {
  key: 'test_key',
  location: {
    latitude: '33.25',
    longitude: '44.32',
  },
  proxy: {
    host: 'localhost',
    port: 8080,
    type: ProxyType.Http,
  },
}

export default (state: SettingState = testState, action: SettingActionType) => {
  switch (action.type) {
    case SET_KEY:
      return { ...state, key: action.key }
    case SET_LOCATION:
      return { ...state, location: action.location }
    case SET_PROXY:
      return { ...state, proxy: action.proxyConfig }
    default:
      return state
  }
}
