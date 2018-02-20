import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import WordContainer from './components/WordContainer'
import Draft from './components/Draft'
import Sketch from './components/Sketch'

class App extends Component {

  
  render () {
    return (
      <div>
        <Header/>
        <Draft/>
        <Sketch/>
        <WordContainer/>
      </div>
    )
  }
}

export default App 
