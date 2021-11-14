const listEl = document.querySelector("#grocery-list");
const shoppingCartEl = document.querySelector("#shopping-cart");

const groceries = ["bananas", "apples", "oranges", "grapes", "blueberries"];

listEl.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e); //this is the object action that is returned which then allows you to access the dom elements.
  console.log("Item Clicked ID -> " + e.target.parentElement.id);
  if (e.target.matches("button")) {
    const item = document.createElement("div");
    item.textContent = groceries[e.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});
