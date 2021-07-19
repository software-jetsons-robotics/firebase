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
firebaseDB.ref().get().then((snapshot) => {
    if(snapshot.exists()) {
        console.clear();
        console.log(snapshot.val())
        return snapshot.val();
    }
    else console.log("No data available");
})
//set data to 'Testing' child/key
