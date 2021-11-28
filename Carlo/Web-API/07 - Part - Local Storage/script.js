const counter = document.querySelector("#counter");
const addButton = document.querySelector("#add");
const subtractButton = document.querySelector("#subtract");

let count = localStorage.getItem("count");
console.log("starting state" + count);

counter.textContent = count;

addButton.addEventListener("click", function () {
  count++;
  counter.textContent = count;

  localStorage.setItem("count", count);
});

subtractButton.addEventListener("click", function () {
  count--;
  counter.textContent = count;

  localStorage.setItem("count", count);
});
