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
/*
	var isoOptions = {
	  masonry: {
	    columnWidth: 50
	  }
	};
	var $container = $('.isotope').isotope( isoOptions );
	// init
	$container.isotope({
	  // options
	  itemSelector: '.item',
	  layoutMode: 'fitRows',
	});
	
	$('#filters').on( 'click', 'li', function() {
	  var filterValue = $(this).attr('data-filter');
	  $container.isotope({ filter: filterValue });
	});
	console.log("end filters");

	$('#shuffle').on( 'click', function() {
	    $container.isotope('shuffle');
	  });

	//toggleClass to show menu with animation
	function menuOpening(){
		$(".menu").animate({
			""
		}, 100);
	});
	$( ".logo" ).mouseover(function() {
	  $( ".hiddenMenu" ).toggleClass( "visibleMenu" );
	});
	$( ".logo .hiddenMenu" ).mouseout(function() {
	  $( ".visibleMenu" ).toggleClass( "hiddenMenu" );
	});
	$(".logo").mouseover(function() {
	  if ( $( ".menu" ).is( ":hidden" ) ) {
	    $( ".menu" ).show( "slow" );
	  } else {
	    $( ".menu" ).slideUp();
	  }
	});*/
});