// let para = document.getElementById("para");
// console.log(para);
// console.dir(para);

// let para2 = document.getElementById("para-2");
// console.log((para2.style.backgroundColor = "black"));
// console.log((para2.style.color = "white"));

// let headings = document.getElementsByClassName("headings");
// console.dir(headings);
// console.log(headings);

// let array = Array.from(headings);
// console.log(array);
// array.forEach((value) => {
//   console.log(value);
// });

// let tag = document.getElementsByTagName("h1");
// console.log(tag);

// let headings = document.querySelector(".headings");
// console.log(headings);

// let headings = document.querySelectorAll(".headings");
// console.log(headings);

// headings.forEach((ele) => {
//   console.log(ele);
// });

// let headings=document.querySelectorAll("h4");
// console.log(headings);

// let tagName=document.querySelector(".headings").tagName;
// console.log(tagName);

// let div=document.querySelector(".parent");
// console.log(div.innerHTML);
// console.log(div.innerText);

// let para = document.querySelector(".para");
// // console.log((para.innerText = "this is paragraph"));
// console.log(para.innerHTML="<i><b>This is My paragraph</b></i>");
// console.log(para.innerText);

// let ul = document.querySelector("#ul");
// console.log(ul.innerHTML="<b>this is bold tag</b>");

// let h1 = document.querySelector("h1");
// console.log(h1.textContent);

// let div=document.querySelector(".parent");
// console.log(div.textContent);

// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + " " + "learning from youtube";
// console.log(h2.innerText);

// let divs = document.querySelectorAll(".box");
// console.log(divs);

// let idx = 1;
// for (element of divs) {
//   console.log((element.innerText = "new unique value" + " " + idx));
//   idx++;
// }

// get attribute //

// let div = document.querySelector(".container");
// console.log(div.getAttribute("class"));

// console.log(document.querySelector(".para").getAttribute("class"));
// console.log(document.querySelector("link").getAttribute("rels"));

// set attribute //

// let div = document.querySelector(".container");
// console.log(div.setAttribute("class","parent"));

// let h1 = document.querySelector("#first-head");
// console.log(h1.setAttribute("id","heading-first"));

// create element //

// let div = document.querySelector(".container");

// let para = document.querySelector(".para");

// let h3 = document.createElement("h3");
// h3.innerText = "third heading";
// console.log(h3);

// para.before(h3);

// console.log(div.before(h3));

// let script = document.querySelector("script");
// console.log(script.remove());

// let table = document.createElement("table");
// console.log(table);

// let thead = document.createElement("thead");
// table.append(thead);

// let tr = document.createElement("tr");
// thead.append(tr);

// let th = document.createElement("th");
// th.innerText = "th 1";
// console.log(tr.append(th));

// let th1 = document.createElement("th");
// th1.innerText = "th 2";
// console.log(tr.append(th1));

// let th2 = document.createElement("th");
// th2.innerText = "th 3";
// console.log(tr.append(th2));

// let tbody = document.createElement("tbody");
// console.log(table.append(tbody));

// let tr1 = document.createElement("tr");
// console.log(tbody.append(tr1));

// let td = document.createElement("td");
// console.log(tr1.append(td));

// td.innerText = "td 1";

// let tr2 = document.createElement("tr");
// console.log(tbody.append(tr2));

// let td1 = document.createElement("td");
// console.log(tr2.append(td1));

// td1.innerText = "td 2";

// let tr3 = document.createElement("tr");
// console.log(tbody.append(tr3));

// let td2 = document.createElement("td");
// console.log(tr3.append(td2));

// td2.innerText = "td 3";

// script.before(table);

// let body = document.querySelector("body");

// let newButton = document.createElement("button");
// newButton.innerText = "Click me";
// console.log((newButton.style.backgroundColor = "red"));
// console.log((newButton.style.color = "white"));

// body.prepend(newButton);

// let para = document.querySelector(".para");
// console.log(para);

// get elements by id //

// let firstHeading = document.getElementById("first-h1");
// firstHeading.style.cssText =
//   "background-color:#222; color:white; padding:10px 5px; border-radius:10px;";
// console.log(firstHeading);

// // get elements by tagName //

// let para = document.getElementsByTagName("p");
// para = Array.from(para);

// para.forEach((para) => {
//   para.innerText = "This is my editable paragraphs using dom properties.";
//   para.style.cssText = "background-color:#222; color:white; padding:10px 5px;";
// });

// get element by classname //

// let h2 = document.getElementsByClassName("second-h2");
// h2 = Array.from(h2);
// h2.forEach((ele) => {
//   console.log(ele.setAttribute("class", "headings"));
// });
// console.log(h2);

// query selector //

// let h2 = document.querySelector(".second-h2");
// h2.innerHTML = `<span>${h2.innerText}</span>`;
// h2.style.cssText =
//   "background-color:orange; color:white; font-size:30px; padding:5px 5px";
// console.log(h2);

// query selector all //

// debugger;
// let h2All = document.querySelectorAll(".second-h2");
// h2All.forEach((ele) => {
//   debugger;
//   ele.style.cssText =
//     "background-color:orange; color:white; font-size:30px; padding:5px 5px";
//   console.log((ele.innerHTML = "<span>this is span tag</span>"));
// });
// console.log(h2All);

// let parent = document.querySelector(".parent");
// let child = parent.children;
// child = child[0];
// let ul = child.firstElementChild;
// console.log(ul);
// for (let i = 0; i < ul.children.length; i++) {
//   // console.dir(ul.children[i].setAttribute("class", "ul-childs"));
//   console.log(
//     (ul.children[i].style.cssText =
//       "background-color:#222; color:white; list-style:none; padding:5px 5px; text-align:center; margin-bottom:10px;")
//   );
// }

let ul = document.querySelector("ul");
console.log(ul);

function addLanguage(...langName) {
  console.log(langName);
  langName.forEach((ele, id) => {
    let li = document.createElement("li");
    li.innerText = ele;
    li.className = `li${id}`;
    console.log(li);
    ul.append(li);
  });
}

addLanguage("Python", "C", "C++");

let li = document.querySelector("li:nth-child(2)");
let createLi = document.createElement("li");
li.replaceWith(createLi);
createLi.innerText = "Go";

let li1 = ul.firstElementChild;
li1.outerHTML = "<li>Typescript</li>";
console.dir(li1);

let liLast = ul.lastElementChild;
console.log(liLast.remove());

let liSecond = document.querySelector("li:nth-child(2)");
console.log(liSecond.remove());
