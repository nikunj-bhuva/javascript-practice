// set item

// localStorage.setItem("userName", "nikunj");
// localStorage.setItem("username", "kc");

// console.log(localStorage.getItem("username"));

// localStorage.setItem("username", "nik");

// let obj = {
//   name: "nikunj",
//   age: 20,
//   location: "ahmedabad",
// };

// let jsonData = JSON.stringify(obj);
// console.log(jsonData);

// localStorage.setItem("userDetails", jsonData);
// console.log(localStorage.getItem("userDetails"));

// localStorage.setItem("user", obj);

// let studentDetail = {
//   name: "nikunj",
//   age: 21,
//   currentStudy: "Full stack development",
//   gradution: "bca",
//   currently: "ahmedabad",
//   email: "nikunj@gmail.com",
//   address: {
//     district: "jamnagar",
//     state: "gujrat",
//     pincode: "361001",
//   },
// };

// let addData = document.querySelector("#adddata");
// let retriveData = document.querySelector("#retrived");
// let removeData = document.querySelector("#remove");

// addData.addEventListener("click", () => {
//   localStorage.setItem("studentDetails", JSON.stringify(studentDetail));
// });

// retriveData.addEventListener("click", () => {
//   console.log(JSON.parse(localStorage.getItem("studentDetails")).address.state);
// });

// removeData.addEventListener("click", () => {
//   localStorage.removeItem("studentDetails");
// });

// let addData = document.querySelector("#adddata");

// let studentDetail = {
//   name: "nikunj",
//   grid: 5566,
//   age: 21,
//   graduation: "bca",
//   currentlyStudy: "full stack development",
//   address: {
//     city: "jamnagar",
//     district: "jamnagar",
//     state: "gujrat",
//     country: "india",
//     pincode: "361001",
//   },
// };

// addData.addEventListener("click", () => {
//   localStorage.setItem("studentDetail", JSON.stringify(studentDetail));
// });

// let retriveData = document.querySelector("#retrived");

// retriveData.addEventListener("click", () => {
//   console.log(
//     JSON.parse(localStorage.getItem("studentDetail")).address.country
//   );
// });

// let removeData = document.querySelector("#remove");
// removeData.addEventListener("click", () => {
//   localStorage.removeItem("studentDetail")
// });

// console.log(localStorage.setItem("users", "nikunj"));

const studentBioData = {
  firstName: "nikunj",
  lastName: "bhuva",
  age: 21,
  gender: "male",
  grade: "A+",
  skills: ["Html5", "css3", "bootstrap5", "javascript", "reactjs", "jquery"],
  address: {
    street: "123 main st",
    city: "amd",
    state: "gujrat",
    pincode: "232222",
  },
};

let addBtn = document.getElementById("adddata");
let getBtn = document.getElementById("retrived");
let removeBtn = document.getElementById("remove");

const handleAddDataLocalStorage = () => {
  localStorage.setItem("StudentBioData", JSON.stringify(studentBioData));
};

const handleGetDataLocalStorage = () => {
  console.log(JSON.parse(localStorage.getItem("StudentBioData")));
};

const handleRemoveDataLocalStorage = () => {
  localStorage.removeItem("StudentBioData");
};

addBtn.addEventListener("click", handleAddDataLocalStorage);
getBtn.addEventListener("click", handleGetDataLocalStorage);
removeBtn.addEventListener("click", handleRemoveDataLocalStorage);
