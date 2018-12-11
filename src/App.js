/**
 * In this file we will have configured the redux store, a global state, a global context, global error boundary, pretty much everything
 * that should be global.
 */
import React, { Component } from 'react'
import './iconsLibrary'

import Root from './views/Root'

class App extends Component {
  render() {
    return <Root />
  }
}

export default App
