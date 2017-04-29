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
    console.log(this)
    var user_event_list = (
      <LinkList>
        {this.state.contents.map((eventItem, i) => {
          return (
            <EventLink key={i} date={eventItem.time} name={eventItem.eventName}></EventLink>
          );
        }
        )}
      </LinkList>);

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
            {user_event_list}
          </ul>
        </div>
      </div>
    </div>
    )
  }
}
