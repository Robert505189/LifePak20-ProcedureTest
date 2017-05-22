/*
*Author: Robert Munshower
*Created: 04/06/17
*
*NOTE: Not Available for reuse without explicit permission from author.
*/


"use strict";

//Object checklist for procedures
var list = {
	identify: false, 
	 explain: false, 
	    prep: false,
	  attach: false,
	 powerOn: false,
	  rhythm: false,
	     doc: false
}; 



function identify(){
	//show rationalDiv
	document.getElementById("response").setAttribute("class","response");
	document.getElementById("rationalDiv").removeAttribute("hidden");
	//Set Image, Response, and Rational
	document.getElementById("image").src = "images/identifyPatient.jpg";
	document.getElementById("response").style.color = "green";
	document.getElementById("response").innerHTML = "CORRECT:";
	document.getElementById("rational1").innerHTML = "Check patient's Name.";
	document.getElementById("rational2").innerHTML = "Check patient's DOB.";
	document.getElementById("rational3").innerHTML = "Note: Cardiac Monitoring with the LIFEPAK is not necessarily an emergent procedure.";
	//Disable Button
	document.getElementById("identify").disabled = "true";	
	//set list object
	list.identify = true;	
}

function explain(){
	//check previous step
	if(list.identify != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/explain.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "You should always explain any procedures to your patient.";
		document.getElementById("rational2").innerHTML = "Note: This would not apply during an emergent situation.";
		document.getElementById("rational3").innerHTML = "";
		document.getElementById("rational3").setAttribute("hidden", true);
		//Disable Button
		document.getElementById("explain").disabled = "true";
		//set list object
		list.explain = true;
	}
	
}

function prep(){
	//check previous step
	if(list.explain != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/prep.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Prep the skin for electrode placement.";
		document.getElementById("rational2").innerHTML = "This may include using alcohol to remove excess sweat, oil, or dirt. Excess hair may need to be clipped.";
		document.getElementById("rational3").innerHTML = "";
		document.getElementById("rational3").setAttribute("hidden", true);
		//Disable Button
		document.getElementById("prep").disabled = "true";
		//set list object
		list.prep = true;
	}
	
}

function attach(){
	//check previous step
	if(list.prep != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/attach.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Remove paper backing and apply electrodes to the patient.";
		document.getElementById("rational2").innerHTML = "Take care to position the electrodes correctly and securely.";
		document.getElementById("rational3").removeAttribute("hidden");
		document.getElementById("rational3").innerHTML = "Keep in mind you may need to position electrodes so that they don't interfere with combo pads.";
		//Disable Button
		document.getElementById("attach").disabled = "true";
		//set list object
		list.attach = true;
	}
	
}

function powerOn(){
	if(list.attach != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/powerOn.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "<i>*</i>You may plug in and power on the montior at any point in the process.";
		document.getElementById("rational2").innerHTML = 'Open the door "if present" to take monitor out of AED mode.';
		document.getElementById("rational3").innerHTML = "";
		document.getElementById("rational3").setAttribute("hidden", true);
		//Disable Button
		document.getElementById("powerOn").disabled = "true";
		list.powerOn = true;
	}
}

function rhythm(){
	//check previous step
	if(list.attach != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/rhythm.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Verify the rhythm shown on the LIFEPAK monitor.";
		document.getElementById("rational2").innerHTML = "If excessive noise is present you may need to adjust the electrode placement or make better skin contact.";
		document.getElementById("rational3").innerHTML = "";
		document.getElementById("rational3").setAttribute("hidden", true);
		//Disable Button
		document.getElementById("rhythm").disabled = "true";
		//set list object
		list.rhythm = true;
	}
	
}

function doc(){
	//check previous step
	if(list.rhythm != true){
		error();
	}else{
		//Set Image, Response, and Rational
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("image").src = "images/document.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Document rhythm and procedures as appropriate.";
		document.getElementById("rational2").innerHTML = "";
		document.getElementById("rational3").innerHTML = "";
		document.getElementById("rational2").setAttribute("hidden", true);
		document.getElementById("rational3").setAttribute("hidden", true);
		//Disable Button
		document.getElementById("doc").disabled = "true";
		//set list object
		list.doc = true;
		document.getElementById("next").setAttribute("href","site2.html");
	}
	
}


function error(){
	document.getElementById("rationalDiv").setAttribute("hidden",true);
	document.getElementById("response").setAttribute("class","responseShake");
	document.getElementById("response").style.color = "red";
	document.getElementById("response").innerHTML = "INCORRECT: That is not the correct action.";
}

function onLoad(){
}


