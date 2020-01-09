import { hot } from 'react-hot-loader/root'
import * as React from 'react'
import { Setting } from '@module/setting'
import { Current } from '@module/weather'

const App = () => (
  <div>
    <h1>Hello, world.</h1>
    <Setting />
    <Current />
  </div>
)

export default hot(App)
