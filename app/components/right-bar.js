import React from 'react';
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

        <div className =  "row  event-list">
          <ul className= "media-list">
            <li className= "media">
            </li>
            <li className= "media">
              <div className= "media-left media-top">
                <span className= "glyphicon glyphicon-star-empty white"></span>
              </div>
              <div className= "media-body">
                <a href="#" style={{color: 'black', fontWeight: 'bold'}}>Supplemental Instruction Review (UMass LRC)</a>
              </div>
            </li>
            <li className= "media">
              <div className= "media-left media-top">
                <span className= "glyphicon glyphicon-star-empty white"></span>
              </div>
              <div className= "media-body">
                <a href="#" style={{color: 'black', fontWeight: 'bold'}}>UMass vs. BC Hockey Game (UMass Althetics)</a>
              </div>
            </li>
            <li className= "media">
              <div className= "media-left media-top">
                <span className= "glyphicon glyphicon-star-empty white"></span>
              </div>
              <div className= "media-body">
                <a href="#" style={{color: 'black', fontWeight: 'bold'}}>Campus Barbeque (UMass Alumni Association)</a>
              </div>
            </li>
          </ul>
      </div>
      </div>
    </div>
    )
  }
}
