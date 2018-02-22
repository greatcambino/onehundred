import React, { Component } from 'react'
import Definition from './Definition'
import "./WordDetail.css"

class WordDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    let word = this.props.card
    return (
      <div className="word contain" >
        <h4>[ {word.word} ]</h4>
        <p>{word.definitions.map((def, idx) => <Definition def={def} key={def._id} idx={idx} />)}</p>
      </div>
    )
  }
}


export default WordDetail

