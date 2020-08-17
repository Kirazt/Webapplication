// JavaScript Document
function Tinh(){
	var a=document.getElementById("a").value;
	var b=document.getElementById("b").value;
	var c=document.getElementById("c").value;
	var x1,x2,delta;
	delta= b*b - 4*a*c;
	if(delta<0){
		x1=0;
		x2=0;
		document.getElementById("tieude").innerHTML="Phương trình có 2 nghiệm là: ";
		document.getElementById("x1").innerHTML="X1 = "+x1;
		document.getElementById("x2").innerHTML="X2 = "+x2;
	}
	else if(delta==0){
		x1=-b/(2*a);
		x2=-b/(2*a);
		document.getElementById("tieude").innerHTML="Phương trình có 2 nghiệm là: ";
		document.getElementById("x1").innerHTML.value="X1 = "+x1;
		document.getElementById("x2").innerHTML.value="X1 = "+x2;
	}
	else if(delta>0){
		x1=(-b-Math.sqrt(delta))/(2*a);
		x2=(-b+Math.sqrt(delta))/(2*a);
		document.getElementById("tieude").innerHTML="Phương trình có 2 nghiệm là: ";
		document.getElementById("x1").innerHTML="X1 = "+x1;
		document.getElementById("x2").innerHTML="X1 = "+x2;
	}
}