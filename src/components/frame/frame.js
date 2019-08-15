import React from 'react';
import './frame.css';

function ColorBox(props) {
  var classesboxes = props.colorvalue + ' ' + props.valueshape;
  return (
    <div>
      <div className={classesboxes} />
    </div>
  )
}

class ColorChanger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'black',
      valueshape: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeShape = this.handleChangeShape.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleChangeShape(event) {
    this.setState({ valueshape: event.target.value });
    event.preventDefault();
  }

  render() {
    return (
      <div className='welcometext' >
        <ColorBox colorvalue={this.state.value} valueshape={this.state.valueshape} />
        <h1>Hello!</h1>
        <p>Please choose the color. It will change the box color on click. </p>
        <p>You can change the shape: square, rectangle, ellipse.</p>
        <select value={this.state.value} onChange={this.handleChange}>
          <option selected value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>
        <form>
          <input type="text" value={this.state.valueshape} onChange={this.handleChangeShape} />
        </form>
      </div>
    )
  }
}

function Frame() {
  return (
    <div className={'box'}>
      <ColorChanger />
    </div>
  )
}

export default Frame
