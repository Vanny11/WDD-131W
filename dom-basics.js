const newSection = document.createElement("section");
const newHeading = document.createElement("h2");
newHeading.innerText = "DOM Basics";
newSection.appendChild(newHeading);
const newParagraph = document.createElement("p");
newParagraph.innerText = "This was added through Javascript";
newSection.appendChild(newParagraph);
document.body.appendChild(newSection);
