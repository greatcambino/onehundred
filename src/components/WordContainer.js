import React, { Component } from 'react'
import axios from 'axios'
import { Container, Header } from 'semantic-ui-react'
import WordDetail from './WordDetail'
import './WordContainer.css'



class WordContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            words: [],  //holds all words 
            currentIndex: 0  // index of current word 
        }

        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.next = this.next.bind(this)
    }

    next() {   // increment currentIndex
        let nextIndex = (this.state.currentIndex + 1) !== this.state.words.length
            ? this.state.currentIndex + 1
            : this.state.currentIndex
        this.setState({ currentIndex: nextIndex })
    }

    prev() {
        let prevIndex = (this.state.currentIndex - 1) < 0
            ? 0
            : (this.state.currentIndex - 1)
        this.setState({ currentIndex: prevIndex })
    }


    handleKeyUp(event) {
        if (event.keyCode === 39) this.next()
        if (event.keyCode === 37) this.prev()
    }

    componentDidMount() {
        window.addEventListener('keyup', this.handleKeyUp)

        axios
            .get(`${'https://fierce-headland-66319.herokuapp.com'}/api/words`)
            .then(response => this.setState({ words: response.data }))
            .catch(err => console.log(err))
    }

    componentWillUnmount() {
        window.removeEventListener('keyup', this.handleKeyUp)
    }


    render() {
        let word = this.state.words[this.state.currentIndex]
        return (
            <div class="ui card">
                <div class="card">
                    <div class="content">
                        <h3> &there4; Word of the Moment  &there4;</h3>
                        <div class="description">
                            {word && <WordDetail card={word} />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WordContainer
