import React from 'react';
import Date from './date';

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
                    <Date date = "2/25/2017"> </Date></a>
                </li>
                <li role="presentation">
                  <a href="#" className="date"><span className="glyphicon glyphicon-calendar" /></a>
                  <p>  <Date date = "2/26/2017"> </Date></p>
                </li>
                <li role="presentation">
                  <a href="#" className="date">
                    <span className="glyphicon glyphicon-chevron-right" /><Date date = "2/27/2017"> </Date></a>
                </li>
              </ul>
            </div>
            <img src="img/campusmap.jpg" width="100%" />
            <div className="glyphicon northeast glyphicon-pushpin" />
            <div className="glyphicon goodell_lawn glyphicon-pushpin" />
            <div className="glyphicon newman glyphicon-pushpin" />
          </div>
        </div>
      </div>
    )
  }
}
