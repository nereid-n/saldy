if (document.querySelector('.detail-popup-btn-js')) {
  let btns = document.querySelectorAll('.detail-popup-btn-js');
  let overlay = document.querySelector('.popup-overlay');
  for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function(e) {
      e.preventDefault();
      let href = this.getAttribute('href');
      let popup = document.querySelector(href);
      if (popup.classList.contains('detail-popup-active')) {
        popup.classList.remove('detail-popup-active');
        overlay.classList.remove('popup-overlay-active');
      }
      else {
        popup.classList.add('detail-popup-active');
        overlay.classList.add('popup-overlay-active');
      }
    }
  }
  overlay.onclick = function () {
    document.querySelector('.detail-popup-active').classList.remove('detail-popup-active');
    overlay.classList.remove('popup-overlay-active');
  }
}
