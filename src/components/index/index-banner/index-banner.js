if (document.querySelector('.index-banner-section')) {
  let height = document.querySelector('.menu__catalog').offsetHeight;
  document.querySelector('.index-banner-section').style.height = height + 'px';
  if (document.documentElement.clientWidth <= 992) {
    document.querySelector('.index-banner-section').style.marginTop = height + 'px';
  }
  window.onresize = function() {
    if (document.documentElement.clientWidth <= 992) {
      document.querySelector('.index-banner-section').style.marginTop = height + 'px';
      document.querySelector('.index-banner-section').style.height = 'unset';
    }
    else {
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
