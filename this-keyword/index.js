// practice 1-12-2024 //

// debugger;
// let user = {
//   userName: "nikunj",
//   price: 799,
//   welcomeMessage: function () {
//     debugger;
//     // console.log(`Hello ${this.userName} Welcome To Website`);
//     console.log(this);//object ni andar this lakhso to te current context ne refer karse means current context object che etle te user object apse //
//   },
// };

// user.welcomeMessage();

// console.log(this);// node js ni andar tame this ni refrence karso to te ek {} empty object return karse //

// function myFun() {
//   console.log("hello this");
//   console.log(this); // function andar this lakhso to node js ma global object avse te alag hase browser karta.
// }

// myFun();

// arrow function //

// const myArrowFun = () => {
//   console.log(this); // arrow function ni andar this lakso to te node js ma empty object avse ane jo aa j function browser ma run karvso to te window object j apse //
// };

// myArrowFun();

// debugger;
// const addTwo = (num1, num2) => {
//   // debugger;
//   return num1 + num2;
// };

// let result = addTwo(10, 20);
// console.log(result);

// implicit return //

// const addTwo = (num1, num2) => num1 + num2;

// console.log(addTwo(10, 20));

// arrow function ma jo tamare ek j line ma obj ma return keyword vagar obj return karvo hoy to tena mate () curly brackets no use karvo pade. //

// const funObj = () => ({ userName: "nikunj" });

// console.log(funObj());

