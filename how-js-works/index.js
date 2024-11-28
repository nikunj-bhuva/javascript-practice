// // javascript na ast tree n check karva mate ni website "https://www.jointjs.com/demos/abstract-syntax-tree" //

// // synchronus code exapmle and execution //

// const fun2 = () => {
//   console.log("fun2 starts and ends");
// };

// const fun1 = () => {
//   console.log("fun1 is start");
//   fun2();
//   console.log("fun1 ends");
// };

// fun1();

// asynchronus code example and execution //

const fun2 = () => {
  setTimeout(() => {
    console.log("fun 2 starts and ends");
  }, 2000);
};

const fun1 = () => {
  console.log("fun1 is start");
  fun2();
  console.log("fun1 ends");
};

fun1(); 
