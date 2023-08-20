//Imports y exports

function addition(num1 = 0, num2 = 0) {
    const result = num1 + num2;
    return result;
};

function subtract(num1 = 0, num2 = 0) {
    const result = num1 - num2;
    return result;
};

export {
    addition,
    subtract
}

export default addition
