"use strict";

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

  langDropdown();
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
  $('.slider__icon').on('click', function () {
    $('html, body').animate({
      scrollTop: $("#div1").offset().top
    }, 1000);
  });

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

  menu();
});