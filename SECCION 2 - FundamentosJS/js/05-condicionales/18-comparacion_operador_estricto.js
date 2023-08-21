// Comparacion - operador estricto

const num1 = 20;
const num2 = "20";

if (num1 == num2) console.log(`${num1}=='${num2}'`)
else console.log(`${num1}!='${num2}'`)

if (num1 === num2) console.log(`${num1}==='${num2}'`)
else console.log(`${num1}!=='${num2}'`)

if (num1 === Number(num2)) console.log(`${num1}===Number('${num2}')`)
else console.log(`${num1}!=='${num2}'`)

if (String(num1) === num2) console.log(`String(${num1})==='${num2}'`)
else console.log(`${num1}!=='${num2}'`)


const auth = true;

if(auth === true) {
    console.log("esta autenticado")
}

if(auth) {
    console.log("lo mismo")
}