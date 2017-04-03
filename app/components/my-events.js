import React from 'react';
import EventThread from './event-list';
import Right_Bar from './right-bar';
import Nav_Bar from './nav-bar';

export default class MyEvents extends React.Component {
  render() {
    return (
      <div>
        <Right_Bar/>
        <Nav_Bar/>
        <EventThread />
      </div>
    )
  }
}
