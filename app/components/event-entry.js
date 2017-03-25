import React from 'react';

export default class Event extends React.Component {
  render() {
    return (
      <div>
        <div className="media">
          <div className="media-left media-top">
            <img className = "media-object" src="img/W.E.B._DuBois_Library.jpg" style="height: 150px;"/>
          </div>
          <div className="media-body">
            <h3 className = "media-heading entry-heading"><a href = "#" className = "event-links">{this.props.event_name}</a><a href="#"> {this.props.org}</a>
              <span className="input-group-btn">
                <button className="btn btn-default pull-right favorite-event" type="button">
                  <span className="glyphicon glyphicon-star-empty favorite-text"></span>
                </button>
              </span>
            </h3>
              <strong> {this.props.time} </strong> <em> ||{this.props.location} </em>
              <div className="row">
                <div className="col-md-12 entry-font">
                  <p>
                    {this.props.description}
                  </p>
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  }
}
