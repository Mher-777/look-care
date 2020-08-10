"use strict";

var animationScroll = function animationScroll() {
  AOS.init({
    startEvent: 'DOMContentLoaded',
    easing: 'linear',
    duration: 400,
    once: true
  });
};

$(window).on('load', function () {
  setTimeout(function () {
    $('.loader').fadeOut(500, function () {
      $(this).remove();
    });
    $('body').delay(500).css({
      overflow: 'visible'
    });
    setTimeout(function () {
      animationScroll();
    }, 500);
  }, 1000);
});
$(function () {
  var langDropdown = function langDropdown() {
    var lang = $('.language');
    var flag = $('.language__current-flag');
    var dropdown = $('.language__dropdown');
    lang.on('click', function () {
      var $this = $(this);
      dropdown = $this.children('.language__dropdown');
      dropdown.slideToggle(200);
      $this.toggleClass('language--open');

      if (lang.hasClass('language--open')) {
        var item = $('.language__dropdown-item');
        item.on('click', function (event) {
          event.preventDefault();
          var src = $(this).find('img').attr('src');
          flag.attr('src', src);
        });
      }
    });
    $(document).on('click', function (event) {
      if (lang !== event.target && !lang.has(event.target).length) {
        lang.removeClass("language--open");
        dropdown.slideUp(200);
      }
    });
  };

  $(".js-popup").iziModal({
    padding: null,
    radius: 10,
    width: 750,
    headerColor: null,
    bodyOverflow: true,
    timeoutProgressbar: true
  });

  var slider = function slider() {
    $('.js-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      rows: 0,
      arrows: false,
      dots: true,
      dotsClass: 'slider__dots',
      autoplay: true,
      cssEase: 'linear',
      touchThreshold: 30,
      adaptiveHeight: true
    });
  };

  var aboutSlider = function aboutSlider() {
    var slider = $('.about__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      cssEase: 'linear',
      touchThreshold: 30,
      centerMode: true,
      centerPadding: '50px',
      infinite: false,
      initialSlide: 1,
      prevArrow: "<button class=\"about__slider-arrow about__slider-arrow--prev\">\n                            <img src=\"static/images/content/about/arrow-left.svg\" alt=\"\">\n                        </button>",
      nextArrow: "<button class=\"about__slider-arrow about__slider-arrow--next\">\n                            <img src=\"static/images/content/about/arrow-right.svg\" alt=\"\">\n                        </button>",
      responsive: [{
        breakpoint: 973,
        settings: {
          initialSlide: 2
        }
      }, {
        breakpoint: 801,
        settings: {
          initialSlide: 1,
          centerPadding: '0'
        }
      }, {
        breakpoint: 651,
        settings: {
          initialSlide: 0,
          centerMode: false,
          slidesToShow: 1
        }
      }]
    });
  };

  $('[data-fancybox]').fancybox({
    touch: false,
    animationEffect: "zoom-in-out"
  });

  var scrollTop = function scrollTop() {
    $('.slider__icon').on('click', function (e) {
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $("#scroll-elem").offset().top
      }, 1000);
    });
  };

  var menu = function menu() {
    var open = $('.js-open');
    var close = $('.js-close');
    var menu = $('.menu');
    open.on('click', function () {
      $(this).addClass('is-active');
      menu.addClass('menu--open');
      close.addClass('is-active');
    });
    close.on('click', function () {
      $(this).removeClass('is-active');
      menu.removeClass('menu--open');
      open.removeClass('is-active');
    });
  };

  var servicesSlider = function servicesSlider() {
    var slider = $('.services__slider');
    slider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      appendArrows: '.section-head__arrows.services__arrows',
      nextArrow: "<button class=\"slider-arrow slider-arrow--next\"><img src=\"static/images/common/next.svg\" alt=\"\"></button>",
      prevArrow: "<button class=\"slider-arrow slider-arrow--prev\"><img src=\"static/images/common/prev.svg\" alt=\"\"></button>",
      responsive: [{
        breakpoint: 1101,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 773,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
      }, {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
          arrows: false,
          dots: true
        }
      }]
    });
    slider.on('breakpoint', function () {
      sliderSpace();
    });
  };

  var sliderSpace = function sliderSpace() {
    $('[data-space]').each(function () {
      var $this = $(this),
          $space = $this.attr('data-space');
      $this.find($('.slick-slide')).css({
        marginLeft: $space + 'px',
        marginRight: $space + 'px'
      });
      $this.find($('.slick-list')).css({
        marginLeft: -$space + 'px',
        marginRight: -$space / 2 + 'px'
      });
    });
  };

  var reviewsSlider = function reviewsSlider() {
    var slider = $('.reviews__slider');
    slider.slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      touchThreshold: 30,
      appendArrows: '.section-head__arrows.reviews__arrows',
      nextArrow: "<button class=\"slider-arrow slider-arrow--next\"><img src=\"static/images/common/next.svg\" alt=\"\"></button>",
      prevArrow: "<button class=\"slider-arrow slider-arrow--prev\"><img src=\"static/images/common/prev.svg\" alt=\"\"></button>",
      responsive: [{
        breakpoint: 941,
        settings: {
          slidesToShow: 2
        }
      }, {
        breakpoint: 773,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      }, {
        breakpoint: 661,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true,
          dotsClass: 'slick-dots reviews__slider-dots'
        }
      }]
    });
    slider.on('breakpoint', function () {
      sliderSpace();
      review();
    });
  };

  var review = function review() {
    $(".js-stars").rateYo({
      starWidth: "20px",
      normalFill: "#C2C2C2",
      ratedFill: "#FFC107",
      spacing: "5px",
      starSvg: "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n                    <g clip-path=\"url(#clip0)\">\n                        <path d=\"M0.530924 7.15378L6.67926 6.21462L9.43509 0.344619C9.64092 -0.0937142 10.3601 -0.0937142 10.5659 0.344619L13.3209 6.21462L19.4693 7.15378C19.9743 7.23128 20.1759 7.84545 19.8218 8.20795L15.3551 12.7863L16.4109 19.2588C16.4951 19.773 15.9459 20.1588 15.4918 19.9063L10.0001 16.8713L4.50842 19.9071C4.05842 20.1571 3.50426 19.7788 3.58926 19.2596L4.64509 12.7871L0.178427 8.20879C-0.175741 7.84545 0.0267584 7.23128 0.530924 7.15378Z\"/>\n                    </g>\n                    <defs>\n                        <clipPath id=\"clip0\">\n                            <rect width=\"20\" height=\"20\" transform=\"matrix(-1 0 0 1 20 0)\"/>\n                        </clipPath>\n                    </defs>\n                  </svg>\n                "
    });
  };

  var readMore = function readMore() {
    var link = $('.reviews__slider');
    var lessLink = link.attr('data-lessLink');
    var moreLink = link.attr('data-moreLink');
    var width = $(window).width() >= 450 ? 124 : 109;
    $('.reviews__item-text').readmore({
      speed: 1000,
      lessLink: '<a class="reviews__item-more" href="#">' + lessLink + '</a>',
      moreLink: '<a class="reviews__item-more" href="#">' + moreLink + '</a>',
      collapsedHeight: +width,
      heightMargin: 13.6
    });
  };

  var headerSticky = function headerSticky() {
    new Headhesive('.header', {
      offset: 150,
      throttle: 250
    });
  };

  var teamSlider = function teamSlider() {
    var slider = $('.team__slider');
    slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      touchThreshold: 30,
      appendArrows: '.section-head__arrows.team__arrows',
      nextArrow: "<button class=\"slider-arrow slider-arrow--next\"><img src=\"static/images/common/next.svg\" alt=\"\"></button>",
      prevArrow: "<button class=\"slider-arrow slider-arrow--prev\"><img src=\"static/images/common/prev.svg\" alt=\"\"></button>",
      responsive: [{
        breakpoint: 1071,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 773,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: true
        }
      }, {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          adaptiveHeight: true
        }
      }]
    });
    slider.on('breakpoint', function () {
      sliderSpace();
    });
  };

  var mask = function mask() {
    $("[data-inputmask]").inputmask();
  };

  var animationScroll = function animationScroll() {};

  teamSlider();
  slider();
  servicesSlider();
  scrollTop();
  reviewsSlider();
  sliderSpace();
  review();
  readMore();
  headerSticky();
  langDropdown();
  menu();
  mask();
  aboutSlider();
});