import React from 'react';

export default class CreateList extends React.Component {
  render() {
    return (
      <div>
      <div className="col-md-9">
        <span className="red">&nbsp;</span>
        <span className="black">Event Title:</span>
        <br />
        <input type="text" className="form-control" placeholder="Even Title" size={10} required="required" />
        <br />

        <span className="red">&nbsp;</span>
        <span className="black">Location:</span>
        <br />
        <input type="text" className="form-control" placeholder="Venue Name" size={10} required="required" />
        <br />
        <span className="red">&nbsp;</span>
        <span className="black">Organization：</span>
        <br />
        <input type="text" className="form-control" placeholder="Organization" size={10} />
        <br />
          <span className="red">&nbsp;</span>
          <span className="black">Organization Link：</span>
          <br />
          <input type="text" className="form-control" placeholder="Organization Link" size={10} />
          <br />
        <div className="DateAndTime">
          <span className="red">&nbsp;</span>
          <span className="black">Date &amp; Time: </span>
          <input type="date" className="form-control form-control-xxx" placeholder="Ex: 10/18/2016" style={{width: 200}} required="required" />
          <input type="time" className="form-control form-control-xxx" placeholder="From" style={{width: 140}} required="required" />
          <h>-</h>
          <input type="time" className="form-control form-control-xxx" placeholder="To" style={{width: 140}} required="required" />
        </div>
        <br /><span className="red" />
        <span className="black">Upload Image:</span>
        <font className="grey" size={1}>Your Image must be JPG or PNG and not exceed ? MB</font>
        <br /><img src="img/uploadImage.jpg" style={{width: "10%"}} /><br />

        <br />
        <input type="file" id="filehooser" />
        <br />
        <span className="black">Event Description:</span>
        <br />
        <textarea id="postbox" rows={10} cols={100} name="post" defaultValue={""} />
        <br />
      </div>
    </div>
    )
  }
}
