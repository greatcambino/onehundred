import React, { Component } from 'react'
import axios from 'axios'
import { Container, Header } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'
import WordDetail from './WordDetail'
import './WordContainer.css'


let styles = {
    backgroundColor: '#1B1B18'
}


class WordContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            words: [],  
            currentIndex: 0   
        }

        this.handleKeyUp = this.handleKeyUp.bind(this)
        this.next = this.next.bind(this)
    }

    next() {  
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
                <Segment class="ui centered card" style={styles}>
                    <div class="content">
                        <div className="description">
                            {word && <WordDetail card={word} />}
                            <h3> TYPE  &larr;  OR  &rarr;  FOR ANOTHER WORD </h3>
                        </div>
                    </div>
                </Segment>
        )
    }
}

export default WordContainer
