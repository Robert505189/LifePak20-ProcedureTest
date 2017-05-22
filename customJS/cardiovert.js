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
	sync: false,
	energy: false,
	shock: false,
	doc: false//,
	//doc: false
}; 

function consent(){
	//show rationalDiv
	document.getElementById("response").setAttribute("class","response");
	document.getElementById("rationalDiv").removeAttribute("hidden");
	//Set Image, Response, and Rational
	//document.getElementById("image").src = "images/identifyPatient.jpg";
	document.getElementById("response").style.color = "green";
	document.getElementById("response").innerHTML = "CORRECT:";
	document.getElementById("rational1").innerHTML = "Get order and consent if possible";
	document.getElementById("rational2").innerHTML = "Explain the entire procedure to the patient if possible.";
	document.getElementById("rational3").innerHTML = "Note: Synchronized cardioversion is not always an emergent procedure hence the need for an order and consent.";
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
		document.getElementById("rational2").innerHTML = "Note: This could be an emergent/life saving procedure the correct patient should be clear but.....";
		document.getElementById("rational3").innerHTML = "In this case the correct patient should have a full code status.";
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
		document.getElementById("rational3").innerHTML = "Note: Only the combo pads can deliver energy and read rhythm, but they can't do both at the same time!<br>*Stable consious patients should recieve sedation.";
		
		//Disable Button
		document.getElementById("readyLP").disabled = "true";
		//set list object
		list.readyLP = true;
	}
	
}

function sync(){
	//check previous step
	if(list.readyLP != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/sync.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Press the SYNC button ";
		document.getElementById("rational2").innerHTML = "A correctly synchronized rhythm will have a marker directly above each R wave.";
		//document.getElementById("rational3").removeAttribute("hidden");
		document.getElementById("rational3").innerHTML = "Note:You may adjust the size until sync markers occur with each wave by using the SIZE button.<br><br>*<i>FOR EACH SYNCHRONIZED SHOCK THE SYNC BUTTON MUST BE USED EVERY TIME.</i>";
		//Disable Button
		document.getElementById("sync").disabled = "true";
		//set list object
		list.sync = true;
	}
	
}

function energy(){
	//check previous step
	if(list.sync != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/energyCharge.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Select an energy between 50 to 100 joules.";
		document.getElementById("rational2").innerHTML = "Once energy is selected press the charge button.";
		document.getElementById("rational3").setAttribute("hidden",true);
		document.getElementById("rational3").innerHTML = "";
		//Disable Button
		document.getElementById("energy").disabled = "true";
		//set list object
		list.energy = true;
	}
	
}

function shock(){
	//check previous step
	if(list.energy != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/shock.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Call all clear.";
		document.getElementById("rational2").innerHTML = "Look and listen for feedback to assure all staff are clear from the patient.";
		document.getElementById("rational3").removeAttribute("hidden");
		document.getElementById("rational3").innerHTML = "To deliver a synchronized shock <i>PRESS AND HOLD </i> the shock button<br>Check the rhythm, may repeat after two minutes.<br>May resume CPR if needed.";
		
		//Disable Button
		document.getElementById("shock").disabled = "true";
		//set list object
		list.shock = true;
	}
	
}


function doc(){
	//check previous step
	if(list.shock != true){
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
		document.getElementById("next").setAttribute("href","site4.html");
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


