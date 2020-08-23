// JavaScript Document
function Change(){
	var color= document.getElementById("choose").value;
	var div= document.getElementById("color");
	div.style.backgroundColor= color;
	document.getElementById("value").innerHTML= "Giá trị mẫu được chọn là:" + color;
}