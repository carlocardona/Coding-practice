let myMain=document.querySelectorAll("main");
let divTags = document.querySelectorAll("div");
let aTags = document.querySelectorAll("a");
let imgEl = document.querySelectorAll("img");

for (let i = 0; i < aTags.length; i++) {
    aTags[i].setAttribute("href", "https://github.com/");
  }

  for (let x = 0; x < imgEl.length; x++) {
    imgEl[x].setAttribute("src", "images");
  }



//aTags[0].setAttribute("href", "https://github.com/");
//imgEl.children[0].setAttribute("src", "images/image_2");
//imgEl[0].setAttribute("style", "width:500px; height:200px;");

//aTags.children[1].setAttribute("href", "https://github.com/");
//imgEl.children[1].setAttribute("src", "images/image_2.jpg");
//imgEl[1].setAttribute("style", "width:500px; height:200px;");

//aTags.children[2].setAttribute("href", "https://github.com/");
//imgEl.children[2].setAttribute("src", "images/image_3.jpg");
//imgEl[2].setAttribute("style", "width:500px; height:200px;");

