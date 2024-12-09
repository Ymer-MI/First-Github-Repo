import `./style.css`;

const h1 = document.createElement("h1");
h1.innerHTML = "Hello World!";

document.getElementById("app")?.appendChild(h1);