// Eventos - Generar codigo HTML

const form = document.querySelector('form#formulario')
form.addEventListener('submit', e => {
    e.preventDefault()
    const name = form.querySelector('#nombre').value;
    const pass = form.querySelector('#password').value;

    const prevAlert = document.querySelector('#alertMsg')
    if (prevAlert) {
        prevAlert.remove();
    }

    const alertMsg = document.createElement('DIV')
    alertMsg.id = "alertMsg"
    alertMsg.classList.add('alert')

    // console.log(alertMsg)

    if (name === '' || pass === '') {
        alertMsg.textContent = ("todos los campos son obligatorios")
        alertMsg.classList.add('error')
    } else {
        alertMsg.textContent = ('Enviado')
        alertMsg.classList.add('success')
    }


    form.appendChild(alertMsg)
})