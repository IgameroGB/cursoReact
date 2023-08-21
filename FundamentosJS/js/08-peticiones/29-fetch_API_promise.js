// Fetch API - promise

const url = 'https://jsonplaceholder.typicode.com/comments'

const apiRequest1 = () => {
    fetch(url)
        .then((res) => {
            console.log('haciendo fetch...')
            // console.log(res)
            return res.json() // se pasa a json y despues se ejecuta el then de abajo
        })
        .then((res) => {
            // console.log("Resultado casi listo")
            // console.log(res)
            listResult(res)

        })
}

// el de arriba y el de abajo son lo mismo pero con codigo mas compacto

const apiRequest2 = () => {
    fetch(url)
        .then(res => res.json()) // se pasa a json y despues se ejecuta el then de abajo)
        .then(res => listResult(res))
}

apiRequest2();
function listResult(res = Object) {
    res.forEach((eachRes) => { console.log(eachRes) })
}

