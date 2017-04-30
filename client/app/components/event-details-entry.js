import React from 'react';
import Event from './event-entry';
import {getEvent} from '../server';

export default class EventDetails extends React.Component {
  constructor(props) {
    super(props);
    // The FeedItem's initial state is what the Feed passed to us.
    // this.state = props.data;
    this.state = {
      contents: []
    }
  }

refresh() {
  getEvent(this.props.eventID, (eventData) => {
    this.setState(eventData);
  })
}

componentDidMount(){
  this.refresh();
}

  render() {
    var event_info = (
      <Event event_image={this.state.contents.image} date={this.state.contents.time} event_name={this.state.contents.eventName} org={this.state.contents.org} time={this.state.contents.time} location={this.state.contents.location}>{this.state.contents.description}</Event>
    );
    return (
      <div>
        {event_info}
      </div>
    )
  }
}
