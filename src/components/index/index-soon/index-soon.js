if ($('.main-slick-js').length > 0) {
  $('.main-slick-js').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: '<button type="button" class="main-slick__btn main-slick__btn-next"><i class="fa fa-angle-right"></i></button>',
    prevArrow: '<button type="button" class="main-slick__btn main-slick__btn-prev"><i class="fa fa-angle-left"></i></button>',
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}
