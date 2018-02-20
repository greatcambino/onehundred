import React, { Component } from 'react'

import Header from './components/Header'
import WordContainer from './components/WordContainer'

class App extends Component {
  render () {
    return (
      <div>
        <Header/>
        <WordContainer/>
      </div>
    )
  }
}

export default App
