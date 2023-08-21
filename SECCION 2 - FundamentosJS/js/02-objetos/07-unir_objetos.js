// Objetos - Unir dops o mas objetos


const product = {
    name: "Coche de lego",
    price: 49.95,
    isAvailable: true
}

const client = {
    name: "Iván",
    isPremium: true
}

const newObject = Object.assign(product, client); // En caso que las key del objeto coincidad (name) sobreescribe con la ultima modificando el objeto origen
const newObject2 = { ...product, ...client }; // Sobreescribe las keys iguales pero no modifican los objetos originales


const newObject3 = {
    product: { ...product },
    client: { ...client }
}

console.log(newObject3)