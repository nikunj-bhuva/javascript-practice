// let word="hello,    world";
// console.log(word.length);

// what is escape characters //

// escape charcter in javascript, the blackslash\ is used as an escape charcter. it allows you to include special charcter in a string. //

// let myIntro = "my name is nikunj bhuva & i am a full stack developer";
// let myIntro = "my name is '\ nikunj bhuva \' & \ni am a \"full stack \" developer";
// console.log(myIntro);

// string searching method //

// indexof //

// let myName = "nikunj";
// console.log(myName.indexOf("l"));

// let myName = "nikunj bhuva";
// let strArr = Array.from(myName);
// console.log(strArr);
// let strMap = strArr.map((currentElement, index) => {
//     return `${currentElement}-${index}`
// })
// console.log(strMap);
// console.log(myName);

// search method //

// let text = "hello javascript, welcome to the javascript programing";
// let searchString = text.search(/javaScript/i);//regular expression case sensitive ne remove kare che //
// console.log(searchString);

// match method //

// let text = "hello javascript, welcome to the javascript programing";
// let matchCharcter=text.match(/javaScript/gi);
// console.log(matchCharcter);

// match all //

// let text = "hello javascript, welcome to the javascript programing";
// let matchAllCharcter = text.matchAll("javascript");
// console.log(matchAllCharcter);

// for of loop in match all //

// let text = "hello javascript, welcome to the javascript programing";
// let matchAllCharcter = text.matchAll("javascript");
// for (item of matchAllCharcter) {
//     console.log(item[0]);
// }

// includes method //

// let text = "hello javascript, welcome to the javascript programing";
// console.log(text.includes("pro"));

// start with //

// let text = "hello javascript, welcome to the javascript programing";
// let startCharcter=text.startsWith("hello",0)
// console.log(startCharcter);

// let text = "hello javascript, welcome to the javascript programing";
// let endsCharcter=text.endsWith("programing");
// console.log(endsCharcter);

// slice method //

// let myName="nikunj bhuva";
// let result=myName.slice(7,10);
// console.log(result);
// console.log(myName);

// replace method //

// let myName="nikunj bhuva";
// console.log(myName.replace('n','N'));

// replace all method //

// let text = "hello javascript, welcome to the javascript programing";
// console.log(text.replaceAll("javascript","nikunj"));

// charat //

// let text = "hello javascript, welcome to the javascript programing";
// console.log(text.charAt(6));

// charcode at //

// let text = "hello javascript, welcome to the javascript programing";
// console.log(text.charCodeAt(6));

// let name = "nikunj";
// // console.log(name.indexOf("l"));
// // console.log(name.lastIndexOf("n"));
// console.log(name.search(/N/i));

// let text = "hello javascript, welcome to the javascript programing";
// // console.log(text.match(/javaScript/gi));
// console.log(text.matchAll(("javaScript")));

// let text = "Hello Javascript, welcome to the javascript programing";
// console.log(text.includes("java"));
// console.log(text.startsWith("to"));
// console.log(text.endsWith("programing"));
// console.log(text.charAt(3));
// console.log(text.charCodeAt(6));

// let text = "Hello Javascript, welcome to the javascript programing";
// console.log(text.replace(/JavaScript/ig,"Nikunj"));

// let words="   Hello World!   ";
// let spaceRemove=words.trim();
// console.log(spaceRemove.length);
// console.log(spaceRemove);
// console.log(words.length);

// let strings = "banna,orange,apple";
// let strArr = strings.split(",").reverse().join();
// console.log(strArr);

// interview questions //

// write a function that prints the letters 'a' through 'z' in the console.you shuold use a loop to iterate through the letters and print each one on a new line //

// console.log("a".charCodeAt(0));
// console.log("z".charCodeAt(0));
// console.log(String.fromCharCode(97));

// for (let i = 97; i <= 122; i++) {
//     console.log(String.fromCharCode(i));
// }

// write a function to count the number of vowels in a string //

// write a function to check if all the vowels are present in the string or not //

// function checkAllVowelPresentOrNot(str) {
//     let vowels = "aeiou";
//     for (char of vowels) {
//         // console.log(str.includes(char));
//         if (!(str.includes(char))) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkAllVowelPresentOrNot("saiou"));

// write a function to count the number of vowels in a string //

// debugger
// let countVowels = (str) => {
//     // debugger
//     let vowels = "aeiou";
//     let count = 0;
//     for (char of vowels) {
//         if (str.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// // debugger
// console.log(countVowels("aeiou"));

// write a function to check if the given string is pangram or not //

// let isPangramChecker = (str) => {
//     let inputArr = str.toLowerCase().split("");

//     let values = inputArr.filter((ele) => {
//         return ele.charCodeAt() >= "a".charCodeAt() && ele.charCodeAt() <= "z".charCodeAt();
//     })
//     console.log(values);
// }
// console.log(isPangramChecker("The quick brown fox jumps ove the lazy dog"));

