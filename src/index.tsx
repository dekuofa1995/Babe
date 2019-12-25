import 'core-js/stable'
import 'regenerator-runtime/runtime'
import * as React from 'react'
import { render } from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

const root = (
  <Provider store={store}>
    <App />
  </Provider>
)

render(root, document.getElementById('root'))
