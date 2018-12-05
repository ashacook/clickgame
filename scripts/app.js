$(document).ready(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD4P_H2eWWyhuvl_82FlApYH6nFo7OwS2c",
    authDomain: "gaming-7adfc.firebaseapp.com",
    databaseURL: "https://gaming-7adfc.firebaseio.com",
    projectId: "gaming-7adfc",
    storageBucket: "gaming-7adfc.appspot.com",
    messagingSenderId: "874101141014"
  };
  firebase.initializeApp(config);
/*
  var config = {
    apiKey: "AIzaSyBE0cDmss_eLeo1q_YMAAaFgx6lfMmgMv0",
    authDomain: "guess-game-b807e.firebaseapp.com",
    databaseURL: "https://guess-game-b807e.firebaseio.com",
    projectId: "guess-game-b807e",
    storageBucket: "guess-game-b807e.appspot.com",
    messagingSenderId: "569127673568"
  };
  firebase.initializeApp(config);
*/

  //var gatheringblue = new Gathering(firebase.database(), 'Gathering_Blue');
  //var gatheringred = new Gathering(firebase.database(), 'Gathering_Red');
  // Establish to identify which branch of our Firebase Database
  //var db = firebase.database().ref();
  var blue_db = firebase.database().ref('blue');
  var red_db = firebase.database().ref('red');

/*
setInterval(function() {
	blue_db.set(50);
	red_db.set(50);
	window.location.href='index.html';
	//db.push("hello");
    // your code goes here...

}, 5 * 60 * 1000); // 60 * 1000 milsec
  // Send Data to Firebase
 /* $('.button').click(function() {
    //alert("OMG");

    var messageToSend = guess;
    // Pushes a new item to our Firebase database

  })

  // Recieve Data from Firebase
  var getDataFromFirebase = function() {
    mainBranch.on('child_added', function(myFirebaseItem) {
      var firebaseChild = myFirebaseItem.val();
      var theActualMessage = firebaseChild.specialMessage;
      $('.box').append(theActualMessage);
    });
  }

  getDataFromFirebase();*/
  
var height=$( document ).height();
$( "#main,#blue_main,#red_main,#finish_main" ).css( "height", height );

var width=$( document ).width();
$( "#main,#blue_main,#red_main,#finish_main" ).css( "width", width );


  //var guess=["win","lose","lose","lose"];
//$("#display").hide();
  $( ".box1,.box2" ).on( "click", function() {

	   //var background_color =$(this).css( "backgroundColor" );
	   //$( "#main" ).css( "backgroundColor", background_color );
	   //$(".box1,.box2").hide();
	   //$("#display").show();

	   if(this.className=="box1"){window.location.href='blue.html';}else{window.location.href='red.html';}

//gathering.join(firebase.auth().currentUser.uid, 'Superman');

  });
    var blue_width =$(".blue").css( "width" );
	  blue_width = parseInt(width, 10);

	  var red_width =$(".red").css( "width" );
	  red_width = parseInt(width, 10);

   $( "#red_main" ).on( "click", function() {

	    //var ref = db.child('red').val();


red_db.transaction(function(currentClicks) {
  // If node/clicks has never been set, currentRank will be `null`.
   var newValue = currentClicks;
  if (newValue >= 100) {
    return; // abort the transaction
  }else{newValue+= 10;}



	  //alert(newValue);
  return newValue;
});

blue_db.transaction(function(currentClicks) {
  // If node/clicks has never been set, currentRank will be `null`.
   var newVal =currentClicks;
    //newVal-= 10;
    //alert(newVal);
  if (newVal ==0 ) {
    return; // abort the transaction
  }else{newVal-= 10;}



  return newVal;
});

   });


   $( "#blue_main" ).on( "click", function() {

	    //var ref = db.child('red').val();


blue_db.transaction(function(currentClicks) {
  // If node/clicks has never been set, currentRank will be `null`.
   newValu = currentClicks;
  if (newValu >= 100) {
    return; // abort the transaction
  }else{newValu+= 10;}



	  //alert(newValue);
  return newValu;
});

red_db.transaction(function(currentClicks) {
  // If node/clicks has never been set, currentRank will be `null`.
   newVa = currentClicks;
  if (newVa ==0 ) {
    return; // abort the transaction
  }else{newVa-= 10;}



	  //alert(newValue);
  return newVa;
});

   });


  $("#finish_main").hide();
blue_db.on('value', function(snapshot) {
  //updateStarCount(postElement, snapshot.val());
  //if(snapshot.val()!=10||snapshot.val()!=-10){
	  $( ".blue" ).css( "width", snapshot.val()+"%" );
  //}
  //alert(snapshot.val());
   if(snapshot.val()==100){
	   $("#blue_main,#red_main").hide();
	 $(".blue_team").text("WIN");
	 $(".red_team").text("LOSE");
	 $("#finish_main").show();
	 //window.location.href="finish.html";

 }
});

 red_db.on('value', function(snapshot) {
  //updateStarCount(postElement, snapshot.val());
  //if(snapshot.val()!=10||snapshot.val()!=-10){
	  $( ".red" ).css( "width", snapshot.val()+"%" );
 // }
 if(snapshot.val()==100){
	 $("#red_main,#blue_main").hide();
	 $(".red_team").text("WIN");
	 $(".blue_team").text("LOSE");
	 $("#finish_main").show();
	 //window.location.href='finish.html';

 }
  //alert(snapshot.val());
});

});
