import {readDocument, writeDocument, addDocument} from './database.js';

function sendXHR(verb, resource, body, cb) {
  var xhr = new XMLHttpRequest();
  xhr.open(verb, resource);
  // xhr.setRequestHeader('Authorization', 'Bearer ' + token);
  // The below comment tells ESLint that FacebookError is a global.
  // Otherwise, ESLint would complain about it! (See what happens in Atom if
  // you remove the comment...)
  /* global FacebookError */

  // Response received from server. It could be a failure, though!
  xhr.addEventListener('load', function() {
    var statusCode = xhr.status;
    var statusText = xhr.statusText;
    if (statusCode >= 200 && statusCode < 300) {
      // Success: Status code is in the [200, 300) range.
      // Call the callback with the final XHR object.
      cb(xhr);
    } else {
      // Client or server error.
      // The server may have included some response text with details concerning
      // the error.
      var responseText = xhr.responseText;
      FacebookError('Could not ' + verb + " " + resource + ": Received " + statusCode + " " + statusText + ": " + responseText);
    }
  });

  // Time out the request if it takes longer than 10,000
  // milliseconds (10 seconds)
  xhr.timeout = 10000;

  // Network failure: Could not connect to server.
  xhr.addEventListener('error', function() {
    FacebookError('Could not ' + verb + " " + resource + ": Could not connect to the server.");
  });

  // Network failure: request took too long to complete.
  xhr.addEventListener('timeout', function() {
    FacebookError('Could not ' + verb + " " + resource + ": Request timed out.");
  });

  switch (typeof(body)) {
    case 'undefined':
      // No body to send.
      xhr.send();
      break;
    case 'string':
      // Tell the server we are sending text.
      xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      xhr.send(body);
      break;
    case 'object':
      // Tell the server we are sending JSON.
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      // Convert body into a JSON string.
      xhr.send(JSON.stringify(body));
      break;
    default:
      throw new Error('Unknown body type: ' + typeof(body));
  }
}
/**
 * Emulates how a REST call is *asynchronous* -- it calls your function back
 * some time in the future with data.
 */
function emulateServerReturn(data, cb) {
  setTimeout(() => {
    cb(data);
  }, 1);
}

/**
 * Given a feed item ID, returns a FeedItem object with references resolved.
 * Internal to the server, since it's synchronous.
 */
function getMyEventSync(myEventListId) {
  var myEventList = readDocument('myEventLists', myEventListId);
  myEventList.contents = myEventList.contents.map((eventEntry) => readDocument('eventList', eventEntry));
  return myEventList;
}

function getEventSync(eventId) {
  var eventItem = readDocument('eventList', eventId);
  return eventItem
}


/**
 * Emulates a REST call to get the feed data for a particular user.
 * @param user The ID of the user whose feed we are requesting.
 * @param cb A Function object, which we will invoke when the Feed's data is available.
 */
 //Read all of the myEvent data for the user
export function getMyEventData(user, cb) {
  // Get the User object with the id "user".
//   var userData = readDocument('users', user);
//
//   // Get the Event list for the user.
//   var eventListData = readDocument('myEventLists', userData.myEventList);
//
//   // Return EventData with resolved references.
//   // emulateServerReturn will emulate an asynchronous server operation, which
//   // invokes (calls) the "cb" function some time in the future.
//   eventListData.contents = eventListData.contents.map(getEventSync);
//   emulateServerReturn(eventListData, cb);
  sendXHR('GET', '/my-events/1', undefined, (xhr) => {
    // Call the callback with the data.
    cb(JSON.parse(xhr.responseText));
  });
 }

 // var xhr = new XMLHttpRequest();
 // xhr.open('GET', '/user/4/feed');

export function getEvent(eventId, cb) {
  //pull the event data
  var eventData = readDocument('eventList', eventId);
  eventData.contents = getEventSync(eventId);
  emulateServerReturn(eventData, cb);
}

export function createNewEvent(user, eventName, org, org_link, image, time, location, description, category, cb) {
  // If we were implementing this for real on an actual server, we would check
  // that the user ID is correct & matches the authenticated user. But since
  // we're mocking it, we can be less strict.

  // Get the current UNIX time.
  var createTime = new Date().getTime();
  // The new status update. The database will assign the ID for us.
  var newEvent = {
    "author": user,
    "eventName": eventName,
    "org": org,
    "org_link": org_link,
    "image": image,
    "time": time,
    "location": location,
    "description": description,
    "category": category,
    "createTime": createTime
  };

  // Add the status update to the database.
  // Returns the status update w/ an ID assigned.
  newEvent = addDocument('eventList', newEvent);

  // Add the status update reference to the front of the current user's feed.
  var userData = readDocument('users', user);
  var eventData = readDocument('myEventLists', userData.myEventList);
  eventData.unshift(newEvent._id);

  //???
  // Update the feed object.
  writeDocument('myEventLists', newEvent);

  // Return the newly-posted object.
  emulateServerReturn(newEvent, cb);
}

/**
 * REMOVE a new event to the database on the given event item.
 * Returns the updated Event.
 */
export function removeEventFromMasterList(eventItemId, userId, cb) {
  var user = readDocument('users', userId)
  var eventItem = readDocument('eventList', eventItemId)
  if (user === eventItem.author){
    this.eventList.splice(eventItemId, 1)
  }
  // Return a resolved version of the event item so React can
  // render it.
  emulateServerReturn(eventItemId, cb);
}

/**
 * Adds a new event to the database on the given event item.
 * Returns the updated Event.
 */
export function addEventToMyEvents(eventItemId, userId, cb) {
  var user = readDocument('users', userId)
  user.myEventList.contents.push(eventItemId)

  // Return a resolved version of the event item so React can
  // render it.
  emulateServerReturn(userId, cb);
}

/**
 * removes an event to the database on the given event item.
 * Returns the updated Event object.
 */
export function removeEventFromMyEvents(eventItemId, userId, cb) {
  var user = readDocument('users', userId)
  user.myEventList.contents.splice(eventItemId, 1)

  // Return a resolved version of the event item so React can
  // render it.
  emulateServerReturn(userId, cb);
}
