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
    $('.select').select2({
      dropdownParent: $('.wrap-select')
    }).on("select2:open", function () {
      $(".select2-results ul.select2-results__options").unbind("mousewheel");
      $('.select2-results').mCustomScrollbar({
        axis: "y",
        scrollEasing: "linear",
        scrollInertia: 150
      });
    });
  }

  if ($('.menu__btn-catalog-js').length > 0) {
    $('.menu__btn-catalog-js').on('click', function () {
      $('.menu__catalog').slideToggle();
    });
  }

  if ($('.dotdotdot').length > 0) {
    $('.dotdotdot').dotdotdot();
  }
});

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
