import React, { Component } from 'react'


import Header from '../components/Header'
import WordContainer from '../components/WordContainer'
import Draft from '../components/Draft'
import SaveButton from '../components/SaveButton'
import Fidget from '../components/Fidget'
import Empty from '../components/Empty'


class MainView extends Component {
    render = () => {
        return (
            <div>
                <Empty/>
                <Header />
                <WordContainer />
                <Draft />
            </div>
        )
    }
}

export default MainView 
