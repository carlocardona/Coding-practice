let firstHead = document.createElement("h1");
firstHead.textContent = "Welcome to my page";
document.body.appendChild(firstHead);

firstHead.setAttribute("style","font-size: 65px; text-align: center; color: green;");

let secondHead = document.createElement("h2");
secondHead.textContent = "This HTML document was created using JavaScript and Chrome Dev Tools";
document.body.appendChild(secondHead);
secondHead.setAttribute("style", "text-align: center;");

let imgEl = document.createElement("img");
imgEl.setAttribute("src", "./image.jpg");
imgEl.setAttribute("style", "width:300px; height:200px; text-align: center;");
document.body.appendChild(imgEl);

let imgCaption = document.createElement("p");
imgCaption.textContent = "This photo makes you smile";
imgCaption.setAttribute("style", "text-align: center;");
document.body.appendChild(imgCaption);

let li1 = document.createElement("li");
li1.textContent = "Chicken Fingers";
document.body.appendChild(li1);
li1.setAttribute("style", "background-color: #585858; color:white;");


let li2 = document.createElement("li");
li2.textContent = "Pizza";
document.body.appendChild(li2);
li2.setAttribute("style", "background-color: gray; color: white;");

let li3 = document.createElement("li");
li3.textContent = "Burgers";
document.body.appendChild(li3);
li3.setAttribute("style", "background-color: #A9A9A9; color: white;");

let li4 = document.createElement("li");
li4.textContent = "Sushi";
document.body.appendChild(li4);
li4.setAttribute("style", "background-color: #D3D3D3; color: white;");

//let liTags = document.querySelectorAll("li");
//liTags.setAttribute("style", "color:blue; border:2px solid black;");