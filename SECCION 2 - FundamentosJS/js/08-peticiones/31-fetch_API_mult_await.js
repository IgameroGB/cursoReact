// Fetch API - asyn await llamadas multiples simultaneas

const urlComments = 'https://jsonplaceholder.typicode.com/comments'
const urlImg = 'https://jsonplaceholder.typicode.com/photos'


const apiRequestAsync = async () => {

    const start = performance.now()
    const res = await fetch(urlComments);
    const result = await res.json()

    const res2 = await fetch(urlImg);
    const result2 = await res2.json()

    // console.log(result);
    // console.log(result2);

    const end = performance.now()

    console.log(`ejecucion PRIMER async: ${end - start} ms`)
}

apiRequestAsync();

const apiRequestAsync2 = async () => {

    const start = performance.now()
    const [resComments, resImg] = await Promise.all([fetch(urlComments), fetch(urlImg)])

    const resultComments = await resComments.json()
    const resultImg = await resImg.json()

    // console.log(resultComments)
    // console.log(resultImg)


    const end = performance.now()

    console.log(`ejecucion SEGUNDO async: ${end - start} ms`)
}
apiRequestAsync2();


