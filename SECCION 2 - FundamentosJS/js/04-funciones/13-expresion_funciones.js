// Funciones - Function expresion

// function addition(num1 = 0, num2 = 0) {
//     console.log(`${num1} + ${num2} = ${result}`);
// };

// addition() // Al expresar la funcion de este modo no se puede utilizar antes de inicializarla porque se comorta como una variable
const addition = function (num1 = 0, num2 = 0) {
    return num1 + num2;
}

addition()