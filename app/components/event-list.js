import React from 'react';
import Event from './event-entry';

export default class EventThread extends React.Component {
  render() {
    return (
      <div className="panel-body">
        <div className="row">
        <Event event_image="img/W.E.B._DuBois_Library.jpg" event_name="Supplemental Instruction Review" org="" time="" location=" ">
          Review Session for CMPSCI 250. Be there or be square!
          More than just a review session! Reviewing: Inductive reasoning,
          proof by contradiction, the properties of Cardie and Duncan, and
          steady state machines.
        </Event>
      </div>
      <hr className = "break" />
      <div className="row">
        <div className="col-md-12">
          <ul className="list-inline features-bar">
            <li>
              <a href="#"><span className="glyphicon glyphicon-comment">
              </span> What Are People Saying?</a>
            </li>
            <li>
              <a href="#"><span className="glyphicon glyphicon-pencil">
              </span> Write a Review!</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
  }
}
