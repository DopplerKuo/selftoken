$(function() {
  $(window)
    .bind('resize', function() {
      $('svg').each(function() {
        $(this).width($('header .content').width());
        $(this).height($('header').height());
      });
    })
    .resize();

  $(window)
    .bind('scroll resize', function() {
      var $this = $(this);
      var $this_Top = $this.scrollTop();
      var windowHeight = $this.height();
      var pageHeigh =
        $('header').height() +
        $('.sec2').height() +
        $('.sec3').height() +
        $('.sec4').height() +
        $('.sec5').height() +
        $('.sec6').height() +
        $('.sec7').height();

      function moveSomething(something) {
        var height = $(something).height();
        var moveSomethingRange =
          (height - windowHeight) * ($this_Top / (pageHeigh - windowHeight));
        var screenHeight = $('header').height();
        $(something).css(
          'transform',
          'translateY(-' + moveSomethingRange + 'px)'
        );

        if (something === '.color-bg') {
          var scrollPercent = moveSomethingRange;
          if (scrollPercent >= 0) {
            $('.bg-img-box:nth-of-type(1) img').css('opacity', '0.9');
            $('.bg-img-box:nth-of-type(1) img').css(
              'transform',
              'translate3d(0, 0, 0)'
            );
            $('header').addClass('ani');
          }
          if (scrollPercent >= 0) {
            $('.bg-img-box:nth-of-type(2) img').css('opacity', '0.8');
          }
          if (scrollPercent >= 0.08 * height - screenHeight / 2) {
            $('.bg-img-box:nth-of-type(3) img').css('opacity', '1');
          }
          if (scrollPercent >= 0.15 * height - screenHeight / 2) {
            $('.bg-img-box:nth-of-type(4) img').css('opacity', '1');
            $('.bg-img-box:nth-of-type(4) img').css(
              'transform',
              'translate3d(0, 0, 0)'
            );
          }
          if (scrollPercent >= 0.16 * height - screenHeight / 2) {
            $('.bg-img-box:nth-of-type(5) img').css('opacity', '0.6');
            $('.bg-img-box:nth-of-type(5) img').css(
              'transform',
              'translate3d(0, 0, 0)'
            );
          }
          if (scrollPercent >= 0.26 * height - screenHeight / 2) {
            $('.bg-img-box:nth-of-type(6) img').css('opacity', '1');
          }
          if (scrollPercent >= 0.34 * height - screenHeight / 2) {
            $('.bg-img-box:nth-of-type(7) img').css('opacity', '1');
          }
          if (scrollPercent >= 0.42 * height - screenHeight / 2) {
            $('.bg-img-box:nth-of-type(8) img').css('opacity', '1');
            $('.bg-img-box:nth-of-type(8) img').css(
              'transform',
              'translate3d(0, 0, 0)'
            );
          }
          if (scrollPercent >= 0.46 * height - screenHeight / 2) {
            $('.bg-img-box:nth-of-type(9) img').css('opacity', '0.4');
            $('.bg-img-box:nth-of-type(9) img').css(
              'transform',
              'translate3d(0, 0, 0)'
            );
          }
          if (scrollPercent >= 0.55 * height - screenHeight / 2) {
            $('.bg-img-box:nth-of-type(10) img').css('opacity', '1');
            $('.bg-img-box:nth-of-type(10) img').css(
              'transform',
              'translate3d(0, 0, 0)'
            );
          }
          if (scrollPercent >= 0.65 * height - screenHeight / 2) {
            $('.bg-img-box:nth-of-type(11) img').css('opacity', '1');
            $('.bg-img-box:nth-of-type(11) img').css(
              'transform',
              'translate3d(0, 0, 0)'
            );
          }
          if (scrollPercent >= 0.77 * height - screenHeight / 2) {
            $('.bg-img-box:nth-of-type(12) img').css('opacity', '1');
            $('.bg-img-box:nth-of-type(12) img').css(
              'transform',
              'translate3d(0, 0, 0)'
            );
          }
          if (scrollPercent >= 0.8 * height - screenHeight / 2) {
            $('.bg-img-box:nth-of-type(13) img').css('opacity', '1');
            $('.bg-img-box:nth-of-type(13) img').css(
              'transform',
              'translate3d(0, 0, 0)'
            );
          }
          if (scrollPercent >= 0.8 * height - screenHeight / 2) {
            $('.bg-img-box:nth-of-type(14) img').css('opacity', '1');
            $('.bg-img-box:nth-of-type(14) img').css(
              'transform',
              'translate3d(0, 0, 0)'
            );
          }
        }

        if ($this_Top >= $('.sec6').offset().top) {
          $('#nav .right a').removeClass('active');
          $('#nav .right a:nth-of-type(6)').addClass('active');
        } else if ($this_Top >= $('.sec5').offset().top) {
          $('#nav .right a').removeClass('active');
          $('#nav .right a:nth-of-type(5)').addClass('active');
        } else if ($this_Top >= $('.sec4').offset().top) {
          $('#nav .right a').removeClass('active');
          $('#nav .right a:nth-of-type(4)').addClass('active');
        } else if ($this_Top >= $('.sec3').offset().top) {
          $('#nav .right a').removeClass('active');
          $('#nav .right a:nth-of-type(3)').addClass('active');
        } else if ($this_Top >= $('.sec2').offset().top) {
          $('#nav .right a').removeClass('active');
          $('#nav .right a:nth-of-type(2)').addClass('active');
        } else if ($this_Top >= $('header').offset().top) {
          $('#nav .right a').removeClass('active');
          $('#nav .right a:nth-of-type(1)').addClass('active');
        }

        if ($this_Top >= $('.sec4').offset().top - $('header').height() / 3) {
          $('.road').removeClass('active');
        } else if (
          $this_Top >=
          $('.a-line.m').offset().top - $('header').height()
        ) {
          $('.a-line.m').removeClass('active');
          $('.a-line.l').removeClass('active');
        } else if (
          $this_Top >=
          $('.a-line.k').offset().top - $('header').height()
        ) {
          $('.a-line.k').removeClass('active');
        }
      }

      moveSomething('.color-bg');
      moveSomething('.dot');
      moveSomething('.line');
    })
    .scroll();

  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top
      },
      500
    );
  });
});
