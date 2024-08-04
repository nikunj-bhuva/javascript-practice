// .at()method //

// let persons = ["nikunj", "keyur", "dip", "nb", "ram"];
// console.log(persons.length-1);
// console.log(persons.at(-1));
// console.log(typeof persons);

// three types to create a array //

// array create using constructor array

// let fruits = new Array('apple', 'mango', 'pineaple', 'orange');
// console.log(fruits);

// using array literals //

// let fruits=['apple', 'mango', 'pineaple', 'orange'];
// console.log(fruits);

//modify elements in array //

// let fruits = ['apple', 'mango', 'pineaple', 'orange'];
// fruits[2] = 'lichhi';
// console.log(fruits);

//for of loop //

// let fruits = ['apple', 'mango', 'pineaple', 'orange', 'graphes'];
// debugger
// for (let element of fruits) {
//     debugger
//     console.log(element);
// }

// debugger
// for (let index = fruits.length - 1; index >= 0; index--) {
//     debugger
//     console.log(fruits[index]);
// }

// for in loop //

// let fruits = ['apple', 'mango', 'pineaple', 'orange', 'graphes'];
// for (let index in fruits) {
//     console.log(index);
// }

// foreach method //

// doubt //

// let fruits = ['apple', 'mango', 'pineaple', 'orange', 'graphes'];
// let forEachArr = fruits.forEach((element, index, array) => {
//     console.log(element);
//     // console.log(`${index}`);
//     // console.log(array);
// })

// map method //

// let fruits = ['apple', 'mango', 'pineaple', 'orange', 'graphes'];
// debugger
// let map = fruits.map((element, index, array) => {
//     debugger
//     return element;
// })
// console.log(map);//doubt

// write a programme to multiply each elements //

// const numbers = [1, 2, 3, 4, 5];

// // for (let index of numbers) {
// //     console.log(index * 2);
// // }

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i] * 2);
// }

// numbers.forEach((ele, index, array) => {
//     console.log(ele * 2);
// })

// let newArray = numbers.map((ele, index, array) => {
//     return ele * 2;
// })
// console.log(numbers);
// console.log(newArray);

// how to insert , add , replace and delete elements in array (crud operation) //

// let persons = ["nikunj", "keyur", "dip", "ram"];
// console.log(persons.push("parth"));
// console.log(persons.pop());
// console.log("this is unshift value:", persons.unshift("aryan"));
// console.log("this is shift value:",persons.shift());
// console.log(persons);

// how to remover middel elements in array using a splice method //

// let persons = ["nikunj", "keyur", "dip", "ram"];
// console.log(persons.splice(1,1,"kc"));
// console.log(persons);

// practice //

// let persons = ["nikunj", "chinku", "minku", "dip"];
// persons[3] = "ram";
// console.log(persons);

// let persons = ["nikunj", "chinku", "minku", "dip"];
// for (value of persons) {
//     console.log(value);
// }
// for (index in persons) {
//     console.log(index);
// }

// debugger
// persons.forEach((currele, index, array) => {
//     // console.log(currele,index);
//     debugger
//     console.log(array);
// })

// debugger
// let personsItrate = persons.map((value, index, array) => {
//     debugger
//     return value;
// })
// console.log(personsItrate);

// let persons = ["nikunj", "chinku", "minku", "dip"];
// console.log(persons.push("nb"));
// console.log(persons);
// console.log(persons.pop());
// console.log(persons.unshift("bhuva"));
// console.log(persons);
// console.log(persons.shift());
// console.log(persons);

// let persons = ["nikunj", "chinku", "minku", "dip"];
// // console.log(persons.splice(1, 0, "harsh"));
// console.log(persons.splice(-1, 0,"hello"));
// console.log(persons);

// how to searching in array //

// indexof lastindexof includes //

// let numbers = [1, 2, 3, 4, 5, 6, 7];
// console.log(numbers.indexOf(3));

// let numbers = [1, 2, 3, 4, 5, 6, 5, 7];
// let resultIndexOf = numbers.indexOf(5);
// console.log("index of:", resultIndexOf);
// let resultLastIndexOf = numbers.lastIndexOf(5);
// console.log("last index of:", resultLastIndexOf);
// console.log(numbers);

// includes //

// let persons = ["nikunj", "keyur", "dip", "ashish", "karan"];
// console.log(persons.includes("dip"));

// challenge time //

// add dec at the end of the array //

// let months = ["jan", "feb", "march", "april", "june", "july"];
// console.log(months.push("dec"));
// console.log(months.splice(months.length, 0, "dec"));
// console.log(months);

// upadte march to March //

// let marchUpdate = months.indexOf("march");
// let march = months.splice(marchUpdate, 1, "March");
// console.log(march);
// console.log(months);

// delete june from the array //

// let searchIndexJune = months.indexOf("june");
// console.log(searchIndexJune);
// console.log(months.splice(searchIndexJune,1));
// console.log(months);

// search + filter //

// find method //

// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

// let result = numbers.find((currentValue, index, array) => {
//     return currentValue > 6;
// })
// console.log(result);

// findindex method //

// debugger
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

// const result = numbers.map((currentval) => {
//     debugger
//     return currentval * 5
// });
// debugger
// console.log("map arr:", result);
// console.log("original arr:", numbers);

// const result2 = result.findIndex((element) => {
//     debugger
//     return element > 20;
// })
// console.log("findindex of:", result2);

// filter method //

// debugger
// const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 6, 9];

// debugger
// const filterArray = numbers.filter((element) => {
//     debugger
//     return element > 6;
// })
// console.log(filterArray);

// use case in e-commerce website when we want to remove or delete any product from add to cart page.

// let's say user wants to delete value 6 //

// let userValue = 6;
// const numbers = [1, 2, 3, 6, 4, 5, 6, 7, 8, 9];

// let upadateArray = numbers.filter((element) => {
//     return userValue !== element
// })
// console.log(upadateArray);

// filtering products by price //

// debugger
// const products = [
//     { name: "laptop", price: 1200, },
//     { name: "phone", price: 800, },
//     { name: "tablet", price: 300 },
//     { name: "smartwatch", price: 150 }
// ];

// debugger
// const filterProduts = products.filter((currentElement) => {
//     debugger
//     return currentElement.price <= 500;
// })
// console.log(filterProduts);

// filter unique value //
//   0  1  2  3  4  5  6  7  8  9
// debugger
// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// //   0  1  2  3  4  5  4  7  8   9
// debugger
// const uniqueValues = numbers.filter((currentElement, index, arr) => {
//     debugger
//     // console.log("index values:",index);
//     // console.log(arr.indexOf(currentElement));
//     return arr.indexOf(currentElement) === index;
// })
// console.log(uniqueValues);

// set method //

// const numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// console.log(new Set(numbers));

// how to sort and compare an array //
// sorting an array: the sort method sorts the elements of an array in place and returns the sorted array.by default it sorts elements as string //

// asscending and desending order doubts //

// const fruits=["banna","grahes","orange","mango","pineaple"];
// fruits.sort();
// console.log(fruits);

// const numbers = [1, 7, 9, 3, 2, 5, 6, 4];
// numbers.sort((a, b) => {
//     // console.log(a,b);
//     if (a > b) {
//         return 1;
//     }
//     if (b > a) {
//         return -1;
//     }
// });
// console.log(numbers);
// console.log(numbers);

// using map to square each number and create an array //

// let numbers = [1, 2, 3, 4, 5, 6,];

// let newSquareArray = numbers.map((element) => {
//     return element*element;
// })
// console.log(newSquareArray);
// console.log(numbers);

// interview questions //

// 1. using the map method, write a function that takes an array of strings and returns a new array where each string is capitalize //

// debugger
// let persons = ["nikunj", "dip", "chinku", "minku", "karan"];
// let capitalizeStringArray = persons.map((element, index, array) => {
//     debugger
//     // return element[0].toUpperCase()+element.slice(1,persons.length);
//     return element[0].toUpperCase() + element.slice(1, 6);
// })
// console.log(capitalizeStringArray);
// console.log(persons);

// 2. using the map method, write a function that takes an array of numbers returns a new array where each number is squared, but only if it's even number //

// debugger
// let numbers = [1, 10, 40, 33, 25, 57, 999, 90];

// let evenNumberSquare = numbers.map((ele) => {
//     debugger
//     if (ele % 2 === 0) {
//         return ele * ele;
//     }
//     debugger
// }).filter((ele) => ele !== undefined)
// console.log(evenNumberSquare);

// using the map method, write a function that takes an array of names and returns a new array where each name is prefixed with "Mr.".

// let personsName = ["nikunj", "keyur", "dip", "karan", "ashish"];

// let result = personsName.map((element, index, array) => {
//     return `Mr.${element}`;
// })
// console.log(result);

// reduce method //

// write a javascript function that calculates the total price of items in a shopping cart. the function should take an array of item prices as input and return the total price //

// let productPrice = [100, 200, 300, 400, 500];
// let totalPrice = productPrice.reduce((accum, currentValue, currentIndex, array) => {
//     return accum+currentValue;
// },0)
// console.log(totalPrice);

// function myFunction(a, b) {
//   return b.split(a).length - 1;
// }
// console.log(
//   myFunction("m", "how many times does the character occur in this sentence?")
// );

// function myFunction(a) {
//     let string = a + "";
//     console.log(string.split(""));
// }
// myFunction(193278)

// debugger
// function myFunction(a, b) {
//   for (let i = 0; i < a.length; i++) {
//     if (a.includes(b)) {
//       return b + a;
//     } else {
//       return a + b;
//     }
//   }
// }
// console.log(myFunction("lips", "sp"));

// function myFunction(a) {
//   let string = a + "";
//   let stringArr = string.split("");
//   let numberArr = stringArr.map((ele) => {
//     return Number(ele);
//   });
//   return numberArr;
// }
// console.log(myFunction(10344));

// debugger
// let names = ["nik", "kunal", "ganesh", "ram", "nb"];
// debugger
// for (value in names) {
//   console.log(value);
// }

// let fruits = ["mango", "apple", "graphes", "orange", "banana"];
// let result = fruits.forEach((element, index, array) => {
//   console.log(element);
// });

// debugger;
// let fruits = ["mango", "apple", "graphes", "orange", "banana"];
// let map = fruits.map((value, index, array) => {
//   debugger;
//   return `$fruits new arr:${value}`;
// });
// console.log(map);
// console.log(fruits);

// let numbers = [10, 33, 25, 60, 15, 12];
// // let multiplyNumbers = numbers.forEach((element) => {
// //   console.log(element * 2);
// // });

// let newArr = numbers.map((element) => {
//   return element*2;
// });
// console.log(newArr);
// console.log(numbers);

// let students = ["ram", "sita", "hanuman"];
// console.log(students.push("laxman"));
// console.log(students);

// let students = ["ram", "sita", "hanuman"];
// console.log(students.pop());
// console.log(students);

// let students = ["ram", "sita", "hanuman"];
// console.log(students.unshift("laxman"));
// console.log(students);

// let students = ["ram", "sita", "hanuman"];
// console.log(students.shift());
// console.log(students);

// let fruits = ["apple", "mango", "banna", "graphes"];
// console.log(fruits.splice(1, 1, "pineapple"));
// console.log(fruits);

// let names=["ram","sita","hanuman","laxman","ravan"];
// console.log(names.indexOf());
// console.log(names);

// let numbers = [1, 2, 3, 4, 5, 3, 6, 7, 4];
// console.log(numbers.indexOf(6));
// console.log(numbers.lastIndexOf(3,4));
// console.log(numbers.indexOf(4, 4));

// let numbers = [1, 2, 3, 4, 5, 3, 6, 7, 4];
// console.log(numbers.includes(7));

// let months = ["jan", "march", "april", "june", "july"];
// // console.log(months.push("dec"));
// // console.log(months);
// // months[1]="March";
// // console.log(months);
// console.log(months.splice(-2,1));
// console.log(months);

// debugger;
// let numbers = [1, 2, 3, 4, 5, 3, 6, 7, 4];
// let find = numbers.find((element) => {
//   debugger;
//   return element > 5;
// });
// console.log(find);

// let numbers = [1, 2, 3, 4, 5, 3, 6, 7, 4];
// let findIndex = numbers.findIndex((ele, idx, arr) => {
//   return ele > 3;
// });
// console.log(findIndex);
// console.log(numbers);

// let numbers = [1, 2, 3, 4, 5, 3, 6, 7, 4];
// let filter = numbers.filter((ele) => {
//   return ele > 4;
// });
// console.log(filter);
// console.log(numbers);

// debugger
// let userValue = +prompt("enter your delete Number:");
// let numbers = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let filter = numbers.filter((ele) => {
//   debugger
//   return ele !== userValue;
// });
// console.log(filter);

// let products = [
//   { name: "Laptop", price: 1200 },
//   { name: "phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];

// let filterProducts = products.filter((ele) => {
//   return ele.price <= 500;
// });

// console.log(filterProducts);

// unique values //

// debugger;
// let numbers = [1, 2, 3, 4, 5, 6, 4, 7, 8, 9, 2];
// let uniqueValues = numbers.filter((ele, index, arr) => {
//   // console.log(ele);
//   debugger;
//   return index === arr.indexOf(ele);
// });
// console.log(uniqueValues);

// let strings = ["nikunj", "dip", "keyur", "ram", "mohit"];
// let capitalizeString = strings.map((ele) => {
//   return ele.toUpperCase();
// });
// console.log(capitalizeString);
// console.log(strings);

// debugger;
// let numbers = [1, 33, 20, 21, 14, 50, 38, 4];
// let evenNumbers = numbers.map((ele) => {
//   debugger;
//   if (ele % 2 === 0) {
//     debugger;
//     return ele * ele;
//   }
// });
// debugger
// let result = evenNumbers.filter((ele) => {
//  debugger
//   return ele !== undefined;
// });

// console.log(result);

// let strings = ["nikunj", "dip", "keyur", "ram", "mohit"];

// let newArr = strings.map((ele) => {
//   return `Mr.${ele.toUpperCase()}`;
// });

// console.log(newArr);

// debugger;
// let productPrice = [100, 400, 500, 200, 50];
// let totalPrice = productPrice.reduce((accum, ele) => {
//   debugger;
//   return accum + ele;
// }, 0);

// console.log(totalPrice);

// let arr = ["nikunj", "keyur", "dip", "ashish", "minku", 1];
// console.log(arr.at(-3));
// console.log(arr[arr.length - 1]);
// arr[3] = "madhav";
// console.log(arr);

// for (let value of arr) {
//   console.log(value);
// }

// for (let index in arr) {
//   console.log(index);
// }

// let arr = ["nikunj", "keyur", "dip", "ashish", "minku", 1];

// let newArr = arr.forEach(function (element, index, arr) {
//   return element;
// });
// console.log(newArr);

// let newArr = arr.map(function (element, index, arr) {
//   return `person is ${element}`;
// });

// console.log(newArr);
// console.log(arr);

// let numbers = [1, 2, 3, 4, 5];

// let multiplyArr = numbers.map((ele) => {
//   return ele * 2;
// });

// console.log(multiplyArr);
// console.log(numbers);

// let names = ["nik", "kc", "dp"];
// // console.log(names.push("nb"));
// // console.log(names.pop());
// // console.log(names.length)
// // console.log(names);;
// console.log(names.unshift("nb"));
// console.log(names.shift());
// console.log(names);

// let names = ["nik", "kc", "dp"];
// // console.log(names.splice(2, 0, "ashish"));
// console.log(names.splice(1, 1, "sagar"));
// console.log(names);

// let numbers = [1, 5, 3, 6, 3, 7, 9, 10];
// // console.log(numbers.indexOf(3, 4));
// // console.log(numbers.includes(11));
// console.log(numbers.indexOf(3,-3));

// let months = ["jan", "feb", "march", "june", "july"];
// // months.push("dec");
// months.splice(months.length, 0, "dec");
// console.log(months.splice(2, 1, "March"));
// let indexDelete = months.indexOf("june");
// months.splice(indexDelete, 1);
// console.log(months);

// let numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 9];
// let returnarr = numbers.find((element) => {
//   return element > 9;
// });

// console.log(returnarr);

// let numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 9];
// let result = numbers.findIndex((ele) => {
//   return ele>2;
// });

// console.log(result);

// filter method //

// let numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 9];
// let result = numbers.filter((ele) => {
//   return ele > 4;
// });

// console.log(result);

// let number = [1, 2, 3, 4, 6, 5, 6, 7, 8, 9];
// let result = number.filter((ele) => {
//   return ele !== 6;
// });

// console.log(result);
// console.log(number);

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 300 },
//   { name: "Smartwatch", price: 150 },
// ];

// debugger;
// let filterProducts = products.filter((ele) => {
//   debugger;
//   return ele.price <= 500;
// });

// console.log(filterProducts);
// console.log(products);

// let uniqueValues = [1, 4, 5, 6, 7, 4, 9, 10];
// debugger
// let result = uniqueValues.filter((ele, index, arr) => {
//   return uniqueValues.indexOf(ele)===index;
// });

// console.log(result);

// let persons = ["nikunj", "keyur", "dip", "ashish", "minku"];

// debugger
// let capitalNames = persons.map((ele) => {
//  debugger
//   return ele.toUpperCase();
// });

// console.log(capitalNames);
// console.log(persons);

// let numbers = [10, 15, 30, 22, 12, 8];

// let squareArr = numbers.map((ele) => {
//   return ele * ele;
// });

// debugger
// let squareEven = numbers.filter((ele) => {
//   debugger
//   return ele % 2 === 0;
// });

// debugger
// let square = squareEven.map((ele) => {
//   debugger
//   return ele * ele;
// });

// console.log(squareEven);
// console.log(square);

// let persons = ["nikunj", "keyur", "dip", "ashish", "minku"];

// debugger
// let newA = persons.map((ele) => {
//   debugger
//   return `Mr.${ele}`;
// });

// console.log(newA);
// console.log(persons);

// let products = [100, 200, 300, 400, 500];

// debugger
// let price = products.reduce((accum, ele) => {
//   debugger
//   return accum + ele;
// });

// console.log(price);

// const myArr = ["nikunj", "keyur", "dip", "ashish", "mohit"];
// console.log("my slice method:", myArr.slice(0, -2));
// console.log("original arr after slice:", myArr);
// console.log("my splice method:", myArr.splice(3, 1, "rahul"));
// console.log("original arr after splice:", myArr);
// console.log(myArr.splice(1,4));
// console.log(myArr);

// merge to arrays //

// let myarr1 = [1, 2, 3, 4, 5];
// let myarr2 = [6, 7, 8, 9, 10];
// console.log(myarr1.concat(myarr2));

// let newArr = [...myarr1, ...myarr2];
// console.log(newArr);

// array ni under pn array hoy to flat method no use thay che //

// let arr = [1, 2, 3, [4, 5, 6], [7, 8, 9, [10, 11]]];
// console.log(arr.flat(3));

// destructring array //

// const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filterdArr = myNumbers.filter((numbers) => {
//   return numbers > 4;
// });

// console.log(filterdArr);

// const books = [
//   { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
//   { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
//   { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
//   { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
//   { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
//   { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
//   { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
//   { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
// ];

// const usersBooks = books.filter((ele) => {
//   return ele.genre === "History";
// });

// const genreBooks = [];

// const filterdBooks = usersBooks.forEach((ele) => {
//   return genreBooks.push(ele.genre);
// });

// console.log(genreBooks);

// const myNums = [100, 200, 300, 400, 500, 600];

// debugger
// const productTotal = myNums.reduce((acc, currVal) => {
//  debugger
//   return acc + currVal;
// },0);

// console.log(productTotal);

// const shoppingCart = [
//   { itemName: "js course", price: 2999 },
//   { itemName: "py course", price: 999 },
//   { itemName: "mobile dev course", price: 5999 },
//   { itemName: "data science course", price: 12999 },
// ];
// // debugger;
// const totalPrice = shoppingCart.reduce((accum, currentValue) => {
//   // debugger;
//   return accum + currentValue.price;
// }, 0);

// console.log(totalPrice);
