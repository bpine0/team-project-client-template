import React from 'react';

export default class EventLink extends React.Component {
  render() {
    return (
      <div>
      <div className= "media-left media-top">
        <span className= "glyphicon glyphicon-star-empty white"></span>
      </div>
      <div className="media-body">
          <a href="#" style={{color: 'black', fontWeight:'bold'}}>{this.props.name}({this.props.date})</a>
            <p />
        </div>
      </div>
    )
  }
}
