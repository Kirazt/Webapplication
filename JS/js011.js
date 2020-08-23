// JavaScript Document
function changearr(){
	var arr= document.getElementById("firstarr").value;
	var replacearr= document.getElementById("replacearr").value;
	var donearr= document.getElementById("donearr").value;
	var newarr= new RegExp(replacearr, "g");
	var arr1= arr.replace(newarr, donearr);
	document.getElementById("firstarr").value= arr1;
}