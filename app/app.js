import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import calendar from './components/calendar.js';
import createEvent from './components/create-event.js';
import event_click from './components/event-click.js';
// import event_details from './components/event-details.js';
import Right_Bar from './components/event-details';
import home from './components/home.js';
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
    <createEvent />,
    document.getElementById('create-event')
  );
} else if (document.getElementById('event-click') !== null) {
  ReactDOM.render(
    <event_click />,
    document.getElementById('event-click')
  );
} else if (document.getElementById('event-deets') !== null) {
  ReactDOM.render(
    // <event_details />,
    <Right_Bar />,
    document.getElementById('event-deets')
  );
} else if (document.getElementById('home') !== null) {
  ReactDOM.render(
    <home />,
    document.getElementById('home')
  );
} else if (document.getElementById('my-events') !== null) {
  ReactDOM.render(
    <MyEvents />,
    document.getElementById('my-events')
  );
} else if (document.getElementById('search-results') !== null) {
  ReactDOM.render(
    <search_results />,
    document.getElementById('search-results')
  );
}
