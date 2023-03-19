$(function () {

  $('.hamburger, .menu-list a').on('click', function () {
    $('.hamburger, .btn-line, .sp-nav-menu').toggleClass('open');
  });

  const header_inner = $('.header-inner');
  $('a[href^="#"]').on('click', function () {
    var gap = header_inner.outerHeight();
    var speed = 400;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - gap;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });

  $(window).on('scroll', function () {
    $('.fadein').each(function () {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > elemPos - windowHeight + 200) {
        $(this).addClass('scrollin');
      }
    });
  });

  /* ヘッダースクロール変化 */
  var _window = $(window),
    _header = $('.header-inner'),
    heroBottom;
  _window.on('scroll', function () {
    heroBottom = $('.header').height();
    if (_window.scrollTop() > heroBottom) {
      _header.addClass('transform');
    }
    else {
      _header.removeClass('transform');
    }
  });

  _window.trigger('scroll');
  /* ここまでヘッダースクロール変化 */


});

var swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1.125,
  spaceBetween: 16,
  centeredSlides: true,
  mousewheel: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 2.5,
    },
  },
});

$(document).ready(function () {

  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeZVmvY7kLaQkTnv8RgeOtdTO0GpeQW7pQMt9jPql1JUwcsfQ/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown();
          $(".contact-btn").fadeOut();
        },
        200: function () {
          $(".false-message").slideDown();
        }
      }
    });
    event.preventDefault();
  });

});