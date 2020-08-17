arr="HTML-JAVA";

function Move(){
	if(arr.length>0)
		{
			arr=arr.slice(-1) + arr.slice(0, -1);
			document.getElementById("kq").innerHTML= arr;
		}
	
}


