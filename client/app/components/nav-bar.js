import React from 'react';
// import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import ResetDatabase from '../database'
// import {ResetDatabase} from '../database';

export default class Nav_Bar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid" id="nav-bar">
        <div>
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="#">
            <span className="glyphicon glyphicon-home white" />
          </a>
        </div>
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <form className="navbar-form navbar-right" role="search">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search UMass" />
              <span className="input-group-btn">
                <Link to="/search-results">
                  <button type="submit" className="btn btn-default">
                    <span className="glyphicon glyphicon-search" />
                  </button>
                </Link>
              </span>
            </div>
          </form>
          <div className="nav navbar-nav navbar-left">
            <div className="btn-toolbar pull-right" role="toolbar">
              <div className="btn-group" role="group">
                <Link to="/my-events/1">
                  <button type="button" className="btn btn-default navbar-btn">
                    <span className="glyphicon glyphicon-user" />
                  </button>
                </ Link>
                <Link to="/calendar/1">
                  <button type="button" className="btn btn-default navbar-btn">
                    <span className="glyphicon glyphicon-calendar" />
                  </button>
                </Link>
                <Link to="/create-event">
                  <button type="button" className="btn btn-default navbar-btn">
                    <span className="glyphicon glyphicon-plus" />
                  </button>
                </Link>
                <Link to="/all-events">
                  <button type="button" className="btn btn-default navbar-btn">
                    <span className="glyphicon glyphicon-list" />
                  </button>
                </Link>
                <div className="btn-group" role="group">
                  <button type="button" className="btn btn-default dropdown-toggle navbar-btn" data-toggle="dropdown">
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu">
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Log out...</a></li>
                  </ul>
                  <ul>
                    <li role="presentation">
                      <ResetDatabase />
                    </li>
                  </ul>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
    )
  }
}
