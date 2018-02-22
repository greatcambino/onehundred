import React, { Component } from 'react'
import './App.css'

import Header from './components/Header'
import WordContainer from './components/WordContainer'
import Draft from './components/Draft'
import SaveButton from './components/SaveButton'
// import Fidget from './components/Fidget'


let styles = {
  backgroundColor: '#1C1C1C',
}

class App extends Component {

 
  render () {
    return (
      <div style={styles}>
        <Header/>
        <WordContainer/>
        <Draft/>
        <SaveButton/>
      </div>
    )
  }
}

export default App 
