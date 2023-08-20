// Condicionales - operador ternario

const auth = true;

// Similar a un if con otra nomenclatura  condicion ? true : false

auth ? console.log("Estas autenticado") : console.log("No estas autenticado");


// Multiples ternarios

const available = 600;
const toPay = 500;
const card = true;

available > toPay ? console.log("Puedes pagar") : card ? console.log("Puedes pagar con tarjeta") : console.log("No puedes pagar")