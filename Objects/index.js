// practice 19-10-2024 //

// objects in javascript //

//object ek way che jo tamari pase multiple data types no data hoy tene tamare single variable ni andar rakhvo hoy to tena mate object no use thay che tame object ma game te data type ne store kari sako cho function k object ni andar object ne pan store kari sako cho object no data key ane value pairs ma hoy che jema object ni har ek key string hoy che ane teni value game te data type ni hoy sake che object properties ane method pn store kari sake che key ane value bane ne properties kehvay che //

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
//   idType: "A123456",
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
// return (x = 20);
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

// // // tema else vado code chalse karan k obj1 and obj2 na memory address alag alag che etle jo tame obj2 ni andar obj1 assign karso to true avse karan ke tame obj1 nu memory address obj2 ma store karo cho pachi jo tame comparison karso to true avse //

// if (obj1 == obj2) {
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

// object useful methods //

// Object.keys(product) tena thi tame object ni andar ni key access kari sako cho //

// let productObjKeys = Object.keys(product);
// console.log(productObjKeys);

// Object.values(product) tena thi tame object ni andar key ni value ne access kari sako cho //

// let productKeyValues = Object.values(product);
// console.log(productKeyValues);

// object ni andar apne check karvu hoy k apne apeli key te object ni andar che k nahi tena mate Object.hasOwnProperty() no use thay che te boolean value return kare che //

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

// console.log(product.hasOwnProperty("price"));

// Object.freeze() method tamara jo tamara object ni properties ne koy change na kari sake to tena mate useful method che //

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

// Object.freeze(product);
// product.id = 2;
// console.log(product);

// Interview Questions object //

// 1. what will be the output? //

// output merge karse Object.assign() method tema target ni ane source ni key same hase to te override kari dese old key n jem ke niche na object ma {a:1,b:3,c:4} b key bey object ma same j che etle mergeobject ma b:3 avse //

// const target = { a: 1, b: 2 };
// const source = { b: 3, c: 4 };

// let mergedObject = Object.assign(target, source);
// console.log(mergedObject);

// ! problem: Given an object representing a student, write a function to add a new subject with its corresponding grade to the student's record. Also check if the grades property is present or not?

// let student = {
//   name: "Bob",
//   age: 20,
//   grades: {
//     math: 90,
//     science: 85,
//     history: 88,
//   },
// };

// const addNewSubject = (studentObj, subject, mark) => {
//   if (studentObj.hasOwnProperty("grades")) {
//     studentObj.grades = { ...studentObj.grades, [subject]: mark };
//     // console.log(studentObj);
//   }
// };

// addNewSubject(student, "computer", 92);
// console.log(student);

//! Problem: write a function that compare two objects to determined if they have the same properties and values.

// Example

// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" };
// let objC = { name: "Bob", age: 30, city: "San Francisco" };

// let areObjectEqual = (obj1, obj2) => {
//   let obj1Keys = Object.keys(obj1);
//   let obj2Keys = Object.keys(obj2);

//   // check object keys obj1 and obj2 //

//   // if (obj1Keys.length !== obj2Keys.length) {
//   //   return false;
//   // } else {
//   //   return true;
//   // }

//   // check object values obj1 and obj2 //

//   for (let key in obj1) {
//     if (obj1[key] === obj2[key]) {
//       return true;
//     } else {
//       return false;
//     } //dot notation no use karso to console ma undefined avse square bracket notation thi j tame key ni value access kari sakso //
//   }
// };
// let objSameOrNot = areObjectEqual(objA, objB);
// console.log(objSameOrNot);
// areObjectEqual(objA, objC);

// ! Problem: write a function that transforms an array of an objects into an object where the keys are the objects ids.

// let inputArray = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const arrayToObject = (arr) => {
//   let obj = {};

//   for (let key of arr) {
//     obj[key.id] = key;
//   }
//   return obj;
// };

// let converTedObject = arrayToObject(inputArray);
// console.log(converTedObject);

// should output: {`1`:{id: 1, name: "Alice" },`2`:{ id: 2, name: "Bob" },`3`:{ id: 3, name: "Charlie" },}

// new practices 19-10-2024 //

// singleton object

// je object object na constructor method thi banavo Object.create()thi to tene singleton object kehvay che //

// Object.create

// non-singleton object //

// je object tame object literals thi create karo cho te badha non-singleton object hoy che means {} //

// jo tamare object properties n koy change na kari sake tem karvu hoy to Object.freeze(person). je object ni properties ni tamare change na karvi hoy tene freeze function ni andar pass kari devanu //

// const person = {
//   name: "Nikunj",
//   lastName: "Bhuva",
//   email: "example@gmail.com",
//   password: 8888,
// };

// Object.freeze(person);
// person.email = "llm@gmail.com";
// console.log(person);

// let obj1 = { 1: "a", 2: "b" };
// let obj2 = { 3: "c", 4: "d" };

// combine two objects using spread operator //

// let obj3 = { ...obj1, ...obj2 };

// combine two objects using object.assign method //

// let obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);
// console.log(obj1);
// console.log(obj2);

// const person = {
//   name: "Nikunj",
//   lastName: "Bhuva",
//   email: "example@gmail.com",
//   password: 8888,
// };

// object ni under ni badhi keys joti hoy tena mate object.keys() method no use thay che //

// object badhi keys ne array ma store kari ane return kare che //

// console.log(Object.keys(person));
// console.log(Object.values(person));

// object ni andar apne check karvu hoy k apne apeli property che k ny te object ma tena mate Object.hasOwnProperty()no use thay che //

// const person = {
//   name: "Nikunj",
//   lastName: "Bhuva",
//   email: "example@gmail.com",
//   password: 8888,
// };

// console.log(person.hasOwnProperty(`password`));

// let product = {
//   id: 1,
//   productName: "T.V",
//   modal: "BPL",
//   launchDate: 2021,
// };

// avoid this code to access object keys //

// console.log(product.id);
// console.log(product.productName);
// console.log(product.modal);
// console.log(product.launchDate);

// destructure object keys this syntax is best way to redable your code //

// tame tamara object ni key ne change pn kare sako cho ex:-id:Id aa syntax thi tame object ne destructure kari ne tamara code n redable banavi sako cho darvakhte product. product. lakhva karta apne tene key ne direct access kari sakiye che aa syntax thi. //

// const { id, productName: pName, modal, launchDate } = product;

// console.log(id);
// console.log(pName);
// console.log(modal);
// console.log(launchDate);

// practice 13/11/2024 //

// how to create objects in js //

// create object using Object constructor //

// let obj = new Object();
// console.log(obj);

// create object using object literals //

// let obj = {
//   name: "kishan",
//   grId: 2334,
//   location: "rajkot",
//   isStudent: true,
// };

// get key values from obj using dot notation //

// console.log(obj.location);
// console.log(obj.isStudent);
// console.log(obj.name);

// add properties and methods into obj //

// obj.surName = "kumar";
// obj.age = 26;

// modify object key values //

// obj.name = "kishor";
// obj.grId = 8884;
// obj.age = 25;
// console.log(obj);

// let person = {
//   name: "amitabh",
//   surName: "bachan",
//   age: 70,
//   profession: "actor",
//   city: "Mumbai",
//   greet: function () {
//     console.log(`Hello Good Afternoon!`);
//   },
// };

// console.log(person.greet());

// let student = {
//   name: "rahul",
//   surName: "sheth",
//   rollNo: 7,
//   standard: 12,
// };

// student.greet = function () {
//   console.log(
//     `hello my name is ${student.name}. my surname is ${student.surName}`
//   );
// };
// console.log(student);
// console.log(student.greet());

// this keyword //

// object ni andar method ma jo tame this lakhso to te current object apse means je object hase teno te apse this keyword thi tame current object ni properties dynamically get kari sako cho //

// let student = {
//   name: "rahul",
//   surName: "sheth",
//   rollNo: 7,
//   standard: 12,
//   // short hand syntax method //
//   greet: function () {
//     console.log(this.name, this.surName);
//   },
// };

// console.log(student.greet());

// let student = {
//   name: "rahul",
//   surName: "sheth",
//   rollNo: 7,
//   standard: 12,
//   // short hand syntax method //
//   greet: () => {
//     console.log(this.name, this.surName); // arrow function ni andar this global object ne refer kare che te current object nathi aptu te global object means window object apse //
//   },
// };

// console.log(student.greet());

// let obj1 = { name: "nikunj" };
// let obj2 = { name: "nikunj" };

// if (obj1 === obj2) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// aanu result false avse karan k javascript ma object che te non-primitive type che tema tame object create karo etle javascript har ek object ne different memory address uper store kare che tethi tame jayre comparison karo cho tayre js obj1 ane obj2 nu memory address check kare che bane ma alag alag object create thaya che tethi banena memory address alag alag hoy che tethi result false made che //

// let obj1 = { name: "nikunj" };
// let obj2 = obj1;

// if (obj1 === obj2) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// aanu result true avse karan k obj1 thi tame object create karyo etle tenu memory address memory ma store thase ane obj2 ni andar tame obj1 assign karyu etle tame obj1 no refernce memory mathi send karyu etle obj1 ane obj2 bananu memory address same thay jase means obj1 memory location(0x001) ane obj2 nu pn memory location (0x001) bane same thay jase tethi tenu result true avse //

// let obj1 = { name: "nikunj", surName: "bhuva" };
// let obj2 = obj1;
// obj2.name = "kunal";
// obj2.surName = "shastri";
// obj2.rollNo = 25;
// console.log("this is obj2:", obj2);
// console.log("this is obj1:", obj1);

// aama jayre hu obj2 ni properties ne change karu chu to obj1 ni properties pn change thay jay che karan k js ma object reference type hoy che example obj2 ma obj1 assign che etle obj2 ane obj1 banenu memory address same location uper che ane object pn same che bane pase tethi hu jayre obj2 ne change karis to obj1 ni properties pn change thay jase //

// let userDetail = { name: "nikunj", surName: "bhuva" };
// let userDetail2 = { isLoggedIn: true, location: "ahmedabad" };
// let fullDetail = Object.assign({}, userDetail, userDetail2);
// fullDetail.isLoggedIn = false;
// console.log("user detail:", userDetail);
// console.log("user detail 2:", userDetail2);
// console.log("full detail:", fullDetail);

// object assign method //

// let objA = { a: 1, b: 2 }; //0x1F34 memory address
// let objB = { c: 3, d: 4 }; //0x1F35 memory address
// let mergedObject = Object.assign({}, objA, objB); // 0x1F36 memory address
// // object.assign()method ma be arguments apvani hoy che first target object {} je ek empty object hoy che ane objA ni properties copy kare che assign method ane objB ni properties copy kari n target object ma store kare che objA ane objB bane object ek target object ma merge kari n ek navo object return kare che {a:1,b:2,c:3,d:4}
// console.log(mergedObject);

// spread operator //

// let objA = { a: 1, b: 2 };
// let objB = { c: 3, d: 4 };
// let mergedObject = { ...objA, ...objB };
// console.log(mergedObject);

// JSON Javascript Object Notation //

// JSON Provides two method like 1).JSON.Stringify() 2).JSON.Parse() //

// JSON.Stringify methods converts  javascript object into a string //

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

// // converts js objects into json string //

// let jsonData = JSON.stringify(product);
// console.log(jsonData);

// // get json string into original js object //

// let getJsonData = JSON.parse(jsonData);
// console.log(getJsonData);

// object usefull methods //

// Object.keys method //

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

// object.keys object ni keys [] array ma convert kari ane return kare che //

// let productObjKeys = Object.keys(product);
// console.log(productObjKeys);

// object.values object ni andar ni key ni badhi values ek [] array na form ma store kari ne return kare che //

// let productObjValues = Object.values(product);
// console.log(productObjValues);

// hasOwnProperty method thi tame object ni andar search kari sako tema key pass karvani jo tame apeli key tema exists karti hase to te boolean value true return karse ane jo key exists nahi karti hoy to boolean value false return karse //

// console.log(product.hasOwnProperty("price"));

// object.freeze method //

// object ni freeze kri deje jethi apna object ni properties ne koy change na kari sake tena mate use thay che //

// Object.freeze(product);
// product.id = 8888; //doesn't change because the object is freeze using freeze method //
// product.brand = "mobile"; //doesn't change because the object is freeze using freeze method //
// console.log(product); //doesn't change properties //

// practice question //

// let target = { a: 1, b: 2 };
// let source = { b: 3, c: 4 };
// let mergedObject = Object.assign({}, target, source);
// console.log(mergedObject);

// doubt //

// let student = {
//   name: "Bob",
//   age: 20,
//   grades: {
//     math: 90,
//     science: 85,
//     history: 88,
//   },
// };

// let addNewSubject = (studentObj, sub, mark) => {
//   if (studentObj.hasOwnProperty("grades")) {
//     let newStudentObj = Object.assign({}, studentObj);
//     newStudentObj.grades[sub] = mark;
//     return newStudentObj;
//   } else {
//     return false;
//   }
// };

// let studentFinalObject = addNewSubject(student, "computer", 92);
// console.log(studentFinalObject);

// let objA = { name: "Alice", age: 26, city: "New York" };
// let objB = { name: "Alice", age: 26, city: "New York" };
// let objC = { name: "Bob", age: 30, city: "San Francisco" };

// const areObjectEqual = (obj1, obj2) => {
//   let obj1Keys = Object.keys(obj1);
//   let obj2Keys = Object.keys(obj2);

//   if (obj1Keys.length !== obj2Keys.length) {
//     return false;
//   }

//   for (let key in obj1) {
//     if (obj1[key] !== obj2[key]) {
//       return false;
//     }
//   }
//   return true;
// };

// let finalResult = areObjectEqual(objA, objB);
// let finalResult2 = areObjectEqual(objA, objC);
// console.log(finalResult);
// console.log(finalResult2);

// let inputArray = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// let arrayToObject = (arr) => {
//   let obj = {};
//   for (let index of arr) {
//     obj[index.id] = index;
//   }
//   return obj;
// };

// let newObj = arrayToObject(inputArray);
// console.log(newObj);

// object literals //

// symbol declare into object key //

// let mySym = Symbol("mykey1");

// let jsUser = {
//   name: "nikunj",
//   "full name": "nikunj bhuva",
//   [mySym]: "key1",
//   age: 22,
//   location: "ahmedabad",
//   grId: 5556,
//   isLoggedIn: true,
//   lastOnline: ["monday", "tuesday", "wednesday", "friday"],
// };

// access properties from object using dot notation //

// console.log(jsUser.grId);

// access properties from object using bracket notation //

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);
// console.log(jsUser);
// console.log(jsUser["location"]);

// add properties & methods into an object //

// method che ek tena thi object ne koy pn properties ne change na kari sake //

// Object.freeze(jsUser);

// jsUser.grettings = function () {
//   console.log("Hello Js User");
// };

// // console.log(jsUser.grettings());
// jsUser.name = "keyur";
// console.log(jsUser);

// merge to objects //

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };

// // merge to objects using object.assign method //

// // const obj3 = Object.assign({}, obj1, obj2);
// // console.log(obj3);

// // merge objects using spread operator //

// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

let myObj = {
  name: "nikunj",
  id: 2,
  location: "jamnagar",
  profession: "study",
  "birth-of-date": 2002,
};

// avoid this code to access properties //

// console.log(myObj.location);
// console.log(myObj.name);
// console.log(myObj.profession);

// destructring objects properties //

let { name, id, profession, location, "birth-of-date": bithOfDate } = myObj;
console.log(name);
console.log(id);
console.log(profession);
console.log(location);
console.log(bithOfDate);
