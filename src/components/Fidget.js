import React from 'react'
import ReactDOM from 'react-dom'
import P5Wrapper from 'react-p5-wrapper'
import './Fidget.css'
// import sketch from './sketches/sketch'

function sketch (p) {
	let angle = 0.0
  

  p.setup = function () {
	p.createCanvas(70, 70);
}

//   p.myCustomRedrawAccordingToNewPropsHandler = function (props) {
//     if (props.angle) {
//       angle = props.angle * Math.PI / 180
//     }
//   }

  p.draw = function () {
  p.translate(p.mouseX, p.mouseY);
  p.rotate(angle); // continuously rotates the rect(angle)
  p.rect(-15, -15, 30, 30);
  angle += 0.1;
  }
}


class Fidget extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      angle: 0.0,
	  sketch  
	}
  }

  render () {
    return (
      <div className="sketchwrapper">
        <P5Wrapper sketch={this.state.sketch} />
      </div>
    )
  }
}

export default Fidget

