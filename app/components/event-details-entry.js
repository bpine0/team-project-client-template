import React from 'react';
import Event from './event-entry';

export default class EventDetails extends React.Component {
  render() {
    return (
      <div>
        <Event event_image="img/Barbeque.jpg" event_name="Campus Barbeque" org="(UMass Alumni Association)" time="March 15 at 3:00 pm" location="Goodell Lawn">
          <p /> Come join us for wonderful food hosted by UMass Dining:
          <br /> Cheeseburgers, grilled chicken, veggie burger, corn on the cob, macaroni and cheese, salad, and cookies
          <p />Listen to UMass Dynamics perform while eating a lunch hosted by the Alumni Associaition
        </Event>
      </div>
    )
  }
}
