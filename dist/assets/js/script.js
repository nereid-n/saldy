'use strict';

$(document).ready(function () {

  // Elements to inject
  if ($('.inject-me').length > 0) {
    var mySVGsToInject = document.querySelectorAll('img.inject-me');

    // Options
    var injectorOptions = {
      evalScripts: 'once',
      pngFallback: 'assets/png',
      each: function each(svg) {}
    };

    SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
      // Callback after all SVGs are injected
      if ($(window).width() > 959) {
        var topSideHeight = $('.headerCover').outerHeight(true);
        $('#main section').first().css({ "padding-top": topSideHeight });
      }
    });
  }

  if ($('.select').length > 0) {
    $('.select').each(function () {
      var $this = $(this);
      $this.select2({
        dropdownParent: $this.parents('.wrap-select'),
        placeholder: function placeholder() {
          $(this).data('placeholder');
        }
      }).on("select2:open", function () {
        $(".select2-results ul.select2-results__options").unbind("mousewheel");
        $('.select2-results').mCustomScrollbar({
          axis: "y",
          scrollEasing: "linear",
          scrollInertia: 150
        });
      });
    });
  }

  if ($('.menu__btn-catalog-js').length > 0) {
    $('.menu__btn-catalog-js').on('click', function () {
      $('.menu__catalog').slideToggle();
    });
    $(document).on('click', function (e) {
      var elem = $('.menu__catalog-wrap');
      if (!elem.is(e.target) && elem.has(e.target).length === 0) {
        $('.menu__catalog').slideUp();
      }
    });
  }

  if ($('.dotdotdot').length > 0) {
    $('.dotdotdot').dotdotdot();
  }

  $('.grid').masonry({
    itemSelector: '.grid-item',
    gutter: 30,
    fitWidth: true
  });
});

if (document.querySelector('.tab-item-js')) {
  tabs();
}

if ($('.catalog-menu__item-js').length > 0) {
  $('.catalog-menu__item-js').on('click', function () {
    $('.catalog-menu__submenu').not($('.catalog-menu__submenu', this)).slideUp();
    $('.catalog-menu__submenu', this).slideToggle();
  });
}

if ($('.slick-review').length > 0) {
  $('.slick-review').slick({
    nextArrow: '<button type="button" class="slick-review__btn slick-review__btn-next"><i class="fa fa-angle-right"></i></button>',
    prevArrow: '<button type="button" class="slick-review__btn slick-review__btn-prev"><i class="fa fa-angle-left"></i></button>'
  });
}

if ($('.slick-detail').length > 0) {
  $('.slick-detail').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.slick-detail-main',
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    verticalSwiping: true
  });
  $('.slick-detail-main').on('init', function () {
    if ($('.zoom').length > 0) {
      $('.zoom').imagezoomsl({
        innerzoommagnifier: true
      });
    }
  }).slick({
    slidesToShow: 1,
    asNavFor: '.slick-detail',
    arrows: false,
    fade: true,
    draggable: false
  });
}

if (document.querySelector('.detail-popup-btn-js')) {
  (function () {
    var btns = document.querySelectorAll('.detail-popup-btn-js');
    var overlay = document.querySelector('.popup-overlay');
    for (var i = 0; i < btns.length; i++) {
      btns[i].onclick = function (e) {
        e.preventDefault();
        var href = this.getAttribute('href');
        var popup = document.querySelector(href);
        if (popup.classList.contains('detail-popup-active')) {
          popup.classList.remove('detail-popup-active');
          overlay.classList.remove('popup-overlay-active');
        } else {
          popup.classList.add('detail-popup-active');
          overlay.classList.add('popup-overlay-active');
        }
      };
    }
    overlay.onclick = function () {
      document.querySelector('.detail-popup-active').classList.remove('detail-popup-active');
      overlay.classList.remove('popup-overlay-active');
    };
  })();
}

var btnCount = document.querySelectorAll('.js-btn-count');

for (var i = 0; i < btnCount.length; i++) {
  btnCount[i].onclick = function (e) {
    var parent = e.target.closest('.input-count-wrap');
    var input = parent.querySelector('.input-count');
    var value = parseInt(input.value);
    if (e.target.classList.contains('js-btn-count-minus')) {
      input.value = value - 1;
    } else if (e.target.classList.contains('js-btn-count-plus')) {
      input.value = value + 1;
    }
  };
}

if (document.querySelector('.index-banner-section')) {
  var height = document.querySelector('.menu__catalog').offsetHeight;
  document.querySelector('.index-banner-section').style.height = height + 'px';
  if (document.documentElement.clientWidth <= 992) {
    document.querySelector('.index-banner-section').style.marginTop = height + 'px';
    document.querySelector('.index-banner-section').style.height = 'unset';
  }
  window.onresize = function () {
    if (document.documentElement.clientWidth <= 992) {
      document.querySelector('.index-banner-section').style.marginTop = height + 'px';
      document.querySelector('.index-banner-section').style.height = 'unset';
    } else {
      document.querySelector('.index-banner-section').style.marginTop = 0;
      document.querySelector('.index-banner-section').style.height = height + 'px';
    }
  };
}

if ($('.index-banner').length > 0) {
  $('.index-banner').slick({
    nextArrow: '<button type="button" class="index-banner__btn index-banner__btn-next"><i class="fa fa-angle-right"></i></button>',
    prevArrow: '<button type="button" class="index-banner__btn index-banner__btn-prev"><i class="fa fa-angle-left"></i></button>'
  });
}

if ($('.main-slick-brand').length > 0) {
  $('.main-slick-brand').slick({
    variableWidth: true,
    nextArrow: '<button type="button" class="main-slick__btn main-slick__btn-next"><i class="fa fa-angle-right"></i></button>',
    prevArrow: '<button type="button" class="main-slick__btn main-slick__btn-prev"><i class="fa fa-angle-left"></i></button>'
  });
}

if ($('.main-slick-js-5').length > 0) {
  $('.main-slick-js-5').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: '<button type="button" class="main-slick__btn main-slick__btn-next"><i class="fa fa-angle-right"></i></button>',
    prevArrow: '<button type="button" class="main-slick__btn main-slick__btn-prev"><i class="fa fa-angle-left"></i></button>',
    responsive: [{
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    }, {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
}

if ($('.main-slick-js').length > 0) {
  $('.main-slick-js').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: '<button type="button" class="main-slick__btn main-slick__btn-next"><i class="fa fa-angle-right"></i></button>',
    prevArrow: '<button type="button" class="main-slick__btn main-slick__btn-prev"><i class="fa fa-angle-left"></i></button>',
    responsive: [{
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }, {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });
}
//# sourceMappingURL=script.js.map
