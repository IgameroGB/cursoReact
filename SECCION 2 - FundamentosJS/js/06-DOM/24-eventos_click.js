// Eventos - click

const heading = document.querySelector('.heading');
// heading.addEventListener('click', function () {
//     console.log('click con funcion integrada en parametro')
// })

heading.addEventListener('click', () => {
    heading.textContent = "Nueva cabecera"
    // console.log('click con calback')
    console.log('click ')
})

// heading.addEventListener('click', pressH2)

// function pressH2() {
//     console.log('click con funcion')
// }


const links = document.querySelectorAll('.navegacion a');
links.forEach((link, i) => link.addEventListener('click', () => link.textContent = 'clickado!!'));