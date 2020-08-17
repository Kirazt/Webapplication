// JavaScript Document
function final(){
	var name= document.getElementById("name");
	var pass= document.getElementById("pass").value;
	var date= document.getElementById("date");
	document.getElementById("finalname").innerHTML="Chào mừng" + name.value;
	if(document.getElementById("male").checked==true)
		{
			document.getElementById("finalsex").innerHTML="Bạn là Nam";
		}
	if(document.getElementById("female").checked==true)
		{
			document.getElementById("finalsex").innerHTML="Bạn là Nữ";
		}
	document.getElementById("finalpass").innerHTML="Mật khẩu của bạn có "+ pass.length+ " kí tự";
	document.getElementById("finaldate").innerHTML="Ngày sinh của bạn là"+ date.value;
	if(document.getElementById("sport").selected==true)
	   {
	        document.getElementById("finaljoy").innerHTML="Vấn đề bạn quan tâm là Thể thao";
	   }
	if(document.getElementById("entertainment").selected==true)
	   {
	        document.getElementById("finaljoy").innerHTML="Vấn đề bạn quan tâm là Giải trí";
	   }
	if(document.getElementById("news").selected==true)
	   {
	        document.getElementById("finaljoy").innerHTML="Vấn đề bạn quan tâm là Tin tức";
	   }
}