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

	function moveSomething(something) {
		var height = $(something).height();
		var moveSomethingRange = (height - windowHeight) * ($this_Top / ( pageHeigh - windowHeight ));
		$(something).css('transform', 'translateY(-'+ moveSomethingRange +'px)');
	}

	moveSomething('.color-bg');
	moveSomething('.dot');
	moveSomething('.line');

	
	}).scroll();


	$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
	});

})
