let userInput = document.querySelector("#userInput");
let btn = document.querySelector(".btn");
let todolist = document.querySelector(".todolist");

let contentAdd = () => {
    let paraCreate = document.createElement("p");
    console.log(paraCreate);
    paraCreate.innerText = userInput.value;
    todolist.append(paraCreate);
    userInput.value = "";
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    contentAdd();
});

todolist.addEventListener("click", (event) => {
    let currEle = event.target;
    currEle.remove();
})