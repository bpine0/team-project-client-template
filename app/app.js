import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import calendar from './components/calendar.js';
import create_event from './components/create-event.js';
import Event_Click from './components/event-click.js';
// import event_details from './components/event-details.js';
<<<<<<< HEAD
import EventDeets from './components/event-details';
import home from './components/home.js';
=======
import Right from './components/event-details';
import Home from './components/home.js';
>>>>>>> 5ab6149923435ad7061e481e6a6e9964cbbe1ed4
import MyEvents from './components/my-events';
import search_results from './components/search-results.js';

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('calendar') !== null) {
  ReactDOM.render(
    <calendar />,
    document.getElementById('calendar')
  );
} else if (document.getElementById('create-event') !== null) {
  ReactDOM.render(
    <create_event />,
    document.getElementById('create-event')
  );
} else if (document.getElementById('event-click') !== null) {
  ReactDOM.render(
    <Event_Click />,
    document.getElementById('event-click')
  );
} else if (document.getElementById('event-deets') !== null) {
  ReactDOM.render(
    <EventDeets />,
    document.getElementById('event-deets')
  );
} else if (document.getElementById('home') !== null) {
  ReactDOM.render(
    <Home />,
    document.getElementById('home')
  );
} else if (document.getElementById('list-my-events') !== null) {
  ReactDOM.render(
    <MyEvents />,
    document.getElementById('list-my-events')
  );
} else if (document.getElementById('search-results') !== null) {
  ReactDOM.render(
    <search_results />,
    document.getElementById('search-results')
  );
}
