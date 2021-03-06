/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'

import store from '~/state'
import Routes from '~/routes'

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor="#343C58" />
    <Routes />
  </Provider>
)

export default App
