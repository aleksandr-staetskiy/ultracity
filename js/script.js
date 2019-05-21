
// burger menu toggler

$(document).ready(function () {

    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    
  });


//   button to top
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function () {

        $('body,html').animate({ scrollTop: 0 }, 800);

    });

});


// carousel setup 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        // autoplay: true,
        // autoplayTimeout:7000,
        items: 3,
        margin: 10,
        navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
        nav: true,
        responsive:{
            300:{
                items:1,
            },
            450:{
                items:1,
            },
            700:{
                items:2,
            },
            1000:{
                items:4,
            }
            
        }
    });
  });

//   smooth scroll 

$('a[href*="#"]').on('click', function(e) {
    e.preventDefault()
  
    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    )
  })

//   flat-chooser

$(document).ready(function(){
	$('.tabs .tab-link').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('.tabs .tab-link').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
})




