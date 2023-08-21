// Condicionales

let available = 4000;
let withdraw = 20000;

const withdrawMoney = () => {
    if (available >= withdraw) {
        available = available - withdraw
        console.log('Te quedan ' + available)
    }
    else (
        console.log("No puedes retirar " + withdraw + ", solo te quedan " + available)
    )
}

