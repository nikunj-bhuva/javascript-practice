let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let body = document.querySelector("body");

let color = "#999000";
let color1 = "#222";
let letters = "0123456789ABCDEF";

function hexCodeGenerator() {
  for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * 16)];
  return color;
}

button1.addEventListener("click", () => {
  color = "#";
  color = hexCodeGenerator();
  body.style.background =
    "linear-gradient(to right, " + color + ", " + color1 + ")";
  button1.innerText = color;
});

button2.addEventListener("click", () => {
  color1 = "#";
  color1 = hexCodeGenerator();
  body.style.background =
    "linear-gradient(to right, " + color + ", " + color1 + ")";
  button2.innerText = color1;
});
