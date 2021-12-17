$(document).ready(function(){
    $('.banner-chat-slider').slick({
        arrows : false,
        slidesToShow : 4 ,
        slidesToScroll : 1,
        vertical : true ,
        autoplay : true ,
    });

    $('.portfolio-item').venobox();

    $('.counter').counterUp();

    $('.testimonial-slider').slick({
        arrows : false,
        slidesToShow : 1 ,
        slidesToScroll : 1,
        autoplay : true ,
        responsive : [
            {
                breakpoint: 576,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false,
                  arrows : false,
                }
              },
        ]
    });

    var nav =$('nav');

    $(window).on('scroll',function(){
        var scrolling = $(this).scrollTop();

        if (scrolling > 100){
            nav.addClass('navfix');
        }
        else{
            nav.removeClass('navfix');
        }

    });
  });