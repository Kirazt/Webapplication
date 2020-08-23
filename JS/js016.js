// JavaScript Document
function change(){
	var style= document.createElement('style');
	var str=document.getElementsByTagName('style');
	var i;
	if(document.getElementById("default").checked==true){
		for(i=0; i<str.length; i++)
			{
				str[i].parentNode.removeChild(str[i]);
			}
	}
	if(document.getElementById("check").checked==true)
		{
	 		style.innerHTML=`	      h1{
		       color: red;
	        }
	     div{
		       background-color: blue;
               min-height: 100px;
	        }
	   div p{
              padding-left: 30px;
              padding-top: 10px;
		      font-size: 20px;
		      color: yellow;
	        }`;
	document.head.appendChild(style);
		}
}