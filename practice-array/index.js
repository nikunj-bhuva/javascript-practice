// at method //

// let persons = ["nikunj", "dip", "karan", "ashish", "chinku"];
// console.log(persons.at(-3));

// array declaring with constructor //

// let persons = new Array("nikunj", "dip", "karan", "ashish", "chinku");
// console.log(persons);

// array literals

// let persons = ["nikunj", "dip", "karan", "ashish", "chinku"];
// console.log(persons[1]);

// for of loop //

// let persons = ["nikunj", "dip", "karan", "ashish", "chinku"];
// for (value of persons) {
//     console.log(value);
// }

// for in loop //

// let persons = ["nikunj", "dip", "karan", "ashish", "chinku"];
// for (index in persons) {
//     console.log(index);
// }

// for each method //

// let persons = ["nikunj", "dip", "karan", "ashish", "chinku"];

// persons.forEach((element, index, array) => {
//     console.log(element);
// })

// map method //

// let persons = ["nikunj", "dip", "karan", "ashish", "chinku"];
// let newArr = persons.map((element, index, array) => {
//     return array;
// })
// console.log(newArr);
// console.log(persons);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// for (value of numbers) {
//     if (isNaN(value)) {
//         alert("only allowed numbers!");
//     }
//     else {
//         console.log(value * 2);
//     }
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// numbers.forEach(element => {
//     console.log(element*2);
// });

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// let newArr = numbers.map((ele) => {
//     return ele * 2;
// })
// console.log(newArr);

// let strings = ["nik", "dip", "chinku", "madhav"];
// console.log(strings.push("minku"));
// console.log(strings.pop());
// console.log(strings.unshift("bhuva"));
// console.log(strings.unshift("kc"));
// console.log(strings.shift());
// console.log(strings.shift());
// console.log(strings);

// let persons = ["nik", "ashish", "karan", "chinku", "minku"];
// console.log(persons.splice(1, 1, "dip"));
// console.log(persons.splice(-1, 0, "harsh"));
// console.log(persons.length);

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// // console.log(numbers.indexOf(6));
// for (value of numbers) {
//     console.log(value, numbers.indexOf(value));
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 5, 3, 2];
// console.log(numbers.lastIndexOf(3));

// let persons = ["nik", "ashish", "karan", "chinku", "minku"];
// console.log(persons.includes("aran"));

// let days = ["jan", "feb", "march", "jun", "july"];
// // console.log(days.push("dec"));
// console.log(days.splice(days.length, 0, "dec"));
// console.log(days);

// let days = ["jan", "feb", "march", "jun", "july"];
// // days[2] = "March";
// console.log(days);

// let days = ["jan", "feb", "march", "jun", "july"];
// console.log(days.splice(-2, 1));
// console.log(days);

// debugger
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
// debugger
// let result = numbers.find((element, index, array) => {
//     debugger
//     return element > 6;
// })
// console.log(result);

// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
// debugger

// let map = numbers.map((ele) => {
//     return ele * 5;
// });
// console.log(map);

// let result = numbers.findIndex((element, index, array) => {
//     debugger
//     return element > 3;
// })
// console.log(result);
// console.log(numbers);

// debugger
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];
// let newArr = numbers.filter((ele, index, array) => {
//     debugger
//     return ele > 5;
// })
// console.log("all data greater than 5:", newArr);

// let userValue = 6;
// let numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];

// let removeValues = numbers.filter((ele) => {
//     return ele !== userValue;
// })
// console.log(removeValues);

// let products = [
//     { name: "laptop", price: 1200 },
//     { name: "phone", price: 800 },
//     { name: "tablet", price: 300 },
//     { name: "smartwatch", price: 150 }
// ]

// let result = products.filter((ele) => {
//     return ele.price <= 500;
// })
// console.log(result);
// console.log(products);

// debugger
// let numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// debugger
// let result = numbers.filter((curr, index, arr) => {
//    debugger
//     return index === arr.indexOf(curr);
// })
// console.log(result);
// console.log(numbers.length);

// let fruits = ["banna", "apple", "orange", "mango"];
// let numbers = [1, 2, 3, 4, 6, 10, 8, 9];
// // numbers.sort()
// // console.log(numbers);

// // console.log(numbers.sort((a,b)=>a-b));
// let sortedArray = numbers.sort((a, b) => {
//     // if (a > b) {
//     //     return 1;
//     // }
//     if (b > a) {
//         return -1;
//     }
// })
// console.log(sortedArray);
// // console.log(numbers);

// let persons = ["nikunj", "keyur", "dip", "ashish", "chinku"];
// let capitlizeStrings = persons.map((ele) => {
//     return ele.toUpperCase();
// })
// console.log(capitlizeStrings);

// let numbers = [10, 77, 55, 40, 30, 22];
// let evenSquare = numbers.map((ele) => {
//     if (ele % 2 === 0) {
//         return ele * 2;
//     }
// }).filter((ele) => {9
//     return ele !== undefined;
// })
// console.log(evenSquare);

// let persons = ["nikunj", "keyur", "dip", "ashish", "chinku"];
// let newArr = persons.map((ele) => {
//     return `Mr. ${ele}`;
// })
// console.log(newArr);

// let numbers = [100, 200, 300, 400, 500];
// let totalPrice = numbers.reduce((accum, ele, idx, arr) => {
//     return accum + ele;
// }, 0)
// console.log(totalPrice);

// array create using constructor //

// const arr = new Array("nikunj", "mohit", "vishal");
// console.log(arr.at(-1));

// array create using array literals //

// const fruits = ["apple", "mango", "bannna", "graphes"];
// fruits[2] = "narangi";
// console.log(fruits.length);

// for of loop //

// const fruits = ["apple", "mango", "bannna", "graphes"];
// for (element of fruits) {
//   console.log(element);
// }

// for in loop //

// const fruits = ["apple", "mango", "bannna", "graphes"];
// for (index in fruits) {
//   console.log(index);
// }

// for each method //

// const fruits = ["apple", "mango", "bannna", "graphes"];
// // fruits.forEach((element, index, arr) => {
// //   console.log(element);
// // });

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// practice time //

// each elements multiply with two //

// foreach method can not return any value //

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const multiplyArr = arr.forEach((element) => {
//   return element * 2;
// });

// console.log(multiplyArr);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// // map can return any value with new array //

// const multiplyArr = arr.map((ele) => {
//   return ele * 2;
// });

// console.log(multiplyArr);
// console.log(arr);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// // console.log(arr.shift());
// console.log(arr.unshift(10));
// console.log(arr);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr)

// const fruits = ["apple", "mango", "bannna", "graphes"];
// console.log(fruits.splice(-1, 0, "ass"));
// console.log(fruits);

// array search methods //

// const fruits = ["apple", "mango", "bannna", "apple", "graphes", "mango"];
// // console.log(fruits.indexOf("apple",1));
// console.log(fruits.lastIndexOf("mango",4));

// const fruits = ["apple", "mango", "bannna", "apple", "graphes", "mango"];
// console.log(fruits.includes("mango"));

// todo challenge //

// add december to the end of the array //

// const months = ["jan", "march", "april", "july", "jun"];
// // months.push(`december`);
// console.log(months.splice(months.length, 0, "december"));
// console.log(months);

// const months = ["jan", "march", "april", "july", "jun"];
// // console.log(months.splice(1, 1, "March"));
// months[1] = "March";
// console.log(months);

// delete june from an array //

// const months = ["jan", "march", "april", "july", "jun"];
// const juneIndex = months.indexOf(`jun`);
// if (juneIndex === 4) {
//   console.log(months.splice(juneIndex, 1));
// }
// console.log(months);

// const fruits = ["apple", "banna", "orange", "mango"];

// fruits.push("graphes");
// console.log(fruits.splice(1, 1));
// console.log(fruits.unshift("pineapple"));
// console.log(fruits.splice(0, 1));
// console.log(fruits);

// find method //

// const numbers = [1, 2, 3, 4, 5, 3, 2, 8, 9];
// debugger
// const arr = numbers.find((element) => {
//   debugger
//   return element > 5;
// });

// console.log(arr);

// find index method //

// const arr = [2, 4, 6, 8, 10];
// const newArr = arr.findIndex((value) => {
//   return value > 6;
// });

// console.log(newArr);

// const arr = [2, 4, 6, 8, 10];
// const newArr = arr.findIndex((value) => value > 6);
// console.log(newArr);

// const value = 6;
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// debugger;
// const newArr = numbers.filter((ele) => {
//   debugger;
//   return ele !== value;
// });
// console.log(newArr);
// console.log(numbers);

// filtering products //

// const products = [
//   { name: "laptop", price: 1200 },
//   { name: "phone", price: 800 },
//   { name: "tablet", price: 300 },
//   { name: "smartwatch", price: 150 },
// ];

//using for of loop//

// for (item of products) {
//   if (item.price <= 500) {
//     console.log(item);
//   }
// }

// for in loop //

// for (item in products) {
//   console.log(products[item].price <= 500 ? products[item] : null);
// }

// using vanila for loop //

// for (let i = 0; i < products.length; i++) {
//   debugger
//   products[i].price <= 500 && console.log(products[i]);
// }

// using filter method //

// const filterProducts = products.filter((product) => product.price <= 500);

// console.log(filterProducts);

// unique values //

// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// const newArr = numbers.filter(
//   (number, index, arr) => arr.indexOf(number) === index
// );

// const numbers = [1, 4, 10, 12, 15, 18];
// const squaredArr = numbers.map((number) => number * number);
// console.log(squaredArr);

// const persons = ["nikunj", "vishal", "het", "nikhil", "mohit", "parth"];

// const stringCapitalizedArr = persons.map((name) =>
//   name === name.toLowerCase() ? name.toUpperCase() : name.toLowerCase()
// );
// console.log(stringCapitalizedArr);

// const numbers = [1, 43, 10, 7, 9, 18, 11, 19, 16, 14];
// const evenNumbers = numbers
//   .map((number) => {
//     if (number % 2 === 0) {
//       return number * number;
//     }
//   })
//   .filter((number) => number !== undefined);

// console.log(evenNumbers);

// const persons = ["nikunj", "vishal", "het", "nikhil", "mohit", "parth"];
// const newPesonsArr = persons.map((names) => `Mr.${names}`);
// console.log(newPesonsArr);

// reduce method //

// const numbers = [100, 200, 300, 400, 500];

// const totalPrice = numbers.reduce((accum, value) => {
//   return accum + value;
// }, 0);

// console.log(totalPrice);
