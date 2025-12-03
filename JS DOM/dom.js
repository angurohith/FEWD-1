//first element child only works if there's no extra whitespace after the parent element in the html file
// if there's a whitespace, or newline, empty spaces will be printed

// you should us .firstElementChild instead of .firstChild to avoid whitespace issues

const container1 = document.getElementById("container");

const headingEl  = container1.firstChild;
console.log("heading:", headingEl.textContent); // Should log: #text

console.log("hello world");


// DOM Manipulation Examples

// ways to access elements:
// 1. document.getElementById(id)
// 2. document.getElementsByClassName(className)
// 3. document.getElementsByTagName(tagName)
// 4. document.querySelector(selector) - returns first match
// 5. document.querySelectorAll(selector) - returns all matches as NodeList

const container = document.getElementById('myDiv');
const para = document.getElementsByClassName('para');
const paragraphs = document.getElementsByTagName('p');
const firstPara = document.querySelector('.para');
const allPara = document.querySelectorAll('.para');
// ways to manipulate elements:
// 1. element.textContent = "new text" - changes text inside element
// 2. element.innerHTML = "<span>new html</span>" - changes html inside element
// 3. element.style.property = "value" - changes css style
// 4. element.setAttribute(name, value) - sets attribute
// 5. element.getAttribute(name) - gets the value of an attribute 

container.textContent = "This is the updated text for the div.";
para[0].innerHTML = "<span>This is the updated HTML for the first paragraph.</span>";
firstPara.style.color = "blue";
for (let p of allPara) {
    p.style.fontWeight = "bold";
}
container.setAttribute('data-info', 'example');
const info = container.getAttribute('data-info');
console.log(info); // Outputs: example

// ways to create and insert elements:
// 1. document.createElement(tagName) - creates a new element
// 2. parentElement.appendChild(childElement) - appends child to parent
// 3. parentElement.insertBefore(newElement, referenceElement) - inserts newElement before referenceElement
// 4. element.remove() - removes the element from the DOM

const newPara = document.createElement('p');
newPara.textContent = "This is a new paragraph.";
container.appendChild(newPara);

// using insertBefore
const anotherPara = document.createElement('p');
anotherPara.textContent = "This paragraph is inserted before the new paragraph.";
container.insertBefore(anotherPara, newPara);

// removing an element
anotherPara.remove();

// replacing an element
const replacementPara = document.createElement('p');
replacementPara.textContent = "This paragraph replaces the new paragraph.";
container.replaceChild(replacementPara, newPara);

// adding and removing event listeners:
// 1. element.addEventListener(event, function) - adds an event listener
// 2. element.removeEventListener(event, function) - removes an event listener

const button = document.getElementById('myButton');
function handleClick() {
    alert("Button clicked!");
}

button.addEventListener("click", handleClick);
// To remove the event listener, you would use:
// button.removeEventListener("click", handleClick);


