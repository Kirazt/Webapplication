// JavaScript Document
function change(){
	var text= document.getElementById("cttext").value;
	var cldiv= document.getElementById("cldiv").value;
	var cltext= document.getElementById("cltext").value;
	var div= document.getElementById("color");
	var h1=document.getElementById("text");
	document.getElementById("text").innerHTML= text;
	div.style.backgroundColor=cldiv;
	h1.style.color= cltext;
}