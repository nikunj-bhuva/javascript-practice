// // synchronus code example //

// function two() {
//   console.log("this is function two");
// }

// function one() {
//   console.log("this is function one");
//   two();
//   console.log("function 1 is end");
// }

// one();

// asynchronus code example //

// function two() {
//   setTimeout(() => {
//     console.log("fun 2 is starting");
//   }, 2000);
// }

// function one() {
//   console.log("fun 1 start");
//   two();
//   console.log("fun 1 ended");
// }

// one();

// debugger;
function firstFunction() {
  // debugger;
  console.log("first function");
  secondFunction();
}

function secondFunction() {
  // debugger;
  console.log("second function");
  setTimeout(() => {
    console.log("fun 2 is starting");
  }, 2000);
  thirdFunction();
}

function thirdFunction() {
  // debugger;
  console.log("third function");
}

firstFunction();
