
var userName = prompt("What is your name?")

function functions(){
	getTime()
	getName()
	gse()
}


function getName(){
document.getElementById("greet").innerHTML = "Hello "+userName+", welcome back.";
}


function getTime(){
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();
var time = today.getTime();
var h = today.getHours();
var m = today.getMinutes();
var day = today.getDay();
var dayarray = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
if(dd<10) {
    dd='0'+dd
} 
if(mm<10) {
    mm='0'+mm
} 
if(h>12){
    h=h-12
}
if (m<10){
    m='0'+m
}
today = mm+'/'+dd+'/'+yyyy;
document.getElementById("date").innerHTML = "the current date is "+dayarray[day]+", "+today
document.getElementById("time").innerHTML = "The time is "+h+":"+m
}
function resetTimeDate(){
getTime()
}
function gse() {
    var cx = '014888505177923052774:6tgwxaygcdw';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  };
  function saveText(){
  	var text = document.getElementById("todo") .value;
  	document.getElementById("savedNotes").innerHTML += text+"<br>";
}
	function clearText(){
		document.getElementById("savedNotes") .innerHTML = " "
	}
window.onload=functions()