// Eventos - inputs

const inputName = document.querySelector('input#nombre')

// inputName.placeholder = "Placeholder desde js"
// inputName.addEventListener('input', ()=>{
//     console.log('Escribiendo... (input)') // Camptura todos los eventos
// })

// inputName.addEventListener('keydown', ()=>{
//     console.log('Escribiendo... (keydown)') // Captura cuadno se presiona una letra
// })

// inputName.addEventListener('keyup', ()=>{
//     console.log('Escribiendo... (keyup)') // Captura cuando se suelta una letra
// })

inputName.addEventListener('input', e=>{
    console.log(e.target.value) // target el evento ectivado (el input en este caso) y value el valor del target (el del input en este caso)
})

const inputPass = document.querySelector('input#password')
inputPass.addEventListener('input', passFuntion)

function passFuntion(e) {
    inputPass.type = 'text';

    setTimeout(() => {
        inputPass.type = 'password';        
    }, 300);
    console.log(e.target.value)
}
