//alert("Hello world!");
const x = window.location;
console.log(x);
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get("title");
const cost = urlParams.get("cost");
const src = urlParams.get("src");
console.log(title, cost, src);
//alert(`Title: ${title} cost: ${cost} path: ${src}`);

const container = document.createElement("div");
container.className = "itemContainer";

const image = document.createElement("img");
image.src = src;
image.className = "item__image";

const titleElement = document.createElement("h2");
titleElement.textContent = title;
titleElement.className = "item__title";

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const textElement = document.createElement("p");
textElement.textContent = description;
textElement.className = "item__description";

const costElement = document.createElement("div");
costElement.textContent = cost;
costElement.className = "item__cost";

console.log("image", image);

container.append(titleElement);
container.append(image);
container.append(textElement);
container.append(costElement);

window.addEventListener("load", () => {
    const app = document.getElementById("item-body");
    app.append(container);
});