import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'
import { Statistic } from 'semantic-ui-react'
import { Segment } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'



import './Draft.css'


class Draft extends Component {
  constructor() {
  super()
       this.state = { count: 0}
       this.wordCount = this.wordCount.bind(this)
    }

    wordCount(e){
       this.setState({count: e.target.value.split(' ').length})
       if (this.state.count>=100) {}  // add h1, style, color here
    }

    render() {

      return(
        <div >
          <div class="ui centered header">
            <Button disabled inverted className='wordbar' color='grey' size='tiny'>Words:  {this.state.count}</Button>
         </div>

        <Form>
        <TextArea onChange={(e)=> this.wordCount(e)} placeholder="Let it flow..." />
      </Form>
      </div>
      )
    }
  }


  
export default Draft

