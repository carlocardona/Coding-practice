//var x = 0;
//document.getElementById("count").innerHTML = x;

//function button1() {
  //document.getElementById("count").innerHTML = ++x;
//}

//function button2() {
  //document.getElementById("count").innerHTML = --x;
//}

var x = 0;
var span = document.querySelector("#count"); // find the <span> element in the DOM
var increment = document.getElementById("increment"); // find the element with the ID 'increment'
var decrement = document.getElementById("decrement"); // find the element with the ID 'decrement'

increment.addEventListener("click", function () {
  // this function is executed whenever the user clicks the increment button
  span.textContent = x++;
});

decrement.addEventListener("click", function () {
  // this function is executed whenever the user clicks the decrement button
  span.textContent = x--;
});

//https://www.geeksforgeeks.org/how-to-make-incremental-and-decremental-counter-using-html-css-and-javascript/