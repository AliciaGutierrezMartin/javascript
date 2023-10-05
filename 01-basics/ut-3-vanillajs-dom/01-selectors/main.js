let title = document.getElementById("titulo");
console.log(title.textContent);

let paragraph = document.getElementsByClassName("parrafo");
for (let i = 0; i < paragraph.length; i++) {
    console.log(paragraph[i].textContent);
  }

let n = document.getElementsByName("nombre");
let primerElemNombre = n[0];
let valorNombre = primerElemNombre.nodeValue;

let a = document.getElementsByName("apellido");

console.log(primerElemNombre);

let elemento1 = document.getElementsByTagName("li");
for (let i = 0; i < elemento1.length; i++) {
  console.log(elemento1[i].textContent);
}

let tituloPag = document.querySelector("h1");
console.log(tituloPag.textContent);

let parrafos = document.querySelectorAll("p");
for (let i = 0; i < parrafos.length; i++) {
  console.log(parrafos[i].textContent);
}
  

