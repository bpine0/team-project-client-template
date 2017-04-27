import React from 'react';
import LinkList from './link-list';
import EventLink from './event-link';
import {getMyEventData} from '../server';

export default class Right_Bar extends React.Component {
  constructor(props) {
    super(props);
    // The FeedItem's initial state is what the Feed passed to us.
    // this.state = props.data;
    this.state = {
      contents: []
    }
  }

refresh() {
  getMyEventData(this.props.user, (eventData) => {
    this.setState(eventData);
  })

}

componentDidMount(){
  this.refresh();
}

//   handleMyEventClickBar(clickEvent) {
//     clickEvent.preventDefault();
//     if (clickEvent.button === 0) {
//       // Callback function for both the like and unlike cases.
//       getMyEventData(this.state.user, () => {
//         print(x);
//       });
//       this.state.user.myEventList.contents.map((id) => readDocument('eventList', id));
//       this.setState({likeCounter: updatedLikeCounter});
//   }
// }

  render() {
    console.log(this.state);
    console.log("Contents: " + this.state.contents);
    var content_dummy = (
      <LinkList>
        {this.state.contents.map((eventItem, i) => {
        console.log("the object is "  + eventItem);
        console.log(eventItem);
        console.log("0: " + eventItem.contents[1]);
        console.log("id: " + eventItem._id);
        console.log("time: " + eventItem.time);
        console.log("name: " + eventItem.name);

        <EventLink key={eventItem._id} date={eventItem.contents.time} name={eventItem.contents.eventName} />
        })
      }
    </LinkList>
  );
  console.log(content_dummy);
    return (
      <div>
        <div className = "col-md-2 pull-right">
        <div className= "row">
          <div className= "col-md-12 sidebar-pills">
            <ul className= "nav nav-pills">
              <li role="presentation" className= "active">
                <a href="#" className =  "btn btn-default navbar-btn"><span className= "glyphicon glyphicon-fire"></span></a>
              </li>
              <li role="presentation"><a href="#" className = "btn btn-default navbar-btn">
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
            {content_dummy}
          </ul>
        </div>
      </div>
    </div>
    )
  }
}
