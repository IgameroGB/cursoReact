// Scope - alcance de las variables

const price = 300; // variable global

// const price = 200; // No se puede llamar a a dos variables del mismo modo

const myFunction = () => {
    const price = 600; // Aqui si puede duplicarse el nombre poque "price" de la ln 3 y este NO SON EL MISMO y estan en ambitos distintos
    // Variable local dentor del entorno de esta funcion, solo existe aqui. si deja de existir busca el global
    console.log(price) // En caso de no existir toma el valor de la ln 3 porque es de ambito global
}

myFunction();
console.log(price)