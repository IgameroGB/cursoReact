const techs = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
const numbers = [10, 20, 30]

let newArray;

// Comprobar si un elemento existe en el array
const includesArr = techs.includes('React');

// Some - devuelve si al menos uno cumple la condicion
const someArr = numbers.some(number => number > 15)

// Find - devuelve el primer elemento que cumpla la condicion
const findArr = numbers.find(number => number > 15)

// Every - devuelve como bool si todos los elementos cumplen la codicion
const everyArr = numbers.every(number => number > 15)

// Reduce - acumula el valor de los numeros del array
const reduceArr = numbers.reduce((total, number) => number + total, 0)

// Filter - crea un nuevo array en base a una condicion
const filterArr = techs.filter(tech => tech === 'NodeJS')
const filterArr2 = numbers.filter(number => number < 15);

// forEach
forEachArr = techs.forEach(tech => {
    console.log(tech);
})

// map
const mapArr = techs.map(tech => tech)

console.log(includesArr)
console.log(someArr)
console.log(findArr)
console.log(everyArr)
console.log(reduceArr)
console.log(filterArr)
console.log(filterArr2)
console.log(mapArr)

