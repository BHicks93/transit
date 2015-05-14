$(document).ready(function(){

	console.log("Hi there buddy");
	
	//click events on sections
	$('#bikesText, #wheelsText, #cleatsText, #helmetsText, #extrasText').click( function() {
		$(this).addClass('animated zoomOut');
	});
	$('.Text').click( function() {
		$('body').jGravity();
	});

	$('.Text').live('click', function() {
          $('body').jGravity({
               target: 'everything',
               ignoreClass: 'what',
               drag: true
          });
     });

	//draggable
	$(function() {
    	$( "div" ).draggable();
  	});
	console.log("draggable working");

	$('#what').click( function() {
		$('#description').addClass('visible animated lightSpeedIn');
	});
});