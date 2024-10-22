//3 students at a same time wants to find the sum of two numbers //

// var a = 5,
//     b = 10;

// var sum = a + b;
// console.log(sum);

// var a = 15, b = 10;
// var sum = a + b;

// console.log(sum);

// var a = 30, b = 50;
// var sum = a + b;

// console.log(sum);

// now use function //

// function studentSum(studentNo, a, b) {
//     console.log(studentNo, a + b);
// }
// studentSum("student1:", 10, 20);

// debugger;
// function studentSum(a, b) {
//     debugger;
//     return a + b;
// }
// debugger;
// console.log(studentSum(10, 20));
// console.log(studentSum(50, 70));
// console.log(studentSum(30, 20));

//function declration //

// function greet() {
//     console.log("hello");
// }

// function call //

// function invocation means calling //

// greet();

// function sum(a,b) {
//     console.log(a + b);
// }
// sum(10,20);
// sum(50,70);

// debugger;
// function userValue(name) {
//     debugger;
//     console.log(`Hello ${name} welcome to my website`);
// }
// debugger;
// userValue("nikunj");
// userValue("ram");
// userValue("harsh");

// function expression //

// var result = function sum(a, b) {
//     return a + b;
// }
// console.log(result(10, 20));

// anonymous function //

// var result = function (a, b) {
//     console.log(a + b);
// }
// result(10, 20);

// what is return keyword //

// function sum(a, b) {
//     console.log("hello i am sum function");
//     return a + b;
// }

// var result = sum(10, 50);
// console.log(result);

// (function()
// {
//     console.log("hii");
// })();

// iife imidieatly invoked function expression //

// (function (a, b) {
//     console.log(a + b);
// })
//     (10, 20);

// practice //

// debugger;
// function sum(a, b) {
//     debugger
//     return a + b;
// }
// debugger
// var result = sum(10, 20);
// console.log("student1: " + result);
// var result1 = sum(50, 50);
// console.log("student2: " + result1);
// var result2 = sum(70, 20);
// console.log("student3: " + result2);

// function userName(name) {
//     return `Hello ${name} welcome to my channel`;
// }
// var userValue = userName("nikunj");
// console.log(userValue);
// var userValue2 = userName("ram");
// console.log(userValue2);
// var userValue3 = userName("kishan");
// console.log(userValue3);

// var result = function sum(a, b) {
//     console.log(a + b);
// }
// result(10, 20);

// debugger;
// var result = function sum(a, b) {
//     debugger
//     return a + b;
// }
// debugger
// console.log(result(10, 20));

// var result = function (a, b) {
//     console.log(a + b);
// }
// result(30,30);

// calculator function //

// let firstNumber = +prompt(`enter your first Number:`);
// let userSymbol = prompt("enter your Symbol:");
// let secondNumber = +prompt("enter your second Number:");

// let calculator = (userNumber1, symbol, userNumber2) => {
//     switch (symbol) {
//         case '+':
//             {
//                 let result = userNumber1 + userNumber2;
//                 return result;
//             }
//         case '-':
//             {
//                 let result = userNumber1 - userNumber2;
//                 return result;
//             }
//         case '*':
//             {
//                 let result = userNumber1 * userNumber2;
//                 return result;
//             }
//         case '/':
//             {
//                 if (userNumber1 === 0) {
//                     alert(`error`);
//                 }
//                 else {
//                     let result = userNumber1 / userNumber2;
//                     return result;
//                 }
//                 break;
//             }
//         default:
//             {
//                 alert(`invalid symbol!`);
//             }
//     }
// }

// console.log(calculator(firstNumber, userSymbol, secondNumber));

// write a function to reverse a given string without using built-in function //

// let userName = prompt("enter your Name");

// let reverseString = (userValue) => {
//     let finalResult = "";
//     for (let i = userValue.length - 1; i >= 0; i--) {
//         finalResult = finalResult + " "+userName[i];
//     }
//     return finalResult;
// }
// console.log(reverseString(userName));

// palindrome string or not //

// let userName = prompt("enter your Name");

// let palidromeString = (userValue) => {
//     let finalResult = "";
//     for (let i = userValue.length - 1; i >= 0; i--) {
//         finalResult = finalResult + userName[i];
//     }

//     if (userValue === finalResult) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(palidromeString(userName));

// practice //

// let num1 = 10;
// let num2 = 20;
// let nikunj = num1 + num2;
// console.log(nikunj);

// let num3 = 80;
// let num4 = 70;
// let chinku = num3 + num4;
// console.log(chinku);

// let num5 = 10;
// let num6 = 220;
// let satu = num5 + num6;
// console.log(satu);

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(10, 20);
// sum(60, 60);
// sum(30, 20);

// function greet(name) {
//   console.log(`Hello ${name} welcome to my website`);
// }
// greet("nikunj");
// greet("ram");
// greet("madhav");
// greet("ankit");

// let myFun = function(a, b) {
//   console.log(a + b);
// };
// myFun(10,30);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(10, 30));

// let sum = (a, b = 0) => {
//   console.log(a + b);
// };
// sum(30, 30);

// let userNumber1 = +prompt("enter your first Number:");
// let userSymbol = prompt("enter your Symbol:");
// let userNumber2 = +prompt("enter your second Number:");

// let calculator = (num1, operator, num2) => {
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       if (num2 === 0) {
//         return "0 is not allowed";
//       } else {
//         return num1 / num2;
//       }
//     default:
//       return "Invalid symbol";
//   }
// };
// let result = calculator(userNumber1, userSymbol, userNumber2);
// console.log(result);

// let myName = "nikunj bhuva";
// let result = "";
// for (let i = myName.length - 1; i >= 0; i--) {
//   result = result + myName[i];
// }
// console.log(result);

// let userName = prompt("enter your Name");
// let palindromeOrNot = (name) => {
//   let reverseString = "";
//   for (let i = name.length - 1; i >= 0; i--) {
//     reverseString = reverseString + name[i];
//   }
//   if (name === reverseString) {
//     return `this string is Palindrome`;
//   } else {
//     return `this string isn't Palindrome`;
//   }
// };
// let ans = palindromeOrNot(userName);
// console.log(ans);

// function personName(letter1, letter2, letter3, letter4, letter5, letter6) {
//   console.log(letter1, letter2, letter3, letter4, letter5, letter6);
// }
// personName("N", "i", "k", "u", "n", "j");
// personName("N", "i", "k", "u", "n", "j");
// personName("N", "i", "k", "u", "n", "j");
// personName("N", "i", "k", "u", "n", "j");
// personName("N", "i", "k", "u", "n", "j");
// personName("N", "i", "k", "u", "n", "j");
// personName("N", "i", "k", "u", "n", "j");
// personName("N", "i", "k", "u", "n", "j");
// personName("N", "i", "k", "u", "n", "j");
// personName("N", "i", "k", "u", "n", "j");

// debugger;
// function sum(a, b) {
//   debugger;
//   if (typeof a === "number" && typeof b === "number") {
//     console.log(a + b);
//   } else {
//     console.log("not");
//   }
// }
// sum(10, 5);
// sum(10, 5);
// sum(10, 5);
// sum(10, 5);
// sum(10, 5);

// let userInput = prompt("enter your Name:");

// debugger;
// function userLoggedIn(userName = "dev") {
//   debugger;
//   if (userName === "") {
//     return "please enter your userName:";
//   } else {
//     return `${userName} loggin sucessfully`;
//   }
// }
// debugger;
// let logginMessage = userLoggedIn(userInput);
// console.log(logginMessage);

// debugger;
// function calculateCartPrices(num1, num2, ...value1) {
//   debugger;
//   return value1;
// }
// debugger;
// let cartValues = calculateCartPrices(200, 100, 400, 500, 50);
// console.log(cartValues);

// let users = {
//   userName: "nikunj",
//   surName: "bhuva",
// };

// debugger;
// function objectPass(objectreceive) {
//   debugger;
//   console.log(
//     `your userName is ${objectreceive.userName} your surName is ${objectreceive.surName}`
//   );
// }
// debugger;
// objectPass(users);

// let colors = ["red", "blue", "green", "yellow", "orange"];

// function previousBtn() {}

// function nextBtn() {
//   alert("nextbtn");
// }

// let main = document.querySelector(".main");
// console.log(main);
// let pbtn = document.querySelector(".previous");

// let nbtn = document.querySelector(".next");

// main.style.backgroundColor = colors[0];

// let index = 0;

// nbtn.addEventListener("click", () => {
//   if (index > colors.length - 1) {
//     index = 0;
//   }
//   console.log(index++);
//   main.style.backgroundColor = colors[index];
// });

// pbtn.addEventListener("click", () => {
//   if (index < 0) {
//     index = colors.length - 1;
//   }
//   console.log(index--);
//   main.style.backgroundColor = colors[index];
// });

// new practice 22-10-2024 //

// normal functions //

// function defination //

// function hello() {
//   console.log("n");
//   console.log("i");
//   console.log("k");
//   console.log("u");
//   console.log("n");
//   console.log("j");
// }

// hello//function refrence
// hello();//function calling

// add two numbers function //

// let userNumber1 = +prompt("enter your first Number!:");
// let userNumber2 = +prompt("enter your second Number!:");

// num1 and num2 is parameters //

// function addTwoNumbers(num1, num2) {
//   return num1 + num2;
//   // function value ne return kari dese pachi function tenu exection puru kari dese ane return pachi no koy pn code nahi chale //
//   console.log("this console doesn't work");
// }

// jo function ni andar return statement nahi hoy ane tame addTwoNumbers fuction ni console karso to return value undefined apse function ane e apna console ma dekhase //

// console.log(addTwoNumbers(userNumber1, userNumber2)); //arguments
// function addTwoNumbers(num1, num2) {
//   if (num1 === 0 && num2 === 0) {
//     alert("please enter your Numbers!");
//   } else {
//     return num1 + num2;
//   }
// }

// let result = addTwoNumbers(userNumber1, userNumber2);
// console.log("result:", result);

// isLoggedIn function defination //

// let userName = prompt("enter your userName!");

// function isLoggedIn(name) {
//   if (!name) {
//     alert("please enter your userName");
//   } else {
//     return `welcome ${name} logged in successfully`;
//   }
// }

// let successFullLogin = isLoggedIn(userName);
// console.log(successFullLogin);
