import React from 'react';

export default class SubmitButtons extends React.Component {

render() {
  return (
    <div>
    <div className="sbtn-group btn-group-justified" role="group" aria-label="...">
        <div className="btn-group" role="group">
          <a href="#">
            <button type="button" className="btn btn-default">
              <span className="green">
                Submit!
              </span>
            </button>
          </a>
        </div>
        <div className="btn-group" role="group">
          <a href="#">
            <button type="button" className="btn btn-default">
              <span className="yellow">
                Reset
              </span>
            </button>
          </a>
        </div>
        <div className="btn-group" role="group">
          <a href="#">
            <button type="button" className="btn btn-default">
              <span className="red">
                Cancel
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>

  )
}
}
