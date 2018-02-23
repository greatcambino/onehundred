import React, { Component } from 'react'
import { Form, TextArea, Segment, Header, Button } from 'semantic-ui-react'
import Fidget from './Fidget'
import SaveButton from './SaveButton'
import './Draft.css'


class Draft extends Component {
  constructor() {
    super()
    this.state = { count: 0 }
    this.wordCount = this.wordCount.bind(this)
  }

  wordCount(e) {
    this.setState({ count: e.target.value.split(' ').length })

    // e.target.fillColor = color.red
  }  // add h1, style, color here


render() {
  return (
    <div className="text-parent" >
      <div className="text-fidget">
        <TextArea onChange={(e) => this.wordCount(e)} placeholder="Hmm..." />
        {/* <Fidget /> */}
      </div>

      <div class="ui centered header">
        {this.state.count >= 100 ?
          (<Button inverted className='wordbar' color='green' size='tiny'>
            Words:  {this.state.count}
        </Button>) && (<SaveButton/>)
            :
          (<Button disabled inverted className='wordbar' color='grey' size='tiny'>
            Words:  {this.state.count}
            </Button>)}
      </div>
    </div>

  )
}


}

export default Draft

