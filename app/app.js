import React from 'react';
import ReactDOM from 'react-dom';

// Each major browser view user interface must be imported.
import Calendar from './components/calendar.js';
import CreateEvent from './components/create-event.js';
import Event_Click from './components/event-click.js';
// import event_details from './components/event-details.js';

import EventDeets from './components/event-details';
import Home from './components/home.js';

import MyEvents from './components/my-events';
import SearchResults from './components/search-results.js';

// For each view conditionally determine which view to display
// depending on if the ID is present in the HTML.
if (document.getElementById('calendar') !== null) {
  ReactDOM.render(
    <Calendar />,
    document.getElementById('calendar')
  );
} else if (document.getElementById('create-list') !== null) {
  ReactDOM.render(
    <CreateEvent />,
    document.getElementById('create-list')
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
} else if (document.getElementById('search_results') !== null) {
  ReactDOM.render(
    <SearchResults />,
    document.getElementById('search_results')
  );
}
