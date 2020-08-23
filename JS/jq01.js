// JavaScript Document
$().ready(function(){
	$("#add").click(function(){
		var text= $("#subject").val();
	$("#subjectin").append('<li>'+text+'</li>');
	$("#subject").val("");
})
})
