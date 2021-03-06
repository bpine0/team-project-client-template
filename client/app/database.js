import React from 'react';
// import ReactDOM from 'react-dom';

// Modify with your startup's name!
var startupName = "Jackfruit";

// Put your mock objects here, as in Workshop 4
var initialData = {
  "users":{
    "0":{
      "_id": 0,
      "fullName": "Default User",
      "myEventList": 0
    },
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
      "org_link": "http://www.umass.edu/lrc/",
      "image": "img/W.E.B._DuBois_Library.jpg",
      "time": "Tomorrow at 5:00 pm",
      "location": "W.E.B. Dubois Library ",
      "description": "Review Session for CMPSCI 250. Be there or be square! "+
         " More than just a review session! Reviewing: Inductive reasoning, "+
         "proof by contradiction, the properties of Cardie and Duncan, and "+
         "steady state machines.", //TODO fix the descriptions (Does it work?)
      "createTime": 299848875
    },
    "2":{
      "_id":2,
      "eventName": "UMass vs. BC Hockey Game",
      "org": "(UMass Althetics)",
      "org_link": "http://www.umassathletics.com/",
      "image": "img/UMass_Hockey.jpg",
      "time": "Friday at 7:00 pm",
      "location": "Mullins Center",
      "description": "UMass vs. Boston College. Show up and show your support for the" +
          " minutemen in their last home game of the season!" +
          " Be one of the first 1,000 students and get a free UMass Hockey T-shirt!",
      "createTime": 8282819191
    },
    "3":{
      "_id": 3,
      "eventName": "Campus Barbeque",
      "org": "(UMass Alumni Association)",
      "org_link": "http://www.umassalumni.com/s/1640/alumni/start.aspx?gid=2&pgid=61",
      "image": "img/Barbeque.jpg",
      "time":"March 15 at 3:00 pm",
      "location": "Goodell Lawn",
      "description": "Come join us for wonderful food hosted by UMass Dining:" +
          " Cheeseburgers, grilled chicken, veggie burger, corn on the cob, macaroni and cheese, salad, and cookies"+
          " Listen to UMass Dynamics perform while eating a lunch hosted by the Alumni Associaition",
      "createTime": 8374839210000
    }
  },

  //user specific event lists
  "myEventLists":{
    "0": {
      "_id": 0,
      "contents": [1, 2, 3]
    },
    "1": {
      "_id": 1,
      "contents": [1, 2]
    },
    "2": {
      "_id": 2,
      "contents": [1, 2, 3]
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
export default class ResetDatabase extends React.Component {
  render() {
    return (
      <button className="btn btn-default header-title" type="button" onClick={() => {
        resetDatabase();
        window.alert("Database reset! Refreshing the page now...");
        document.location.reload(false);
      }}>Reset Mock DB</button>
    );
  }
}



// ReactDOM.render(
//   <ResetDatabase />,
//   document.getElementById('db-reset')
// );
