import React from 'react';
import createRBar from './create-rBar';
import Nav_Bar from './nav-bar';
import createList from './create-list';

export default class CreateEvent extends React.Component {
  render() {
    return (
      <div>
        <Nav_Bar/>
        <createRBar/>
        <createList/>
      </div>
    )
  }
}
