import React from 'react';
import Right_Bar from './right-bar';
import Nav_Bar from './nav-bar';


export default class Event_Click extends React.Component {
  render() {
    return (
      <div>
        <Nav_Bar/>
        <Right_Bar/>
      </div>
    )
  }
}
