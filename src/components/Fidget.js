// import React from'react';
// import ReactDOM from 'react-dom';
// import P5Wrapper from 'react-p5-wrapper';
// import sketch from './sketches/sketch';
// import sketch2 from './sketches/sketch2';
// import App from './/App'


import React from'react';
import ReactDOM from 'react-dom';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketches/sketch';

class Fidget extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
      stateSketch: sketch,
    };
	}

	// rotationChange(e){
	// 	this.setState({rotation:e.target.value});
	// }

	// pressEvent(){
	// 	this.state.stateSketch === sketch ? this.setState({stateSketch:sketch2}) : this.setState({stateSketch:sketch});
	// }

	render () {
		return (
			<div>
				<P5Wrapper sketch={this.state.stateSketch}/>
				<input type="range" value={this.state.rotation}  min="0"  max="360" step="1" onInput={this.rotationChange.bind(this)}/>
				<button onClick={this.pressEvent.bind(this)}>Change Sketch</button>
			</div>
		);
	}
}

ReactDOM.render(<Fidget />, document.getElementById('app'));