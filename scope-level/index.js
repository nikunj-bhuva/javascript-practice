// debugger;
// function one() {
//   debugger;
//   let userName = "nikunj";

//   function two() {
//     let lastName = "bhuva";
//     console.log("in child function", userName + lastName);
//   }
//   console.log("in parent function", userName);
//   two();
// }
// debugger;
// one();

// if (true) {
//   let number = 10;
//   if (number === 10) {
//     let number2 = number * 10;
//     console.log(number2);
//   }
//   // console.log(number2);
// }

// console.log(number);

// debugger;
// console.log(one(5));
// function one(number) {
//   debugger;
//   return number + 1;
// }

// function expression //

// console.log(addTwo());
// let addTwo = function (num1, num2) {
//   return num1 + num2;
// };

// practice 1-12-2024 //

// let a = 300;

// if (true) {
//   let a = 10;
//   const b = 20;
//   var c = 30;
// }
// // console.log(a);//not defined error avse karan k let block scope variable che te tena block n andar j tame tene access kari sako che //
// // console.log(b);//same as let keyword //
// console.log(c); //access kari sakso karan k var che e global scope variable che te gme tayathi access kri sako tame tene
// console.log(a);

// function parent() {
//   let fatherName = "jacky shroff";
//   function child() {
//     let childName = "tiger shroff";
//     console.log(fatherName + " " + childName); // child function ni andar parent function na variable access kari sako //
//   }
//   // console.log("father name:", fatherName); //father name access thase karan k te parent function na block ma j che //
//   // console.log("child name:", childName); //child Name access nai thay karan k js parent function na block ma childName no variable find karan te tame taya declare nathi karyo etle refrence error avse not defined karan k te child function na block ma declare karyo che //
//   child();
// }

// parent();

// if (true) {
//   const userName = "nikunj";
//   if (userName === "nikunj") {
//     const website = "insta";
//     console.log(userName + " " + website);
//   }
//   // console.log(website);
// }

// console.log(userName);

// console.log(addOne(10)); //access kari sakso //

// function addOne(num) {
//   return num + 1;
// }

// // function expression //

// addTwo(20); // access nahi karo sako error avse karan k tame function n variable ni andar store karyu che to variable tme niche declare karyo che tene pehla tame tenu access na kari sako //

// let addTwo = function (num) {
//   return num + 2;
// };
