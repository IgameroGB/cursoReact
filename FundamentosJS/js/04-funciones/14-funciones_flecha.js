// Funciones - Arrow function

const addition = (num1 = 0, num2 = 0) => {
    // console.log(`${num1} + ${num2} = ${num1 + num2}`);
    return num1 + num2
}

const addition2 = (num1 = 0, num2 = 0) => num1 + num2 // ambas funciones son identicas 

const result = addition(13,1);

console.log(result);
