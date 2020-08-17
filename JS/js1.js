// JavaScript Document
function Ten(){
	var ten=document.getElementById("name");
	document.getElementById("Ten").innerHTML="Chào bạn "+ ten.value;
}
function Yearold(){
	var nam= document.getElementById("year").value;
	var tuoi;
	tuoi= 2020 - parseInt(nam);
	document.getElementById("ketqua").innerHTML= "Tuổi của bạn là: " + tuoi;
}