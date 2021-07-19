//program to update data of a given key every 5 seconds
var firebase = require('firebase');
let obj = {
  // dateAndTime : {
    clientID : "xyz",
    battery : "100%",
    statue : "Affirmative"
    // }
}
let b = {}

//Configuration and initialization 

var appIni =firebase.initializeApp( {
  /*******************************************************************************************
    paste your configurations here
    *****************************************************************************************/
});
var firebaseDB = firebase.database();
function set(){
  let d = new Date();
  b[d] = obj ;
  // console.log(b)
  firebaseDB.ref(<path>).update(b)      //make sure path exists
  
}



firebase.auth().signInWithEmailAndPassword(<email>, <password>)
.then((userCredential) => {
  // Signed in
  var user = userCredential.user;
  console.log(user.uid)
  let d = new Date();
  b[d] = obj ;
  // console.log(b);
  
  setInterval(set , 5000);


})
.catch((error) => {
  console.log("Incorrect email and password combination");
  });

