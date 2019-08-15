import React from 'react';
import './frame.css';

function ColorBox(props) {
  return (
    <div className={props.valuepassed}></div>
  )
}

class WelcomeText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'black' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className='welcometext' >
        <ColorBox valuepassed={this.state.value} />
        <h1>Hello!</h1>
        <p>Please choose the color. It will change the box color on click.</p>
        <select value={this.state.value} onChange={this.handleChange}>
          <option selected value="black">Black</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
        </select>
      </div>
    )
  }
}

function Frame() {
  return (
    <div className={'box'}>
      <WelcomeText />
    </div>
  )
}

export default Frame
