// Funciones - Function declaration

dummyFuntion(); // Una funcion puede ser llamada antes de declararse en JS porque js registra todas las funciones al iniciar el programa
function dummyFuntion() {
    console.log('im a funtion');
}
dummyFuntion();

function addition(num1 = 0, num2 = 0) {
    const result = num1 + num2
    console.log(`${num1} + ${num2} = ${result}`);
    return result;
};

addition(2, 5)
