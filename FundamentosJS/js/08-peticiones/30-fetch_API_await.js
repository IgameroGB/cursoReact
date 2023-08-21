// Fetch API - asyn await

const url = 'https://jsonplaceholder.typicode.com/comments'


const apiRequestAsync = async () => {
    const res = await fetch(url); // No se ejecuta la siguiente linea hasta que se completa el await
    // console.log('Despues de respuesta')
    const result = await res.json()
    // console.log('Despues de resultado')

    console.log(result);
}

apiRequestAsync();

