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
    vertical:true,
    verticalSwiping: true
  });
  $('.slick-detail-main').on('init', function() {
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
