import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'


import './App.css'

import MainView from './pages/MainView'

import Header from './components/Header'
import WordContainer from './components/WordContainer'
import Draft from './components/Draft'
import SaveButton from './components/SaveButton'
import Fidget from './components/Fidget'
import Separator from './components/Separator'

let styles = {
  backgroundColor: '#1B1B18',
}

class App extends Component {

 
  render = () => {
    return (
      <div style={styles}>
      {/* <Switch> */}

        <MainView/>

        {/* <Route
          exact path="/onehundred"
          render={props => <MainView />}
        /> */}

        {/* <Route
        exact path="/onehundred/archive"
        render={props => <SavedView />}
        />
         <Route
        exact path="/onehundred/about"
        render={props => <AboutView />}
        /> */}
        {/* </Switch> */}
      </div>
    )
  }
}

export default App 






{/* <Header/>
<WordContainer/>
<Draft/>
<SaveButton/>
<Fidget/> */}