// Condidionales - Operadores

const available = 600;
const toPay = 500;
const card = true;

// if(available>toPay){
//     console.log('Puedes pagar')
// }else if(card){
//     console.log('Puedes pagar con tarjeta')    
// }
// else (
//     console.log("No puedes pagar")
// )

if (available > toPay || card) {
    console.log('Puedes pagar')
} else (
    console.log("No puedes pagar")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
)


if (available > toPay && card) {
    console.log('Puedes pagar')
} else (
    console.log("No puedes pagar")                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
)