// input events //

let input = document.querySelector("input");

let inputValue = document.querySelector(".inputValue");

let inputName = document.querySelector(".inputName");

let inputType = document.querySelector(".inputType");

let eventType = document.querySelector(".eventType");

const handlerInput = (e) => {
  console.log(e);
  inputValue.textContent = `input Value: ${e.target.value}`;
  inputName.textContent = `input Name: ${e.target.name}`;
  inputType.textContent = `input Type: ${e.inputType}`;
  eventType.textContent = `event Type: ${e.type}`;
};

input.addEventListener("input", handlerInput);
