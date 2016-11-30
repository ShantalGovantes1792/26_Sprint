$(document).ready(function(){
	console.log("hola");
	$("#wid").mouseover(function(){
		$(this).css("background-color", "yellow");
	});
	$("#wid").mouseout(function(){
		$(this).css("background-color", "#27102D");
    });

	// IMAGENES
	$(".img-click-expand").mouseover(function(){
		console.log("hola");
		 $(this).slideUp(2000).slideDown(2000);
	});

	$("#img-anima").click(function(){
        $("#img-2").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
         });

        $("#img-2").animate({
            opacity: '1',
            height: '100%',
            width: '100%'
        });   
              

     });

    $("#chica-1").click(function(){
        $("#chica-1-animate").animate({
            height: 'toggle'
        });
    });


});


