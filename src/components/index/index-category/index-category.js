if ($('.main-slick-js-5').length > 0) {
  $('.main-slick-js-5').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: '<button type="button" class="main-slick__btn main-slick__btn-next"><i class="fa fa-angle-right"></i></button>',
    prevArrow: '<button type="button" class="main-slick__btn main-slick__btn-prev"><i class="fa fa-angle-left"></i></button>',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
}
