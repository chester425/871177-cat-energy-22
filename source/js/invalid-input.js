var formInput = document.querySelectorAll('input[required]');
var formLabel = document.querySelectorAll('.program-form__invalid-svg');
var formLabelInput = document.querySelectorAll('.program-form__invalid-svg > input');
var formBtn = document.querySelector('.program-form__button');

formBtn.addEventListener('click', function() {
  for (var i = 0; i < formInput.length; i++) {
    if (!formInput[i].value) {
      formInput[i].style.boxShadow = "0 0 0 2px #ff8282";

    }else {
      formInput[i].style.boxShadow = "";
    }
  }
});

formBtn.addEventListener('click', function() {
  for (var i = 0; i < formLabelInput.length; i++) {
    if (!formLabelInput[i].value) {
      formLabel[i].classList.add('input-error');
    }else {
      formLabel[i].classList.remove('input-error');
    }
  }
});
