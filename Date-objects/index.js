// let date = new Date();
// console.log(date);

// date string //

// let dateString = "2024-07-19T20:06:12.214Z";
// console.log(new Date(dateString));

// month and year //

// let dateMonthYear = new Date(2026, 10);
// console.log(dateMonthYear);

// date month and year //

// let dateMonthYear = new Date(2024, 1, 21);
// console.log(dateMonthYear);

// year month date hours //

// let date = new Date(2020, 6, 25, 5);
// console.log(date);

// year month date hours minutes //

// let date = new Date(2020, 6, 25, 5,59);
// console.log(date);

// year month date hours minutes seconds //

// let date = new Date(2020, 6, 25, 5, 59, 60);
// console.log(date);

// date string formate //

// let date = new Date("2024-july-19");
// console.log(date);

// let date = new Date();
// console.log(date);

// let date = new Date(2024, 1, 22);
// console.log(date);

// you can get date objects using the method of date objects //

// let getYear = new Date().getFullYear();
// let getMonth = new Date().getMonth();
// let getDate = new Date().getDate();
// let getDay = new Date().getDay();
// console.log(getYear);
// console.log(getMonth);
// console.log(getDate);
// console.log(getDay);

// set method in js //

// let date = new Date();
// console.log("before set:", date);

// let setDate = date.setFullYear(2025);
// console.log("after set", date);

// let setMonth = date.setMonth(7);
// console.log(date);

// let setdate = date.setDate(21);
// console.log(date);

// get time methods //

// let date = new Date();
// console.log(date);

// let getHour = date.getHours();
// console.log(getHour);

// let getMinutes = date.getMinutes();
// console.log(getMinutes);

// let getSeconds = date.getSeconds();
// console.log(getSeconds);

// let time = date.getTime();
// console.log(time);

// set time methods //

// let date = new Date();
// let setHour = date.setHours(11);
// let setMinute = date.setMinutes(45);
// let setSrconds = date.setSeconds(59);
// console.log(date);

// to local string //

// let date = new Date();
// let localstring = date.toLocaleString();
// console.log(localstring);

// let date = new Date();
// let localDate = date.toLocaleDateString();
// let localTime = date.toLocaleTimeString();
// console.log(localDate);
// console.log(localTime);

// write a function to add a specificied number of days to a given date //

// let date = new Date("2024-7-21");
// console.log(date);

// practice 15/10/202

// const date = new Date();
// console.log(date);

// create date object with specified year and month.

// let date = new Date(2024, 10);
// console.log(date);

// create date object with specified year month and date.

// let date = new Date(2024, 9, 15);
// console.log(date);

// create date object with specified year month and date hours.

// let date = new Date(2024, 9, 15, 21);
// console.log(date);

// create date object with specified year month and date hours minutes.

// let date = new Date(2024, 9, 15, 9, 26);
// console.log(date);

// create date object with specified year month and date hours minutes seconds.

// let date = new Date(2024, 9, 15, 9, 28, 45);
// console.log(date);

// create date object with specified year month and date hours minutes seconds miliseconds.

// let date = new Date(2024, 9, 15, 1, 20, 55, 200);
// console.log(date);

// get time using miliseconds //

// let date = new Date().getTime();
// let getTime = new Date(date);
// console.log(getTime);

// date get methods into the date object //

// get year //

// let date = new Date();
// let getYear = date.getFullYear();
// console.log(getYear);

// get month //

// let getMonth = date.getMonth();
// console.log(getMonth);

// get date //

// let getDate = date.getDate();
// console.log(getDate);

// get hours //

// let getHours = date.getHours();
// console.log(getHours);

// get minutes //

// let getMinutes = date.getMinutes();
// console.log(getMinutes);

// get seconds //

// let getSeconds = date.getSeconds();
// console.log(getSeconds);

// get miliseconds //

// let getMiliSeconds = date.getMilliseconds();
// console.log(getMiliSeconds);

// get day //

// day stats from index number 0 means sunday=0 //

// let getDay = date.getDay();
// console.log(getDay);

// js set method into the date objects //

// set year //

// date.setFullYear(2025);

// set month //

// date.setMonth(9);

//set date //

// date.setDate(16);

// set hours //

// date.setHours(1);

// set minutes //

// date.setMinutes(46);

// set seconds //

// date.setSeconds(40);

// set month

// date.setMonth(3);
// console.log(date);

// tolocalstring method //

// it give you time and date to your local system time aur date //

// let localString = date.toLocaleString();
// console.log(localString);

// you want only date using tolocaldatestring method //

// let localDateString = date.toLocaleDateString();
// console.log(localDateString);

// you want only time using tolocaltimestring method //

// let localTimeString = date.toLocaleTimeString();
// console.log(localTimeString);

// write a function to add a specified number of days to a given date //

// let date = new Date("2024-10-16");

// const addDaysToDate = (date, extraDay) =>
//   new Date(date.setDate(date.getDate() + extraDay));

// const newDate = addDaysToDate(date, 7);
// console.log(newDate);
// console.log(newDate.toLocaleDateString());

// write a function  to calculate the difference in days between two given dates //
