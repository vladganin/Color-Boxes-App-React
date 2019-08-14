import React from 'react';
import './frame.css';

function ColorBox(props) {
  return (
    <div className={props.color}></div>
  )
}

function Frame() {
  return (
    <div className={'box'}>
      <ColorBox color="black" />
      <h1>hello</h1>
    </div>
  )
}

export default Frame
