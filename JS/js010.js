// JavaScript Document
function createarr(){
	var n= document.getElementById("arrnum").value;
	var arr= [];
	var i;
	for(i=0; i<n; i++){
		arr[i]=Math.floor(Math.random()*50);
	}
}