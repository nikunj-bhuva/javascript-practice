// // this code isn't hoisting //

// // let number = 10;
// // function greet() {
// //   console.log("namste javascript");
// // }

// // console.log(number);
// // greet();

// // this code is hoisting //

// // in var keyword ma j hoisting work kare che //

// // console.log(number);
// // greet();

// // var number = 10;
// // function greet() {
// //   console.log("Namste Javascript");
// // }

// // aa code ma output undefined avse ane greet function ni body execute thay jase karan k javascript na code run thay e pela javascript engine code n scan kare n property create kare che code ma apela har ek variable mate and functions mate jema variables ni space memory reserve thay che ane tene teni initial value undefined set karva ma ave che jetla variable hoy tene ane functions ne pn te teni memory ma reserve kare che but teni initial value ma te actual memory no refernce set kare che har ek function ne tena memory address no actual address set kare che tena mate jaye tethi output ma undefined ave che karan k code execution phase ma run thase tyare number variable ne tame access karo cho pela pn number ne javascript engine e teni property ma initial value undefined set kare hoy che tethi undefined ave che tya var keyword no use karo che taya etle ane function ma tene te function no actual address jaya memory ma store hase tayathi ape didho etle function call thai che ane tenu output apna console ma dekhase //

// // let keyword hoisting banava j ny de karan k let and const bane block scope variable che tethi ahi jo tame number n pela access karso ane number declare teni pachi karyo hse to javascript not defined api dese ane fat arrow ma function pn hoisting work nathi kartu apel code ma greet() function pela call karvso etle not defined error avse karn k tema let keyword no use che etle modern javascript em ke che pela tame tene declare karo pchi tame tene access kari sakso //

// // console.log(number);
// greet();

// let number = 10;
// let greet = () => {
//   console.log("Namste Javascript");
// };
