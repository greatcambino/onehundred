import React, { Component } from 'react'
import { Button, Input } from 'semantic-ui-react'

// const SaveButton = () => (
//   <div class="ui centered header">
//     <Button inverted color='yellow' size='large'>save</Button>
//   </div>
// )

// export default SaveButton




class SaveButton extends Component {
  handleRef = (c) => {
    this.inputRef = c
  }

  focus = () => {
    this.inputRef.focus()
  }

  render() {
    return (
      <div class="ui centered header">
        <Input size="mini" ref={this.handleRef} placeholder='Save as...' /> <br/>
        <Button inverted color='yellow' size='tiny'>save</Button>
      </div>
    )
  }
}

export default SaveButton