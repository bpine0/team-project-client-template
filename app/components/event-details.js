import React from 'react';
import EventDetails from './event-details-entry';
import Right_Bar from './right-bar';
import Nav_Bar from './nav-bar';

export default class EventDeets extends React.Component {
  render() {
    return (
      <div>
        <h3></h3>
        <Nav_Bar/>
        <Right_Bar user={1}/>
        <EventDetails eventID={1}/>
      </div>
    )
  }
}
