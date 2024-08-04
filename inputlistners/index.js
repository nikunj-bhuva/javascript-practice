let input = document.getElementById("input");
console.log(input);

let inputvalue = document.querySelector(".inputvalue");
console.log(inputvalue);

let inputName = document.querySelector(".inputname");
console.log(inputName);

let inputType = document.querySelector(".inputtype");
console.log(inputType);

let eventtype = document.querySelector(".eventtype");
console.log(eventtype);

let handlerEvent = (evt) => {
  inputvalue.innerText = inputvalue.innerText + evt.data;
  inputName.innerText = inputName.innerText + evt.target.name;
  inputType.innerText = inputType.innerText + evt.inputType;
  eventtype.innerText = eventtype.innerText + evt.type;
};

input.addEventListener("input", handlerEvent);
