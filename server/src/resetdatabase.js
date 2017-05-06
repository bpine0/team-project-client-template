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
