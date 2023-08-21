// Objetos

const product = {
    name: "Coche de lego",
    price: 49.95,
    isAvailable: true
}

console.log(product);
console.table(product); // Muestra el dato como una tabla

console.log('El producto ' +  product.name + ' tiene un precio de ' + product.price + '€.');
console.log(`El producto ${product.name} tiene un precio de ${product.price}€.`);

// Destructuring
const { name, img } = product; // A pesar de no existir img en el objeto, se crea y se asigna como undefined

console.log(name, img);

// Object Literal Enhacement
const isAuth = true;
const user = "Iván";

const newUser = {
    isAuth : isAuth, // como el nombre y el valor tienen el mismo nombre se considera redundante y no es necesario repetirlo
    user
}

console.log(newUser);