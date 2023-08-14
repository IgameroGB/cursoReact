// Objetos - Desestructurig con 2 o mas objetos

const product = {
    name: "Coche de lego",
    price: 49.95,
    isAvailable: true
}

const client = {
    name: "Iván",
    isPremium: true
}

const { name, price, isAvailable } = product;
const { name: clientName, isPremium } = client; // Asigna un alias para evitar la dulicidad de "name"

console.log(name, price, isAvailable)
console.log(clientName, isPremium)