// JavaScript Document
$().ready(function(){
	$("#d1").click(function(){
		$("#kq").css({"color": "blue"});
		$("#kq").text("Bạn chọn màu Xanh: rgb(0,0,255)");
	})
	$("#d2").click(function(){
		$("#kq").css({"color": "red"});
		$("#kq").text("Bạn chọn màu Đỏ: rgb(255,0,0)");
	})
	$("#d3").click(function(){
		$("#kq").css({"color": "purple"});
		$("#kq").text("Bạn chọn màu Hồng: rgb(255,0,255)");
	})
	$("#d4").click(function(){
		$("#kq").css({"color": "green"});
		$("#kq").text("Bạn chọn màu Xanh lá: rgb(0,255,0)");
	})
})