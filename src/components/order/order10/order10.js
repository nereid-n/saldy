if (document.querySelector('.input-file-main')) {
  let inputs = document.querySelectorAll('.input-file-wrap input[type=file]');
  for (let i = 0; i < inputs.length; i++) {
    let parent = inputs[i].closest('.input-file-main');
    let text = parent.querySelector('.input-file-text');
    inputs[i].onchange = function() {
      if(this.value !== '') {
        text.innerHTML = 'Успешно добавлено';
      }
      setTimeout(function() {
        text.innerHTML = '';
      }, 3000);
    }
  }
}
