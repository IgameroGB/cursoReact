// Funciones - funciones flecha en arrays

const techs = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

const newTech = techs.map(tech => {
    if (tech === 'HTML') return 'GraphQL'
    else return tech
})

const newTech2 = techs.filter(tech => tech === 'React');

console.log(newTech)
console.log(newTech2)
