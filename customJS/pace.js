/*
*Author: Robert Munshower
*Created: 04/06/17
*
*NOTE: Not Available for reuse without explicit permission from author.
*/


"use strict";

//Object checklist for procedures
var list = {
	consent: false, 
	identify: false, 
	readyLP: false,
	pace: false,
	doc: false,

}; 

function consent(){
	//show rationalDiv
	document.getElementById("response").setAttribute("class","response");
	document.getElementById("rationalDiv").removeAttribute("hidden");
	//Set Image, Response, and Rational
	//document.getElementById("image").src = "images/identifyPatient.jpg";
	document.getElementById("response").style.color = "green";
	document.getElementById("response").innerHTML = "CORRECT:";
	document.getElementById("rational1").innerHTML = "Get order and consent if possible.";
	document.getElementById("rational2").innerHTML = "Explain the entire procedure to the patient if possible.";
	document.getElementById("rational3").innerHTML = "";
	document.getElementById("rational3").setAttribute("hidden",true);
	
	//Disable Button
	document.getElementById("consent").disabled = "true";	
	//set list object
	list.consent = true;	
}

function identify(){
	if(list.consent != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/identifyPatient.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Check patient's Name and DOB.";
		document.getElementById("rational2").setAttribute("hidden",true);
		document.getElementById("rational3").setAttribute("hidden",true);
		document.getElementById("rational2").innerHTML = "";
		document.getElementById("rational3").innerHTML = "";
		//Disable Button
		document.getElementById("identify").disabled = "true";	
		//set list object
		list.identify = true;
	}
}

function readyLP(){
	//check previous step
	if(list.identify != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/readyLP.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Turn the LIFEPAK on.";
		document.getElementById("rational2").innerHTML = "Attach BOTH the electrodes and Combo pads to the patient as previously described.";
		document.getElementById("rational3").removeAttribute("hidden");
		document.getElementById("rational3").innerHTML = "Note: Only the combo pads can deliver energy and read rhythm, but they can't do both at the same time!<br>*Stable consious patients should recieve sedation.<br>*Even Sedated patients should receive an analgesic.";
		
		//Disable Button
		document.getElementById("readyLP").disabled = "true";
		//set list object
		list.readyLP = true;
	}
	
}

function pace(){
	//check previous step
	if(list.readyLP != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/pace.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Press the PACER button. Select a rate with the RATE button using the up or down arrows, rate should be above patients heart rate.";
		document.getElementById("rational2").removeAttribute("hidden");
		document.getElementById("rational2").innerHTML = "If not sensing you may need to increase the Current/Milliamps with the CURRENT button or speed dial until";
		//document.getElementById("rational3").removeAttribute("hidden");
		document.getElementById("rational3").innerHTML = "NOTES: During pacing the monitor will display pacer marks each time a pulse is delivered with a yellow arrow.<br>To terminate pacing press the PACER button.<br> Place a conspicuous sign above bed that says patient is being paced.";
		//Disable Button
		document.getElementById("pace").disabled = "true";
		//set list object
		list.pace = true;
	}
	
}


function doc(){
	//check previous step
	if(list.pace != true){
		error();
	}else{
		//Set Image, Response, and Rational
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("image").src = "images/document.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Document the entire procedure.";
		document.getElementById("rational2").innerHTML = "";
		document.getElementById("rational3").innerHTML = "";
		document.getElementById("rational2").setAttribute("hidden", true);
		document.getElementById("rational3").setAttribute("hidden", true);
		//Disable Button
		document.getElementById("doc").disabled = "true";
		//set list object
		list.doc = true;
	}
	
}

function complete(){
	alert("Thank you!\n\nYou have completed the instruction portion and are now ready to be validated.");
	window.location.replace("site.html");
}


function error(){
	document.getElementById("rationalDiv").setAttribute("hidden",true);
	document.getElementById("response").setAttribute("class","responseShake");
	document.getElementById("response").style.color = "red";
	document.getElementById("response").innerHTML = "INCORRECT: That is not the correct action.";
}

function onLoad(){
}


