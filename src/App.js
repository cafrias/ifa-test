/**
 * In this file we will have configured the redux store, a global state, a global context, global error boundary, pretty much everything
 * that should be global.
 */
import React, { Component } from 'react'
import './iconsLibrary'

import Root from './views/Root'

export const GlobalContext = React.createContext({
  notifications: [],
  setNotifications: () => {},
})

class App extends Component {
  state = {
    notifications: [],
  }

  componentDidMount() {
    // Simulate call to endpoint to get notifications
    setTimeout(() => {
      this.setState({
        ...this.state,
        notifications: ['something new', 'there we go'],
      })
    }, 2000)
  }

  render() {
    return (
      <GlobalContext.Provider value={{ ...this.state }}>
        <Root />
      </GlobalContext.Provider>
    )
  }
}

export default App
