if ($('.catalog-menu__item-js').length > 0) {
  $('.catalog-menu__item-js').on('click', function() {
    $('.catalog-menu__submenu').not($('.catalog-menu__submenu', this)).slideUp();
    $('.catalog-menu__submenu', this).slideToggle();
  });
}
