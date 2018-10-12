let btnCount = document.querySelectorAll('.js-btn-count');

for (let i = 0; i < btnCount.length; i++) {
  btnCount[i].onclick = function(e) {
    let parent = e.target.closest('.input-count-wrap');
    let input = parent.querySelector('.input-count');
    let value = parseInt(input.value);
    if (e.target.classList.contains('js-btn-count-minus')) {
      input.value = value - 1;
    }
    else if (e.target.classList.contains('js-btn-count-plus')) {
      input.value = value + 1;
    }
  };
}
