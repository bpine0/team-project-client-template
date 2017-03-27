import React from 'react';
// import ReactDOM from 'react-dom';

export default class Right extends React.Component {
  render() {
    return (
      <div>

      <div className= "row">
        <div className= "col-md-12 sidebar-pills">
          <p></p>
          <p></p>
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

      <div className =  "row  event-list">
        <ul className= "media-list">
          <li className= "media">
          </li>
          <li className= "media">
            <div className= "media-left media-top">
              <span className= "glyphicon glyphicon-star-empty white"></span>
            </div>
            <div className= "media-body">
              <a href="#">Supplemental Instruction Review (UMass LRC)</a>
            </div>
          </li>
          <li className= "media">
            <div className= "media-left media-top">
              <span className= "glyphicon glyphicon-star-empty white"></span>
            </div>
            <div className= "media-body">
              <a href="#">UMass vs. BC Hockey Game (UMass Althetics)</a>
            </div>
          </li>
          <li className= "media">
            <div className= "media-left media-top">
              <span className= "glyphicon glyphicon-star-empty white"></span>
            </div>
            <div className= "media-body">
              <a href="#">Campus Barbeque (UMass Alumni Association)</a>
            </div>
          </li>
        </ul>
    </div>



      </div>
    )
  }
}
