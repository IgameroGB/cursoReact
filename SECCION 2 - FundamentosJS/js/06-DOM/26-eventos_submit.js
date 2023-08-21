// Eventos - Submit

const form = document.querySelector('form#formulario')
form.addEventListener('submit', e => {
    e.preventDefault()
    const name = form.querySelector('#nombre').value;
    const pass = form.querySelector('#password').value;
    // console.log(name)
    // console.log(pass)

    if(name === '' || pass === ''){
        console.log("todos los campos son obligatorios")
    } else {
        console.log('Enviado')
    }
})