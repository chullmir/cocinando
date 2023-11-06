(function ($, root, undefined) {

  $(function () {

    'use strict';

    conditionizr.config({
      tests: {
        'retina': ['class'],
        'touch': ['class']
      }
    });

    check_scroll();

    function check_scroll() {
      if ($(window).scrollTop() > 50) {
        $('html').addClass('scrolled');
      } else {
        $('html').removeClass('scrolled');
      }
    }

    $(window).scroll(function () {
      check_scroll();
    });

    $(window).resize(function () {

    });

    $(window).on('load', function () {

      check_scroll();

      $('html').addClass('loaded');

    });

    $(".open-close").click(function () {

      $("body").toggleClass("active");

    });
/*
    $('.logo-list .gallery').slick({
      dots: false,
      infinite: false,
      arrows: false,
      speed: 600,
      slidesToShow: 5,
      slidesToScroll: 5,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5
          }
        }
      ]
    });
*/
    $('.image-x3 .gallery').slick({
      dots: false,
      infinite: false,
      arrows: false,
      prevArrow: '<span class="slick-prev">&nbsp;</span>',
      nextArrow: '<span class="slick-next">&nbsp;</span>',
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        }
      }]
    });

    $('.book-list .gallery').slick({
      dots: false,
      infinite: false,
      arrows: false,
      speed: 600,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [{
          breakpoint: 1400,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    });

    $('.full-gallery .gallery').slick({
      arrows: false,
      dots: false,
      infinite: true,
      speed: 2000,
      fade: true,
      autoplay: true,
      autoplaySpeed: 7500,
      pauseOnHover: false,
      cssEase: 'ease-in-out'
    });

    $('.title-gallery .gallery').slick({
      arrows: true,
      prevArrow: '<span class="slick-prev">&nbsp;</span>',
      nextArrow: '<span class="slick-next">&nbsp;</span>',
      dots: false,
      infinite: true,
      speed: 2000,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      cssEase: 'ease-in-out'
    });

    $('.moodboard-x3 .gallery .item').slick({
      arrows: false,
      dots: false,
      infinite: true,
      speed: 2000,
      fade: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false,
      cssEase: 'ease-in-out'
    });

    $('.title-slide .gallery').slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 300,
      variableWidth: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    });
/*
    $('.text-gallery .gallery').slick({
      dots: false,
      infinite: true,
      arrows: false,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'ease-in-out'
    });
*/
    $('.arrow-valori').click(function () {
      $(".text-gallery .gallery").slick('slickNext');
    });

    $('.timeline-gallery .year-gallery').slick({
      dots: true,
      infinite: false,
      arrows: true,
      prevArrow: '<span class="slick-prev">&nbsp;</span>',
      nextArrow: '<span class="slick-next">&nbsp;</span>',
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true,
      cssEase: 'ease-in-out',
      asNavFor: '.timeline-gallery .image-gallery',
      responsive: [{
          breakpoint: 767,
          settings: {
			  vertical: false,
			  verticalSwiping: false,
			  adaptiveHeight: true,
			  arrows: false,
          }
        },
      ]
    });

    $('.timeline-gallery .image-gallery').slick({
      dots: false,
      infinite: false,
      arrows: false,
      prevArrow: '<span class="slick-prev">&nbsp;</span>',
      nextArrow: '<span class="slick-next">&nbsp;</span>',
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'ease-in-out',
      asNavFor: '.timeline-gallery .year-gallery',
      responsive: [{
          breakpoint: 767,
          settings: {
			  arrows: true,
          }
        },
      ]

    });

    $('.arrow-timeline').click(function () {
      $(".timeline-gallery .image-gallery").slick('slickNext');
    });
    
    
    $('.title-galleryxxx').slick({
      dots: false,
      infinite: true,
      arrows: true,
      prevArrow: '<span class="slick-prev">&nbsp;</span>',
      nextArrow: '<span class="slick-next">&nbsp;</span>',
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: 'ease-in-out'
    });
    
    
    
    
    


    /* ----------------------------------------------------- TWEEN and TIMELINE */

    $('.zoom').each(function (index, element) {

      var tween_standard = new TimelineMax();
      tween_standard.staggerFrom([element], 1, {
        scale: 1.05,
        opacity: 0,
      }, .5, 0);
      var scene_standard = new ScrollMagic.Scene({
          triggerElement: [element],
          triggerHook: 0.80
        })
        .setTween(tween_standard)
        .addTo(controller);

    });

    $('.fade').each(function (index, element) {

      var tween_standard = new TimelineMax();
      tween_standard.staggerFrom([element], 1, {
        opacity: 0,
      }, .5, 0);
      var scene_standard = new ScrollMagic.Scene({
          triggerElement: [element],
          triggerHook: 0.80
        })
        .setTween(tween_standard)
        .addTo(controller);

    });


  });

})(jQuery, this);