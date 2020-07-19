function submitForm(){
    const form = document.forms['contactForm']
    
    var name     = form["name"].value
    var company  = form["company"].value
    var email    = form["email"].value
    var phone    = form["phone"].value
    var message  = form["message"].value

    console.log(name)

    saveMessage(name, company, email, phone, message)
    
    return false;
}

function saveMessage(name, company, email, phone, message){
    // DatabaseReference
    var newDatabaseReference = databaseReference.push();

    newDatabaseReference.set(
	{
	    name: name,
	    company: company,
	    email: email,
	    phone: phone,
	    message: message
	}
    )
}



// 
var firebaseConfig = {
    apiKey: "AIzaSyA2q1ipc3f_qpQYJG1JOLSvCivdJYb3Ht8",
    authDomain: "prog-web-d7a23.firebaseapp.com",
    databaseURL: "https://prog-web-d7a23.firebaseio.com",
    projectId: "prog-web-d7a23",
    storageBucket: "prog-web-d7a23.appspot.com",
    messagingSenderId: "837188550555",
    appId: "1:837188550555:web:293f89ff730b1af163eb3e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
var databaseReference = firebase.database().ref("TT905_2020")
