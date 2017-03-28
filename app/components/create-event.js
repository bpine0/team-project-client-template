import React from 'react';
import Right_Bar from './right-bar';
import Nav_Bar from './nav-bar';
//import ReacrDOM from 'react-dom';

export default class creatEvent extends React.Component {
  render() {
    return (
      <div>
        <Nav_Bar/>
        <Right_Bar/>
      </div>
    )
  }
}
