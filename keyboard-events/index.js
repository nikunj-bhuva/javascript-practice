// Keyboard Events //

let input = document.querySelector("input");

let keyPress = document.querySelector(".keyPress");

let keyCode = document.querySelector(".keyCode");

let charCodeAt = document.querySelector(".charCodeAt");

let eventType = document.querySelector(".eventType");

const handlerInput = (e) => {
  keyPress.textContent = `key Pressed: ${e.key}`;
  keyCode.textContent = `key Code: ${e.code}`;
  charCodeAt.textContent = `key charCodeAt: ${e.key.charCodeAt(0)}`;
  eventType.textContent = `event Type: ${e.type}`;
};

input.addEventListener("keydown", handlerInput);
