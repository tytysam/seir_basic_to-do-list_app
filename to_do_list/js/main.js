// Cached DOM Nodes
const form = document.getElementById("input-container");
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.getElementById("to-do-items");

let userInput = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userInput = input.value;
  let li = document.createElement("li");
  li.textContent = userInput;
  ul.appendChild(li);
  input.value = "";
});
