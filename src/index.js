import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import * as serviceWorker from './serviceWorker'
import 'antd/dist/antd.css'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reduxThunk from 'redux-thunk'

import reducers from './redux/reducers'

const store = createStore(
  reducers, // Todos los reducers
  {}, // Estado inicial
  applyMiddleware(reduxThunk)
)

ReactDOM.render(
  <Provider store={ store }>
    <Router />
  </Provider>,
  document.getElementById('root'))

serviceWorker.unregister()
