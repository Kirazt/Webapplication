function Tinh(){
	var a= Number(document.getElementById("a").value);
	var b= Number(document.getElementById("b").value);
    if(document.getElementById("cong").checked==true){
		document.getElementById("ketqua").innerHTML= a+b;
	}
	if(document.getElementById("tru").checked==true){
		document.getElementById("ketqua").innerHTML= a-b;
	}
	if(document.getElementById("nhan").checked==true){
		document.getElementById("ketqua").innerHTML= a*b;
	}
	if(document.getElementById("chia").checked==true){
		document.getElementById("ketqua").innerHTML= a/b;
	}
}