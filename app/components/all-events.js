import React from 'react';
import Right_Bar from './right-bar';
import Nav_Bar from './nav-bar';
import EventThread from './event-list';


export default class AllEvents extends React.Component {
  render() {
    return (
      <div>
        <Right_Bar user={1}/>
        <Nav_Bar/>
        <EventThread user={0}/>
      </div>
    )
  }
}
