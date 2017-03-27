import React from 'react';
import Event from './event-entry';

export default class EventThread extends React.Component {
  render() {
    return (
      <div>
        <Event event_image="img/W.E.B._DuBois_Library.jpg" event_name="Supplemental Instruction Review" org="(UMass LRC)" time="Tomorrow at 5:00 pm" location="W.E.B. Dubois Library ">
          Review Session for CMPSCI 250. Be there or be square!
          More than just a review session! Reviewing: Inductive reasoning,
          proof by contradiction, the properties of Cardie and Duncan, and
          steady state machines.
        </Event>
    </div>
    )
  }
}
