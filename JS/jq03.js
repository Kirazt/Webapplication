// JavaScript Document
$().ready(function(){
	$("#change").click(function(){
		$("#1").css({
			"background-color": "#FF777A"
		})
		$("#2").css({
			"background-color": "#FF777A"
		})
	})
	$("#default").click(function(){
		$("#1").css({
			"background-color": ""
		})
		$("#2").css({
			"background-color": ""
		})
	})
})