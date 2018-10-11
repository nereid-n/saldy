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
});

if (document.querySelector('.index-banner-section')) {
  var height = document.querySelector('.menu__catalog').offsetHeight;
  document.querySelector('.index-banner-section').style.height = height + 'px';
  if (document.documentElement.clientWidth <= 992) {
    document.querySelector('.index-banner-section').style.marginTop = height + 'px';
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
//# sourceMappingURL=script.js.map
