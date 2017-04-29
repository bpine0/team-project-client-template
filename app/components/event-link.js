import React from 'react';
import {Link} from 'react-router';

export default class EventLink extends React.Component {
  render() {
    return (
      <div>
        <div className= "media-left media-top">
          <span className= "glyphicon glyphicon-star-empty white"></span>
        </div>

        <div className="media-body">
            <Link to={"/event-details/" + this.props._id} style={{color: 'black', fontWeight:'bold'}}>{this.props.name} ({this.props.date})</ Link>
        </div>
      </div>
    )
  }
}
