import React from 'react';
import Event from './event-entry';
import {getMyEventData} from '../server';

export default class EventThread extends React.Component {
  constructor(props) {
    super(props);
    // The FeedItem's initial state is what the Feed passed to us.
    // this.state = props.data;
    this.state = {
      contents: []
    }
  }

refresh() {
  getMyEventData(this.props.user, (eventData) => {
    this.setState(eventData);
  })
}

componentDidMount(){
  this.refresh();
}

  render() {
    var user_thread = (this.state.contents.map((eventItem, i) => {
          return (
            <Event key={i} event_image={eventItem.image} date={eventItem.time} event_name={eventItem.eventName} org={eventItem.org} time={eventItem.time} location={eventItem.location}>{eventItem.description}</Event>
          );
        }
      ));
    return (
      <div>
        {user_thread}
      </div>
    )
  }
}
