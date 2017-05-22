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
	connect: false, 
	attach: false,
	energy: false,
	charge: false,
	shock: false,
	check: false,
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
	document.getElementById("rational1").innerHTML = "Check patient's Name and DOB.";
	document.getElementById("rational2").innerHTML = "Note: This is an emergent/life saving procedure the correct patient should be clear but.....";
	document.getElementById("rational3").innerHTML = "In this case the correct patient should have a full code status.";
	//Disable Button
	document.getElementById("identify").disabled = "true";	
	//set list object
	list.identify = true;	
}

function connect(){
	//check previous step
	if(list.identify != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/connect.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Be sure the round end of the cord is securely plugged into the LIFEPAK";
		document.getElementById("rational2").innerHTML = "Disconnect test plug if present and plug in combo pads.";
		document.getElementById("rational3").innerHTML = "";
		document.getElementById("rational3").setAttribute("hidden", true);
		//Disable Button
		document.getElementById("connect").disabled = "true";
		//set list object
		list.connect = true;
	}
	
}

function attach(){
	//check previous step
	if(list.connect != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/attachCombo.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Place one pad right upper chest, subclavian area.";
		document.getElementById("rational2").innerHTML = "Place the second pad under left arm diagonal from first pad.";
		document.getElementById("rational3").removeAttribute("hidden");
		document.getElementById("rational3").innerHTML = "Note: The pads the proper placement printed on them, the heart should be between both pads.";
		//Disable Button
		document.getElementById("attach").disabled = "true";
		//set list object
		list.attach = true;
	}
	
}

function energy(){
	//check previous step
	if(list.attach != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/energy.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "The defualt energy selection is 200 joules.";
		document.getElementById("rational2").innerHTML = "Start at 200 joules unless directed otherwise.";
		document.getElementById("rational3").removeAttribute("hidden");
		document.getElementById("rational3").innerHTML = "Note: You may select the energy by pushing the up or down arrows on the button.";
		//Disable Button
		document.getElementById("energy").disabled = "true";
		//set list object
		list.energy = true;
	}
	
}

function charge(){
	if(list.energy != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/charge.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Press the charge button.";
		document.getElementById("rational2").innerHTML = "The unit will charge to selected joules.";
		document.getElementById("rational3").innerHTML = "";
		document.getElementById("rational3").setAttribute("hidden", true);
		//Disable Button
		document.getElementById("charge").disabled = "true";
		list.charge = true;
	}
}

function shock(){
	//check previous step
	if(list.charge != true){
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
		document.getElementById("rational2").innerHTML = "Look and listen for feedback to assure all staff are clear from the patient and then deliver the shock.";
		document.getElementById("rational3").innerHTML = "";
		document.getElementById("rational3").setAttribute("hidden", true);
		//Disable Button
		document.getElementById("shock").disabled = "true";
		//set list object
		list.shock = true;
	}
	
}

function check(){
	//check previous step
	if(list.shock != true){
		error();
	}else{
		//show rationalDiv
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("rationalDiv").removeAttribute("hidden");
		//Set Image, Response, and Rational
		document.getElementById("image").src = "images/check.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Check the rhythm/pulse unless performing CPR.";
		document.getElementById("rational2").innerHTML = "After two mins second shock should by 300 joules. Third shock should be 360 joules and there after.";
		document.getElementById("rational3").innerHTML = "";
		document.getElementById("rational2").removeAttribute("hidden");
		document.getElementById("rational3").setAttribute("hidden", true);
		//Disable Button
		document.getElementById("check").disabled = "true";
		//set list object
		list.check = true;
	}
	
}

function doc(){
	//check previous step
	if(list.check != true){
		error();
	}else{
		//Set Image, Response, and Rational
		document.getElementById("response").setAttribute("class","response");
		document.getElementById("image").src = "images/document.jpg";
		document.getElementById("response").style.color = "green";
		document.getElementById("response").innerHTML = "CORRECT:";
		document.getElementById("rational1").innerHTML = "Document the entire procedure, this should be done in real time by the person designated to do so on the code sheet.";
		document.getElementById("rational2").innerHTML = "";
		document.getElementById("rational3").innerHTML = "";
		document.getElementById("rational2").setAttribute("hidden", true);
		document.getElementById("rational3").setAttribute("hidden", true);
		//Disable Button
		document.getElementById("doc").disabled = "true";
		//set list object
		list.doc = true;
		document.getElementById("next").setAttribute("href","site3.html");
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


