$(function() {
$(window).bind('scroll resize', function() {
	var $this = $(this);
	var $this_Top = $this.scrollTop();
	var windowHeight = $this.height();
	var pageHeigh = $('header').height() + 
									$('.sec2').height() +
									$('.sec3').height() +
									$('.sec4').height() +
									$('.sec5').height() +
									$('.sec6').height();


	var colorfulHeigh = $('.color-bg').height();
	var moveColorful = (colorfulHeigh - windowHeight) * ($this_Top / ( pageHeigh - windowHeight ));
	console.log(moveColorful)
	$('.color-bg').css('transform', 'translateY(-'+ moveColorful +'px)');
	
	}).scroll();
})
