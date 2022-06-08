const person = {
    name: 'Harry',
    age: 23,
    codeName: 'Mago'
}

const { age, name, codeName, power = 'magia pura' } = person

const createHero = ({ name, age, codeName, power }) =>
  ({
      id: 2223344,
      name,
      age,
      codeName,
      power,
  })

console.log(createHero(person))
