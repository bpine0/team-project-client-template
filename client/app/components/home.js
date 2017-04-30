import React from 'react';
import Right_Bar from './right-bar';
import Nav_Bar from './nav-bar';
import CalendarButtons from './calendar-buttons';


export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Nav_Bar/>
        <Right_Bar user={1}/>
        <CalendarButtons/>
      </div>
    )
  }
}
