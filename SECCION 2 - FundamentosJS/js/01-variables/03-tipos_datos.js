// Tipos de datos

// Undefined
let undefinedVar;

console.log(undefinedVar, typeof (undefinedVar));

// Boolean
let boolVar = true;

console.log(boolVar, typeof (boolVar));

// Number
let numberVar1 = 10;
let numberVar2 = -10;
let numberVar3 = 1.1;

console.log(numberVar1, typeof (numberVar1), numberVar2, typeof (numberVar2), numberVar3, typeof (numberVar3));

// String
let stringVar1 = "Esto es un string o cadena";
let stringVar2 = 'Esto tambien';

console.log(stringVar1, typeof (stringVar1));
console.log(stringVar2, typeof (stringVar2));

// BigInt
let bigIntVar = BigInt(3.98e12);
// No se puede interactuar directamente un int con un BigInt

console.log(bigIntVar, typeof (bigIntVar));

// Symbol
const firstSymbol = Symbol(30);
const secondSymbol = Symbol(30);

console.log(firstSymbol.valueOf())
console.log(secondSymbol.valueOf())

console.log(firstSymbol === secondSymbol); // Es falso a pesar de ser iguales porque Symbol es unico

// Null
const discount = null;

console.log(typeof(discount)); // Array, map, date, etc. tambien so obetos

