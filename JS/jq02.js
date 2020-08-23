// JavaScript Document
$().ready(function(){
	$("#click").click(function(){
	var first= new Date($("#first").val());
	var last= new Date($("#last").val());
	var day=(last-first) / (1000 * 60 * 60 * 24);
	$("p").text("Số ngày là: " + day);
	})
})