window.addEventListener('load', start);

var globalNames = ['Sérgio', 'Cleano', 'Paulo', 'Luender'];
var inputName = null;

function start() {
  inputName = document.querySelector('#inputName');

  preventFormSubmit();
  activateInput();
}

function preventFormSubmit() {
  function handleFormSubmit(event) {
    event.preventDefault();
  }
  var form = document.querySelector('form');
  form.addEventListener('submit', handleFormSubmit);
}

function activateInput() {
  function handleTyping() {}
  inputName.focus();
  inputName.addEventListener('keyup', handleTyping);
}
