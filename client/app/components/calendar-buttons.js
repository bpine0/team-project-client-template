import React from 'react';
import {Link} from 'react-router';

export default class CalendarButtons extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        {/* The row that contains the main columns of the website. */}
        <div className="row">
          {/* Map: A cell that spans 9 columns */}
          <div className="col-md-9">
            <div className="row">
              <ul className="nav nav-pills text-center center-date">
                <li role="presentation">
                  <a href="#" className="date"><span className="glyphicon glyphicon-chevron-left" />
                    <div>5/1/2017 </div></a>
                </li>
                <li role="presentation">
                  <a href="#" className="date"><span className="glyphicon glyphicon-calendar" />
                    <div>5/2/2017 </div></a>
                </li>
                <li role="presentation">
                  <a href="#" className="date">
                    <span className="glyphicon glyphicon-chevron-right" /><div>5/3/2017 </div></a>
                </li>
              </ul>
            </div>
            <img src="img/campusmap.jpg" width="100%" />
            <Link to={"/event-details/" + this.props._id} className="northeast">
              <button className="glyphicon northeast glyphicon-pushpin button" />
            </Link>
            <Link to={"/event-details/" + this.props._id} className="goodell_lawn">
              <button className="glyphicon goodell_lawn glyphicon-pushpin button" />
            </Link>
            <Link to={"/event-details/" + this.props._id} className="newman">
              <button className="glyphicon newman glyphicon-pushpin button" />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
