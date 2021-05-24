const formInput = document.querySelectorAll("input[required]");
const formLabel = document.querySelectorAll(".program-form__invalid-svg");
const formLabelInput = document.querySelectorAll(".program-form__invalid-svg > input");
const formBtn = document.querySelector(".program-form__button");

const setListener = (element, type, handler) => {
  if(!element) {
    return;
  }
  element.addEventListener(type, handler);
  return ()=>{
    element.removeEventListner(type, handler);
  }
}

setListener(formBtn, "click", () => {

  for (var i = 0; i < formInput.length; i++) {
    if (!formInput[i].value) {
      formInput[i].style.boxShadow = "0 0 0 2px #ff8282";

    }else {
      formInput[i].style.boxShadow = "";
    }
  }
});

setListener(formBtn, "click", () => {
  for (var i = 0; i < formLabelInput.length; i++) {
    if (!formLabelInput[i].value) {
      formLabel[i].classList.add("input-error");
    }else {
      formLabel[i].classList.remove("input-error");
    }
  }
});
