import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

// Each major browser view user interface must be imported.
import Calendar from './components/calendar.js';
import CreateEvent from './components/create-event.js';
// import Event_Click from './components/event-click.js';
import EventDeets from './components/event-details';
import Home from './components/home.js';
import MyEvents from './components/my-events';
import SearchResults from './components/search-results.js';
import AllEvents from './components/my-events.js';

class App extends React.Component {
  render() {
    return (
      <div>{this.props.children}</div>
    )
  }
}

class HomePage extends React.Component {
  render() {
    return <Home user={1} />
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="/calendar/:id" component={Calendar} />
      <Route path="/event-details/:id" component={EventDeets} />
      <Route path="/create-event" component={CreateEvent} />
      <Route path="/my-events/:id" component={MyEvents} />
      <Route path="/search-results" component={SearchResults} />
      <Route path="/all-events" component={AllEvents} />
    </Route>
  </Router>
), document.getElementById('root'));
