import React from 'react';

export default class SearchList extends React.Component {
  render() {
    return (
      <div>
        <div className="col-md-9">
          <h1 className="black">Search Results</h1>
          <ul>
            <h3 className= "text_padding panel event-entry"> Mens Basketball vs. La Salle
              <button type="button" className="btn btn-default pull-right favorite-event">
                <span className="glyphicon glyphicon-star-empty yellow"></span>
              </button>
            </h3>
          </ul>
          <ul>
            <h3 className= "text_padding panel event-entry"> Mens Basketball vs. Richmond
              <button type="button" className="btn btn-default pull-right favorite-event">
                <span className="glyphicon glyphicon-star-empty yellow"></span>
              </button>
            </h3>
          </ul>
          <ul>
            <h3 className= "text_padding panel event-entry"> Womens Lacrosse vs. Connecticut
              <button type="button" className="btn btn-default pull-right favorite-event">
                <span className="glyphicon glyphicon-star-empty yellow"></span>
              </button>
            </h3>
          </ul>
          <ul>
            <h3 className= "text_padding panel event-entry"> Mens Lacrosse vs. UMass Lowell
              <button type="button" className="btn btn-default pull-right favorite-event">
                <span className="glyphicon glyphicon-star-empty yellow"></span>
              </button>
            </h3>
          </ul>
          <ul>
            <h3 className= "text_padding panel event-entry"> Softball vs. St. Bonaventure (DH)
              <button type="button" className="btn btn-default pull-right favorite-event">
                <span className="glyphicon glyphicon-star-empty yellow"></span>
              </button>
            </h3>
          </ul>
          <ul>
            <h3 className= "text_padding panel event-entry"> UMass Mens Lacrosse vs. Brown
              <button type="button" className="btn btn-default pull-right favorite-event">
                <span className="glyphicon glyphicon-star-empty yellow"></span>
              </button>
            </h3>
          </ul>
          <ul>
            <h3 className= "text_padding panel event-entry"> Softball vs. St. Bonaventure (DH)
              <button type="button" className="btn btn-default pull-right favorite-event">
                <span className="glyphicon glyphicon-star-empty yellow"></span>
              </button>
            </h3>
          </ul>
        </div>
      </div>
    )
  }
}
