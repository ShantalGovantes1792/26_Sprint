$(document).ready(function(){
	console.log("hola");
	$("#wid").mouseover(function(){
		$(this).css("background-color", "yellow");
	});
	$("#wid").mouseout(function(){
		$(this).css("background-color", "#27102D");
    });
});