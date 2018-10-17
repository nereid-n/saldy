$(document).ready(function() {

  // Elements to inject
  if ($('.inject-me').length > 0) {
    var mySVGsToInject = document.querySelectorAll('img.inject-me');

    // Options
    var injectorOptions = {
      evalScripts: 'once',
      pngFallback: 'assets/png',
      each: function (svg) {
      }
    };

    SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
      // Callback after all SVGs are injected
      if ($(window).width() > 959) {
        var topSideHeight = $('.headerCover').outerHeight(true);
        $('#main section').first().css({"padding-top": topSideHeight});
      }
    });
  }


  if ($('.select').length > 0) {
    $('.select').each(function() {
      var $this = $(this);
      $this.select2({
        dropdownParent: $this.parents('.wrap-select')
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
    $('.menu__btn-catalog-js').on('click', function() {
      $('.menu__catalog').slideToggle();
    });
    $(document).on('click', function(e) {
      let elem = $('.menu__catalog-wrap');
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
