debugger;
function firstFunction() {
  debugger;
  console.log("first function");
  secondFunction();
}

function secondFunction() {
  debugger;
  console.log("second function");
  setTimeout(() => {
    console.log("fun 2 starting");
  }, 3000);
  thirdFunction();
}

function thirdFunction() {
  debugger;
  console.log("third function");
}

firstFunction();
