let tagName = prompt("Enter an HTML tag Ex ( h1, h2, p, div )");

if (tagName != "h1" && tagName != "h2" && tagName != "p" && tagName != "div") {
  alert("enter valid choice");
} else {
  let tag = document.createElement(tagName);
  tag.textContent = "This was made via prompts It is a " + tagName;
  document.body.appendChild(tag);
}

let nextTag = confirm("would you like another?");
if (nextTag === true) {
  let secondTagName = prompt("Enter another HTML tag -> ( h1, h2, p, div ) ");
  if (
    tagName != "h1" &&
    tagName != "h2" &&
    tagName != "p" &&
    tagName != "div"
  ) {
    alert("enter valid choice");
  } else {
    let secondTag = document.createElement(secondTagName);
    secondTag.textContent =
      "This is our second tag via prompts it is a " + secondTagName;
    document.body.appendChild(secondTag);
  }
}
