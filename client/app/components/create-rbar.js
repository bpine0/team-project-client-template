import React from 'react';

export default class CreateRBar extends React.Component {

render() {
  return (
    <div className="col-md-2 pull-right">
      <div className="row">
        <div className="col-md-12 sidebar-pills">
          <p />
          <ul className="nav nav-pills">
            <li role="presentation">
              <a href="#" className="btn btn-default navbar-btn">
                <span className="glyphicon glyphicon-fire" />
              </a>
            </li>
            <li role="presentation">
              <a href="#" className="btn btn-default navbar-btn">
                <span className="glyphicon glyphicon-star" />
              </a>
            </li>
            <li role="presentation">
              <a href="#" className="btn btn-default navbar-btn">
                <span className="glyphicon glyphicon-filter" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="row  event-list">
        <ul className="media-list">
          <li className="media">
          </li>
          <li className="media">
            <div className="media-left media-top">
              <span className="glyphicon glyphicon-ok green" />
            </div>
            <div className="media-body">
              <a href="#" className="right-events">Save &amp; Close</a>
            </div>
          </li>
          <li className="media">
            <div className="media-left media-top">
              <span className="glyphicon glyphicon-arrow-right yellow" />
            </div>
            <div className="media-body">
              <a href="#" className="right-events">Save &amp; New</a>
            </div>
          </li>
          <li className="media">
            <div className="media-left media-top">
              <span className="glyphicon glyphicon-pencil" />
            </div>
            <div className="media-body">
              <a href="#" className="right-events">Saved Event</a>
            </div>
          </li>
        </ul>
      </div>
    </div>

  )
}
}
