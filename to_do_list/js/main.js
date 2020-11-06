// Cached DOM Nodes
const form = document.querySelector("form");
const input = document.querySelector("input");
// const addButton = document.getElementById("add-button");
// const completeButton = document.getElementById("complete-button");
// const removeButton = document.getElementById("remove-button");
const ul = document.getElementById("to-do-list");
const li = document.getElementsByClassName("to-do-items");

// Initialize userInput as an empty string with a global scope
let userInput = "";

// Refactor your complex functions down into separate functions that are ideally
// only doing a single, particular job...

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userInput = input.value;
  let li = document.createElement("li");
  li.classList.add("to-do-items");
  li.textContent = userInput;
  let removeButton = document.createElement("button");
  removeButton.innerText = "REMOVE";
  removeButton.setAttribute("id", "remove-button");
  removeButton.addEventListener("click", (e) => {
    li.remove();
    completeButton.remove();
    e.target.remove();
  });
  let completeButton = document.createElement("button");
  completeButton.innerText = "COMPLETE";
  completeButton.setAttribute("id", "complete-button");
  completeButton.addEventListener("click", (e) => {
    li.classList.toggle("strike");
  });
  ul.appendChild(li);
  li.appendChild(completeButton);
  li.appendChild(removeButton);
  input.value = "";
});

// ====================================
// Tried to refactor.... And it worked up until I tried to appendChild.... Will revisit in the future.
// ====================================

// const createListItem = () => {
//   userInput = input.value;
//   let li = document.createElement("li");
//   li.classList.add("to-do-items");
//   li.textContent = userInput;
// };

// const createRemoveButton = () => {
//   let removeButton = document.createElement("button");
//   removeButton.innerText = "REMOVE";
//   removeButton.setAttribute("id", "remove-button");
//   removeButton.addEventListener("click", (e) => {
//     li.remove();
//     completeButton.remove();
//     e.target.remove();
//   });
// };

// const createCompleteButton = () => {
//   let completeButton = document.createElement("button");
//   completeButton.innerText = "COMPLETE";
//   completeButton.setAttribute("id", "complete-button");
//   completeButton.addEventListener("click", (e) => {
//     li.classlist.toggle("strike");
//   });
// };

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   createListItem();
//   createRemoveButton();
//   createCompleteButton();
//   ul.appendChild(li);
//   li.appendChild(completeButton);
//   li.appendChild(removeButton);
//   input.value = "";
// });
