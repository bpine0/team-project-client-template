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
            <LinkList />
            {this.state.contents.map((eventItem) =>{
              console.log(eventItem);
              console.log('wow');
              console.log(eventItem.time);
              console.log(eventItem.eventName);
              return (
                <EventLink key={eventItem._id} date={eventItem.time} name={eventItem.eventName} />
              )
            })

              }
          </ul>
        </div>
      </div>
    </div>
    )
  }
}
