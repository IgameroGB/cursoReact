// DOM - Manipular elementos HTML

const h2 = document.querySelector('h2');
heading.textContent = "Nueva cabecera"
console.log(heading.textContent)

const inputName = document.querySelector('input#nombre')
inputName.value = "Valor por default"
console.log(inputName)

const links = document.querySelectorAll('.navegacion a');

links.forEach((link, i) => link.textContent = 'link ' + (i + 1));