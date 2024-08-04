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
// }).filter((ele) => {
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
