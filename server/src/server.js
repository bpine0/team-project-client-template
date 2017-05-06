// Implement your server in this file.
// We should be able to run your server with node src/server.js

// Imports the express Node module.
var express = require('express');
// Creates an Express server.
var app = express();

var bodyParser = require('body-parser');
var database = require('./database')
var readDocument = database.readDocument;
var writeDocument = database.writeDocument;
var addDocument = database.addDocument;



app.use(bodyParser.text());
// You run the server from `server`, so `../client/build` is `server/../client/build`.
// '..' means "go up one directory", so this translates into `client/build`!
app.use(express.static('../client/build'));

// Support receiving text in HTTP request bodies
app.use(bodyParser.text());
// Support receiving JSON in HTTP request bodies
app.use(bodyParser.json());


function getMyEventData(user) {
  // Get the User object with the id "user".

  var userData = readDocument('users', user);

  // Get the Event list for the user.
  var eventListData = readDocument('myEventLists', userData.myEventList);

  // Return EventData with resolved references.
  // emulateServerReturn will emulate an asynchronous server operation, which
  // invokes (calls) the "cb" function some time in the future.
  eventListData.contents = eventListData.contents.map(getEventSync);
  return(eventListData);
 }

 // app.get()
