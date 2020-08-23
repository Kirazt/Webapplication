
function Static(){
	var str= document.getElementById("arr").value;
	str= str.trim();
	str= str.toLowerCase();
	var SLcharacter= str.split("").length;
	var character= str.split("");
	document.getElementById("character").innerHTML= "Character: " + SLcharacter;
	var word= str.split(" ").length;
	document.getElementById("word").innerHTML= "Words: " + word;
	character.sort(function(a,b){return a.localeCompare(b);});
	var i;
	var j;
	var count=0;
	var strcharac= "";
	for(i=0; i<character.length; i++)
		{
			for(j=0; j<character.length; j++)
				{
					if(character[i]==character[j])
					count++;
				}	
			if(character[i]!=" " && character[i]!=character[i+1]){
				strcharac+= "Character " + "'" + character[i].toUpperCase() + "' :" + count + "<br>";
			}
			count=0;
		}
	document.getElementById("result").innerHTML= strcharac;
}