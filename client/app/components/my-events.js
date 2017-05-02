import React from 'react';
import EventThread from './event-list';
import Right_Bar from './right-bar';
import Nav_Bar from './nav-bar';

export default class MyEvents extends React.Component {
  render() {
    return (
      <div>
        <Right_Bar user={1}/>
        <Nav_Bar/>
        <EventThread user={1} title={"My Events"}/>
      </div>
    )
  }
}
