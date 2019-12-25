import { hot } from 'react-hot-loader/root'
import * as React from 'react'
import { Setting } from '@module/setting'

const App = () => (
  <div>
    <h1>Hello, world.</h1>
    <Setting />
  </div>
)

export default hot(App)
