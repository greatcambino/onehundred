import React, {Component} from 'react'
import Definition from './Definition'

class WordDetail extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
}

//     this.toggleShow = this.toggleShow.bind(this)
//   }


//   toggleShow () {
//     this.setState(prevState => ({
//       show: !prevState.show
//     }))
//   }


  render () {
    let word = this.props.card
    return (
      <div>
        <h4>{word.word}</h4>
         <h5>{word.definitions.map((def, idx) => <Definition def={def} key={def._id} idx={idx} />)}</h5>
      </div>
    )
  }
}


export default WordDetail


{/* <button
onClick={this.toggleShow}
className='waves-effect waves-light btn'>
{this.state.show ? 'Hide Definition' : 'Show Definition'}
</button> */}