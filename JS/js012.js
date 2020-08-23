// JavaScript Document

function reserve(){
			var arr= document.getElementById("arr").value;
			var splitarr= arr.split(" ");
			var arr1= "";
			var i;
			for(var i=splitarr.length-1; i>=0; i--)
				{
					arr1= arr1 +  splitarr[i] + " ";
				}
			document.getElementById("arr").value= arr1; 
		}
function chuanhoa(){
			var arr= document.getElementById("arr").value;
	        var trimarr= arr.trim();
			var splitarr= trimarr.split(/\s+/);
	        var i;
	        var Fstr="";
	        var normalizearr="";
	        for(i=0; i<splitarr.length; i++)
				{
					Fstr+=splitarr[i].charAt(0).toUpperCase() + splitarr[i].slice(1).toLowerCase() + " ";
				}
	        
			document.getElementById("arr").value=Fstr; 
		}