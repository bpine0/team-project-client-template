import React from 'react';
import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = "Jackfruit";

// Put your mock objects here, as in Workshop 4
var initialData = {
  "users":{
    "1":{
      "_id": 1,
      "fullName": "Marc Liberatore",
      "myEventList": 1
    },
    "2":{
      "_id": 2,
      "fullName": "Bad Larry",
      "myEventList": 2
    },
    "3":{
      "_id": 3,
      "fullName": "Lasagna Richards",
      "myEventList": 3
    }
  },

  //all the events
  "eventList":{
    "1": { //Event 1
      "_id": 1,
      "eventName": "Supplemental Instruction Review",
      "org": "(UMass LRC)",
      "image": "img/W.E.B._DuBois_Library.jpg",
      "time": "Tomorrow at 5:00 pm",
      "location": "W.E.B. Dubois Library ",
      "description": "Review Session for CMPSCI 250.", //TODO fix the descriptions
      "category": ["Academic"],
      "description": "Review Session for CMPSCI 250. Be there or be square!"+
        "More than just a review session! Reviewing: Inductive reasoning,"+
        "proof by contradiction, the properties of Cardie and Duncan, and"+
        "steady state machines.", //TODO fix the descriptions (Does it work?)
      "createTime": 299848875
    },
    "2":{
      "_id":2,
      "eventName": "UMass vs. BC Hockey Game",
      "org": "(UMass Althetics)",
      "image": "img/UMass_Hockey.jpg",
      "time": "Friday at 7:00 pm",
      "location": "Mullins Center",
      "description": "Some hockey game, somewhere. Sports...", //TODO fix the descriptions
      "category": ["Sports"],
      "createTime": 8282819191
    },
    "3":{
      "_id":3,
      "eventName": "Campus Barbeque",
      "org": "(UMass Alumni Association)",
      "image": "img/Barbeque.jpg",
      "time":"March 15 at 3:00 pm",
      "location": "Goodell Lawn",
      "description": "Mac and cheese and lasagna, fuck me up", //TODO fix the descriptions
      "category": ["Food", "Music"],
      "createTime": 8374839210000
    }
  },

  //user specific event lists
  "myEventLists":{
    "1": {
      "_id": 1,
      "contents": [1, 2]
    },
    "2": {
      "_id": 2,
      "contents": [1, 3]
    },
    "3": {
      "_id": 3,
      "contents": [3]
    }
  }
};

var data = JSON.parse(localStorage.getItem(startupName));
if (data === null) {
  data = JSONClone(initialData);
}

/**
 * A dumb cloning routing. Serializes a JSON object as a string, then
 * deserializes it.
 */
function JSONClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * Emulates reading a "document" from a NoSQL database.
 * Doesn't do any tricky document joins, as we will cover that in the latter
 * half of the course. :)
 */
export function readDocument(collection, id) {
  // Clone the data. We do this to model a database, where you receive a
  // *copy* of an object and not the object itself.
  return JSONClone(data[collection][id]);
}

/**
 * Emulates writing a "document" to a NoSQL database.
 */
export function writeDocument(collection, changedDocument) {
  var id = changedDocument._id;
  // Store a copy of the object into the database. Models a database's behavior.
  data[collection][id] = JSONClone(changedDocument);
  // Update our 'database'.
  localStorage.setItem(startupName, JSON.stringify(data));
}

/**
 * Adds a new document to the NoSQL database.
 */
export function addDocument(collectionName, newDoc) {
  var collection = data[collectionName];
  var nextId = Object.keys(collection).length;
  while (collection[nextId]) {
    nextId++;
  }
  newDoc._id = nextId;
  writeDocument(collectionName, newDoc);
  return newDoc;
}

/**
 * Reset our browser-local database.
 */
export function resetDatabase() {
  localStorage.setItem(startupName, JSON.stringify(initialData));
  data = JSONClone(initialData);
}

/**
 * Reset database button.
 */
class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}

ReactDOM.render(
  <ResetDatabase />,
  document.getElementById('db-reset')
);
