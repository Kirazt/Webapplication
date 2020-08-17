// JavaScript Document
var arr= [];
function createarr(){
	var n= document.getElementById("numarr").value;
	str=('Mảng Ban Đầu: ');
	for(var i=0; i<n ; i++)
	{
		arr[i]= Math.floor(Math.random()*50);
		str= str + arr[i] + ' ';
	}
	document.getElementById("start").innerHTML= str;
	return arr;
}
function biggerarr(){
	var n= document.getElementById("numarr").value;
	arr.sort(function(a,b){return a - b} );
	str=('Mảng tăng dần: ');
	for(var i=0; i<n ; i++)
	{
		str= str + arr[i] + (' ');
	}
	document.getElementById("bigger").innerHTML= str;
}
function smallerarr(){
	var n= document.getElementById("numarr").value;
	arr.sort(function(a,b){return b - a} );
	str=('Mảng nhỏ dần: ');
	for(var i=0; i<n ; i++)
	{
		str= str + arr[i] + (' ');
	}
	document.getElementById("smaller").innerHTML= str;
}
