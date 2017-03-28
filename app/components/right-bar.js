import React from 'react';
import LinkList from './link-list'
// import ReactDOM from 'react-dom';

export default class Right_Bar extends React.Component {
  render() {
    return (
      <div>
        <div className = "col-md-2 pull-right">
        <div className= "row">
          <div className= "col-md-12 sidebar-pills">
            <ul className= "nav nav-pills">
              <li role="presentation" className= "active">
                <a href="#" className =  "btn btn-default navbar-btn"><span className= "glyphicon glyphicon-fire"></span></a>
              </li>
              <li role="presentation"><a href="#" className =  "btn btn-default navbar-btn">
                  <span className= "glyphicon glyphicon-star"></span>
                  </a></li>
              <li role="presentation"><a href="#" className =  "btn btn-default navbar-btn">
                  <span className= "glyphicon glyphicon-filter"></span>
                  </a></li>
            </ul>
          </div>
        </div>
        <p />
        <div className =  "row  event-list">
          <ul className= "media-list">
            <LinkList></LinkList>
          </ul>
        </div>
      </div>
    </div>
    )
  }
}
