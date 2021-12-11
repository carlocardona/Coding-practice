var timeEl = document.querySelector(".time"); //line 17
var mainEl = document.getElementById("main"); 
let bodyEl = document.createElement("div"); //connecting div to the back line 32


var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
//split sentence into words
var words = poem.split(" ");
for (var i = 0; i < words.length - 1; i++) {
    words[i] += " ";
}
//console.log(words);

var secondsLeft = 5;

let usersInput = prompt ("How many seconds do you need to see the next word?", "1000" );

function prepareRead() {
  var timerInterval = setInterval(function() {
    timeEl.textContent = secondsLeft + " seconds left till poem appears.";
    secondsLeft--;
    if(secondsLeft === 0) {
      timeEl.textContent = " ";
      clearInterval(timerInterval);
      speedRead();
    }
  }, 1000);
}

let myInterval;

function speedRead() {

myInterval = setInterval (poemInterval, usersInput);
}
function poemInterval() {
  alert(poem);
}
prepareRead();

