// Objetos - Manipulación

const product = {
    name: "Coche de lego",
    price: 49.95,
    isAvailable: true
}

// Object.freeze(product); // Evita que se manipule las proiedades del objeto
Object.seal(product); // Permite modificar las propiedades existentes. No se puede añadir ni eliminar propiedades
 
// Reescribir valor
product.name = "Tren de lego";

// Añadir nuevo valor
product.img = 'img.jpg'

// Elimiar propiedad del objeto
delete product.isAvailable

console.table(product)