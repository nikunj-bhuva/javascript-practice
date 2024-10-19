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

// practice 19-10-2024 //

// objects in javascript //

//object ek way che jo tamari pase multiple data types no data hoy tene tamare single variable ni andar rakhvo hoy to tena mate object no use thay che tame object ma game te data type ne store kari sako che function k object ni andar object ne pan store kari sako cho object no data key ane value pairs ma hoy che jema object ni har ek key string hoy che ane teni value game te data type ni hoy sake che object properties ane method pn store kari sake che key ane value bane ne properties kehvay che //

// create object in javascript //

// using object literals //

// let product = {
//   id: 1,
//   productName: "mobile",
//   price: "10,000",
//   launchingDate: 2024,
// };

// console.log(product);

// let person = {
//   name: "nikunj",
//   age: 22,
//   rollNo: 7,
//   eduction: "BCA",
//   greet: function () {
//     console.log("grettings");
//   },
// };

// console.log(person);

// accessing properies from object //

// you can access object properties and methods using dot notation and square bracket notation //

// let person = {
//   name: "nikunj",
//   age: 22,
//   rollNo: 7,
//   "is-Student": true,
//   eduction: "BCA",
//   greet: function () {
//     console.log("grettings");
//   },
// };

// console.log(person.name);
// console.log(person.age);
// console.log(person.rollNo);
// console.log(person["is-Student"]); //jo object ni andar kabab case jevi value hoy to tene tame dot notation thi access na kari sako tena mate tamare square bracket notation use karvo pade ane square bracket ni andar tame string ma j key pass karvani hoy to j tame tene value access kari sako.
// console.log(person['eduction']);
// person.greet();

// adding and modifying object properties //

// let person = {
//   name: "nikunj",
//   age: 22,
//   rollNo: 7,
//   "is-Student": true,
//   eduction: "BCA",
//   greet: function () {
//     console.log("grettings");
//   },
// };

// modifying object key using dot notation //

// person.rollNo = 11;

// // add key and values in object using dot notation //

// // person.location = "ahmedabad";

// // add key and values in object using square bracket notation //

// person[`location`] = `ahmedabad`;

// console.log(person);

// jo tame object ni andar function pass karo tene method kehvay che ane jo tamare object ni andar method hoy tene tamare access karva hoy to niche che //

// let person = {
//   name: "nikunj",
//   age: 22,
//   rollNo: 7,
//   "is-Student": true,
//   eduction: "BCA",
//   greet: function () {
//     console.log("grettings");
//   },
// };

// person.greet(); //access method in object.

// we can add dynamic keys in object //

// let student = {
//   idType: "A123456",
//   sName: "Nikunj",
//   sAge: 22,
//   isStudent: true,
//   greet: function () {
//     console.log(
//       `Hey, my ${student.idType} is ${student[`idType`]} and my name is ${
//         student.sName
//       }.`
//     ); //doubt che aya k ka tame direct idType and sName access na kari sako function ni andar.
//   },
// };

// student.greet();

// let userInput = ["name", "age", "email"];
// let userData = {};

// userInput.forEach((key) => {
//   let value = prompt(`Enter your ${key}:`); // user se input lete hain
//   userData[key] = value; // Dynamic key addition
// });

// add dynamic keys in object //

// doubt dynamic key puchvanu su hoy e te //

// let idType = "collegeId";
// console.log(idType);

// let student = {
//   [idType]: "A123456",
//   sName: "Nikunj",
//   sAge: 22,
//   isStudent: true,
//   greet: function () {
//     console.log(
//       `Hey, my ${idType} is ${student[idType]} and my name is ${student.sName}.` //aya e doubt che k jo ama direct idtype lakhu chu to notdefined nathi avtu ane [idType]lakhu chu string nathi pass krto to pn error nathi avti.
//     );
//   },
// };

// student.greet();
// console.log(student);

// data modeling //

// let car = {
//   carName: "BMW",
//   model: "x5",
//   color: "black",
//   year: 2022,
//   start: function () {
//     console.log("engine is start");
//   },
// };

// console.log(car);

// Interview Questions //

// explain the difference between passing objects by refrence and by value in javascrpt.

// pass by value //

// pass by value ma tamara badha primitive types ave che te primive value ni copies pass kare che //

// let a = 10;
// function modifyValue(x) {
//   return (x = 20);
// }
// let modify = modifyValue(a);
// console.log(modify); //value a ni modify thay gay che 20
// console.log(a); // pn a ni original value che te 10 j rese te copy pass kare che function ni argument ma tena value ni e concept ma doubt.

// copy mokle che a b ne jo b ni value change thase to a kem change nathi kartu ene value karan ki te b ni tena value ni copy mokle che //

// let a = 10;
// let b = a;
// b = 20;
// console.log(b);
// console.log(a);

// pass by reference //

// pass by refernce ma tamara badha non primitive data types ave che etle k jyre tme array object k pachi functions koy ni moklo cho tayre te original value ape che te memory address ma jaya store hoy che tyathi te actual address send kare che

// let obj = { name: "nikunj", age: 22 };

// obj1 variable n obj pass karyu etle te obj no j refrence hase memory ma jaya store hase tythi te original memory address j obj1 ni ape che original obj ni j value che te j obj1 pass thay che //

// jayre tame obj1 ni properties change karso to original object ma pn te change karse tame obj ni copy ma ky change karso to original object pn change thay jase.

// let obj1 = obj;
// obj1.name = "karan";
// obj1.age = 25;

// obj.name = "gautam";
// obj.age = 27;

// console.log("obj", obj);
// console.log("obj1", obj1);

// console.log("original" + obj);//doubt k aya object object km thay che tricky question.

// jo tame primitive datatypes no refrence gme taya store karo tayre te teno jaya store karyo hoy taya tame jo te variable ma ky change karo te original ma na thay to tena mate object ek method provide kare che object.assign() ane (...)spread operator thi pn kari sako cho

// object.assign() method ek ya multiple source object n ek target object mein copy kare che aa method shallow copy create kare che avoid kare che pass by refrence ne.

// let obj = { name: "nikunj", age: 22 };

// let newObj = Object.assign({}, obj); //copy kare che obj ni properties ane tene target {} object ni andar store karse obj ni properties ex {name:"nikunj",age:22} jo tame hvy newobj ni properties ni key ne change karso to te original copy obj ne properties ni key n change nahi kare.

// newObj.name = "karan";
// newObj.age = 28;

// console.log("new obj:", newObj);
// console.log("original obj:", obj);

// pass by refrence comparison //

// let obj1 = { name: "nikunj" };
// let obj2 = { name: "nikunj" };

// // tema else vado code chalse karan k obj1 and obj2 na memory address alag alag che etle jo tame obj2 ni andar obj1 assign karso to true avse karan ke tame obj1 nu memory address obj2 ma store karo cho pachi jo tame comparison karso to true avse //

// if (obj1 === obj2) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// JSON (javascript object notation)

// let person = {
//   name: "nikunj",
//   age: 22,
//   rollNo: 7,
//   "is-Student": true,
//   eduction: "BCA",
//   greet: function () {
//     console.log("grettings");
//   },
// };

// let jsonData = JSON.stringify(person);
// console.log(jsonData);

// // convert jsonobject to regular javascript object

// let getJsonData = JSON.parse(jsonData);
// console.log(getJsonData);

// this object //

// this use in function //

// in function this referes undefined //

// function hello() {
//   console.log(this);
// }

// hello();

// in object this use //

// object ni andar method ma jo tame this lakhso to te current object apse //

// let person = {
//   name: "nikunj",
//   rollNo: 7,
//   greet: function () {
//     console.log(this);
//   },
// };

// person.greet();

// method shorhand syntax in object //

// let person = {
//   name: "nikunj",
//   rollNo: 7,
//   greet() {
//     console.log(this);
//   },
// };

// person.greet()

// using fat arrow function in object this {} empty object apse //

// let person = {
//   name: "nikunj",
//   rollNo: 7,
//   greet: () => {
//     console.log(this);
//   },
// };

// person.greet();

// object useful methods //

// const product = {
//   id: 1,
//   name: "Laptop",
//   category: "Computers",
//   brand: "ExampleBrand",
//   price: 999.99,
//   stock: 50,
//   description: "dummy text",
//   image: "image link added",
// };

// new practices //
