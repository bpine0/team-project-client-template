import React from 'react';
import Nav_Bar from './nav-bar';
import CreateRBar from './create-rBar';
import CreateList from './create-list';
import SubmitButtons from './submit-buttons';

export default class CreateEvent extends React.Component {
  render() {
    return (
      <div>
        <Nav_Bar/>
        <CreateRBar/>
        <CreateList/>
        <SubmitButtons/>
      </div>
    )
  }
}
