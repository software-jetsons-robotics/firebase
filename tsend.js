var firebase = require('firebase')    //import firebase module
//firebaes configuration 
var firebaseConfig = {            
  /********************************************************************************* 
  Paste your firebase configuration from general tab of overview/project settings
  *********************************************************************************/


  };
  //initialize the firebase app
firebase.initializeApp(firebaseConfig);
var firebaseDB = firebase.database();
let obj = {
	face1 : '-_-',
	face2 : '+_+'
}
firebaseDB.ref('Testing').set(5)                          // { "Testing" : 5} 
firebaseDB.ref('Testing').set(obj)                         //sets given value to the key 'Testing' and removes previous value
/*
 {
  "Testing" : {
    "face1" : "-_-",
    "face2" : "+_+"
  }
}
*/
firebaseDB.ref('Testing/face1').set({"laugh" : "XD"});      //sets Testing/face1 to given value
/*
 {
  "Testing" : {
    "face1" : {
        "laugh" : XD
    },
    "face2" : "+_+"
  }
}
*/
firebaseDB.ref('Testing').update({"cryingface" : "T_T"})     //add the given key value pair to Testing witout deleting other data 
/*
 {
  "Testing" : {
    "face1" : {
        "laugh" : XD
    },
    "face2" : "+_+",
    "cryingface" : "T_T"
  }
}
*/
