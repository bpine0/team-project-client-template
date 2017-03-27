import React from 'react';

export default class Event extends React.Component {
  render() {
    return (
      <div>
        <div className="panel panel-default event-entry">
          <div className="panel-body">
            <div className="row">
              <div className="col-md-12">
                <div className="media">
                  <div className="media-left media-top">
                    <img className="media-object" src={this.props.event_image} style={{height: 150}}/>
                  </div>
                  <div className="media-body">
                    <h3 className = "media-heading entry-heading"><a href = "#" className="event-links">{this.props.event_name}</a><a href="#"> {this.props.org}</a>
                      <span className="input-group-btn">
                        <button className="btn btn-default pull-right favorite-event" type="button">
                          <span className="glyphicon glyphicon-star-empty favorite-text"></span>
                        </button>
                      </span>
                    </h3>
                      <strong> {this.props.time} </strong> <em> || {this.props.location} </em>
                      <div className="row">
                        <div className="col-md-12 entry-font">
                            {this.props.children}
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>
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
      </div>
    )
  }
}
