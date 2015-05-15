$(document).ready(function(){

	console.log("Hi there buddy");
	
	//click events on sections
	// $('#bikesText, #wheelsText, #cleatsText, #helmetsText, #extrasText').click( function() {
	// 	$(this).addClass('animated zoomOut');
	// });
	// $('.text').click( function() {
	// 	$('body').jGravity();
	// });

	$('.text').click( function() {
          $('body').jGravity({
               target: 'everything',
               ignoreClass: 'what',
               drag: true
          });
     });

	$('#what').click( function() {
		$('#description').addClass('visible animated lightSpeedIn');
	});
});