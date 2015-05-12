$(document).ready(function(){

	console.log("Hi there buddy");
	
	//click events on sections
	$('#bikesText, #wheelsText, #cleatsText, #helmetsText, #extrasText').click( function() {
		$(this).addClass('animated zoomOut');
	});
	$('#bikesText').click( function() {
		$('.bike').addClass('animated zoomIn visible');
	});
	$('#wheelsText').click( function() {
		$('.wheel').addClass('animated zoomIn visible');
	});
	$('#cleatsText').click( function() {
		$('.cleat').addClass('animated zoomIn visible');
	});
	$('#helmetsText').click( function() {
		$('.helmet').addClass('animated zoomIn visible');
	});
	$('#extrasText').click( function() {
		$('.extra').addClass('animated zoomIn visible');
	});

	//description in and out
	$('#names').mouseover( function() {
		$('#description').addClass('visible animated lightSpeedIn');
	});
	//$('#names').mouseout( function() {
	//	$('#description').addClass('hidden animated lightSpeedOut');
	//});

	//draggable
	$(function() {
    	$( "img" ).draggable();
  	});
	console.log("draggable working");
 	
 	//jGravity
 	$('#address').click( function() {
        $('.wheel').jGravity()
    });

});