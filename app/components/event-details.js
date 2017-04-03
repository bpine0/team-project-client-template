import React from 'react';
import EventDetails from './event-details-entry';
import Right_Bar from './right-bar';
import Nav_Bar from './nav-bar';

export default class EventDeets extends React.Component {
  render() {
    return (
      <div>
        <Nav_Bar/>
        <Right_Bar/>
        <EventDetails />
      </div>
    )
  }
}
