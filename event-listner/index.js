// let btn3 = document.querySelector(".btn3");
// console.log(btn3);

// DOM event handler //

// btn2.onmouseover = function () {
//   console.log("btn two is clicked");
//   alert("button clicked successfully");
// };

// add event listner //

// btn3.addEventListener("dblclick", function () {
//   console.log("this is add event listner");
//   alert("last button is clicked!");
// });

// let box = document.querySelector(".box");
// let btn = document.querySelector("#btn");
// console.log(box);
// console.log(btn);

// btn.addEventListener("click", () => {
//   box.style.backgroundColor = "#f5ee62";
// });

// btn.addEventListener("dblclick", () => {
//   box.classList.add("radius");
// });

// btn.addEventListener("mouseover", () => {
//   console.log("on mouse over");
//   box.classList.add("add-class");
// });

// btn.addEventListener("mouseleave", () => {
//   console.log("on mouse leave");
//   box.classList.add("left");
// });

// let input = document.querySelector("input");
// console.log(input);

// let keyPress = document.querySelector(".keypress");
// console.log(keyPress);

// let keyCode = document.querySelector(".keycode");
// console.log(keyCode);

// let charcode = document.querySelector(".charcode");
// console.log(charcode);

// let eventType = document.querySelector(".eventtype");
// console.log(eventType);

// let handlerEvent = (event) => {
//   keyPress.innerText = keyPress.innerText + " " + event.key;
//   keyCode.innerText = keyCode.innerText + " " + event.code;
//   charcode.innerText = charcode.innerText + " " + event.key.charCodeAt(0);
//   eventType.innerText = eventType.innerText + " " + event.type;
//   console.log(event);
// };

// input.addEventListener("keyup", handlerEvent);

let myBtn = document.getElementById("myBtn");

let box = document.querySelector(".box");

const handlerBtn = () => {
  box.style.backgroundColor = " rgb(241, 216, 74)";
};

const handlerBtn1 = () => {
  box.classList.add("addTransition");
};

const handlerBtn2 = () => {
  box.classList.add("addTransition1");
};

const handlerBtn3 = () => {
  box.classList.add("addTransition2");
};

const handlerBtn4 = () => {
  box.classList.add("addTransition3");
};

// event types //

// myBtn.addEventListener("click", handlerBtn);
myBtn.addEventListener("dblclick", handlerBtn1);
box.addEventListener("mouseenter", handlerBtn2);
box.addEventListener("mouseout", handlerBtn3);
box.addEventListener("mouseup", handlerBtn4);
