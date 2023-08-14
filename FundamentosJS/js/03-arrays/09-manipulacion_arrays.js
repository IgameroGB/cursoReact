// Manipulacion de arrays

const techs = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

// Añadir elementos al array
/*
techs.push('Vue'); // Añade al final del array
techs.unshift('GraphQL'); // Añade al inicio del array
// Ambos metodos modifican el array original y no deberiamos hacer eso
*/

const newTech = ['GraphQL', ...techs, 'Vue']


// Eliminar elementos del array
/*
techs.pop() // Elimina el ultimo elemento
techs.shift() // Elimina el primer elemento
techs.splice(2,1) // Elimina, emezando por el indice del rimer parametro, los X siguientes elementos indicados en el segundo parámetro
// Cuidado porque tambien modifica el array original
*/

const newTech2 = techs.filter(function(tech){
    return tech !== 'NodeJS';
})
// filter utiliza un callback para manipular el array y lo guarda en un nuevo array (por lo que no manipula el original, lo copia)

// Reemplazar el array
const newTech3 = techs.map(function(tech){
    console.log(tech)
    if(tech === 'HTML') return 'GraphQL'
    else return tech
})

// console.table(techs)
// console.table(newTech)
// console.table(newTech2)
console.table(newTech3)