// let name="user"

// let student = {
//   name: "nikunj",
//   std: 10,
//   rollno: 44,
//   result: "pass",
//   greet: function () {
//     console.log(`hello my ${name} is ${student.name} `);
//   },
// };

// console.log(student.rollno);
// console.log(student["rollno"]);

// student.city = "jamnagar";
// console.log(student);

// student["rollno"] = 7;
// console.log(student);

// student.greet();

// let idType = "studentId";

// let student = {
//   [idType]: "A123456",
//   sName: "nikunj",
//   sAge: 29,
//   isStudent: true,
//   greet: function () {
//     console.log(
//       `Hey,My ${idType} is ${student[idType]} and my name is ${student.sName}`
//     );
//   },
// };

// student.greet();

// let a = 10;
// let modifyValue = (x) => {
//  return x = 20;
// };
// console.log(modifyValue(a));
// console.log(a);

// let a = 10;
// let string = String(a);
// console.log(string);

// console.log();

// let person = {
//   name: "nikunj",
//   surName: "bhuva",
//   "'age": 21,
//   graduction: "bca",
//   address: {
//     city: "jamnagar",
//     district: "jamnagar",
//     state: "gujrat",
//     pincode: 361001,
//   },
//   greet: function () {
//     console.log("hello");
//   },
// };
// console.log(person.address.pincode);
// console.log(person["'age"]);
// person.greet();

// dynamic key adds //

// let grId = "collegeId";

// let student = {
//   grId: 5556,
//   sName: "nikunj",
//   className: "b",
//   std: 12,
//   greet: function () {
//     console.log(
//       `my ${grId} is ${student["grId"]} and my name is ${student.sName}`
//     );
//   },
// };

// student.greet();

// pass by value //

// let a = 10;

// function modifyValue(x) {
//   console.log((x = 20));
// }
// modifyValue(a);
// console.log(a);

// pass by refrence //

// let obj = {
//   name: "nikunj",
//   age: 21,
// };

// let obj2 = obj;

// obj2.name = "dip";
// console.log("obj2:", obj2);
// console.log("obj1:" + obj);

// object assign //

// let obj = {
//   name: "nikunj",
//   age: 21,
// };

// let newObj = Object.assign({}, obj);
// newObj.name = "dip";
// console.log("original object", obj);
// console.log("new obj", newObj);

// let obj1 = { name: "nikunj", age: 21 };
// let obj2 = { name: "nikunj", age: 21 };

// let isEqual = obj1 === obj2;
// console.log(isEqual);

// json //

// let obj = {
//   name: "nikunj",
//   surName: "bhuva",
//   rollNo: 12,
//   greet: function () {
//     console.log("hii");
//   },
// };

// let jsonString = JSON.stringify(obj);
// console.log(obj);
// console.log("json string", jsonString);
// let jsonParse = JSON.parse(jsonString);
// console.log("json parse", jsonParse);

"use strict";

// const { object } = require("prop-types");

// let x = 10;
// console.log(x);

// let define = function () {
//   console.log("hii");
// };

// define();

// in a use strict mode this is undefined in function //

// function define() {
//   console.log(this);
// }

// define();

// this use in object //

// let obj = {
//   name: "nikunj",
//   surName: "bhuva",
//   greet: function () {
//     console.log("this object:", this);
//   },
// };

// obj.greet();
// console.log("original object:", obj);

// method shorthand syntax //

// let obj = {
//   name: "nikunj",
//   greet() {
//     console.log(this);
//   },
// };

// obj.greet();

// in fat arrow function this refers in object method window object //

// let obj = {
//   name: "nikunj",
//   greet: () => {
//     console.log(this);
//   },
// };

// obj.greet();

// access object keys and values method //

// let product = {
//   id: 1,
//   name: "Laptop",
//   category: "Computer",
//   brand: "ExampleBrand",
//   price: 999.99,
//   stock: 50,
//   description:
//     "Powerful laptop with a quad-core is processor,8GB RAM,256GB SSD,and a 14-inch FHD display.",
//   image: "image link added here",
// };

// all key access of products using obj.keys() method //

// let keys = Object.keys(product);
// console.log(keys);

// console.log(Object.values(product));

// console.log(Object.entries(product));

// in object this property key contains or not //

// console.log(product.hasOwnProperty("names"));

// let target = { a: 1, b: 3 };
// let source = { b: 8, c: 6 };

// let mergedObject = Object.assign(target, source);

// source.c = 7;

// console.log(target);
// console.log(source);
// console.log(mergedObject);

// let student = {
//   name: "bob",
//   age: 20,
//   grades: {
//     math: 90,
//     science: 80,
//     drawing: 95,
//   },
// };

// let addNewSubject = (student, subject, marks) => {
//   if (student.hasOwnProperty("grades") === true) {
//     console.log((student.grades[subject] = marks));
//     console.log(student);
//   } else {
//     console.log("grade property is not in a student object");
//   }
// };

// addNewSubject(student, "computer", 92);

// let objA = {
//   name: "Alice",
//   age: 26,
//   city: "New York",
// };

// let objB = {
//   name: "Alice",
//   age: 26,
//   city: "New York",
// };

// let objAKey = Object.keys(objA);
// let objBKey = Object.keys(objB);
// console.log(objAKey);
// console.log(objBKey);

// objAKey.forEach((ele) => {
//   console.log(ele);
// });

// let mySym = Symbol("mykey1");

// let personInformation = {
//   name: "nikunj",
//   surName: "bhuva",
//   [mySym]: "key1",
//   email: "nikunj@gmail.com",
//   isLoggedIn: false,
//   lastLoggin: ["monday", "sunday"],
// };

// console.log(personInformation.name);
// console.log(personInformation["surName"]);
// console.log(personInformation[mySym]);
// personInformation.email = "nikunjgoogle@gmail.com";
// console.log(personInformation);
// // Object.freeze(personInformation);
// personInformation.email = "nikunjgoogle@gmail123.com";
// console.log(personInformation);

// personInformation.greet = function () {
//   console.log("hello i am greet");
// };

// personInformation.greet2 = function () {
//   console.log(`hello i am greet2, ${this.name}`);
// };

// console.log(personInformation.greet2());

// let tinderApp = {};

// tinderApp.name = "nikunj";
// tinderApp.id = "123abc";
// tinderApp.password = "1234";
// tinderApp.email = "nb@gmail.com";

// // console.log(tinderApp);

// tinderApp.fullName = {
//   userName: {
//     firstName: "nikunj",
//     lastName: "bhuva",
//   },
// };

// console.log(tinderApp.fullName.userName.lastName);

// let obj1 = {
//   1: "a",
//   2: "b",
// };

// let obj2 = {
//   3: "a",
//   4: "b",
// };

// let obj3 = Object.assign({}, obj1, obj2);

// merage two objects //

// let obj3 = { ...obj1, ...obj2 };

// console.log(obj3);

// let users = [
//   {
//     id: 1,
//     email: "n@gmail.com",
//   },
//   {
//     id: 1,
//     email: "n@gmail.com",
//   },
//   {
//     id: 1,
//     email: "n@gmail.com",
//   },
// ];

// console.log(Object.keys(users[0]));

// users.forEach((ele) => {
//   console.log(ele.email);
// });

// let obj2 = {
//   3: "a",
//   4: "b",
// };

// console.log(Object.keys(obj2));
// console.log(Object.values(obj2));
// console.log(obj2.hasOwnProperty("3"));

// destuctring //

// let course = {
//   courseName: "javascript",
//   coursePrice: "1000",
//   courseDuration: "2months",
// };

// // console.log(course.courseName);
// // console.log(course.coursePrice);

// let { courseName:name,coursePrice:price,courseDuration:duration } = course;
// console.log(name);
