import React from 'react';
import EventLink from './event-link';

export default class LinkList extends React.Component {
  render() {
    return (
    <div>
      <div>
      <li className= "media">
        <EventLink name = "Supplemental Instruction Review" info = "UMass LRC">
        </EventLink>
        </li>
      </div>

      <div>
      <li className= "media">
        <EventLink name = "UMass vs. BC Hockey Game" info = "UMass Althetics">
        </EventLink>
        </li>
      </div>

      <div>
      <li className= "media">
        <EventLink name = "Campus Barbeque" info = "UMass Alumni Association">
        </EventLink>
        </li>
      </div>




    </div>


    )
  }
}
