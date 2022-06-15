//console.log('Hola!!')

// 1° tipo de exportación:
import { owners } from "./data/heroes";

//desestructuración:
const [ dc, mv ] = owners

console.log( dc )
console.log(mv)
console.log(owners);

// 2° tipo de exportación pero por defecto con Vue:
import superHeroes from './data/heroes' // superHeroes o cualquier nombre

console.log(superHeroes)


//import heroes, { owners } from "./data/heroes";
//heroes


//1° parte = getHeroById(id) debe ser arrow function y utilizar el find

// const getHeroById =  (id) => {
//   return superHeroes.find(hero => hero.id === id)
// }
const getHeroById =  (id) => superHeroes.find(hero => hero.id === id)

console.log(getHeroById(2))


//2° parte = getHeroesByOwner 'DC', 'Marvel'
//console.log(getHeroesByOwner('DC')) []
const getHeroesByOwner =  (owner) => {
  return superHeroes.filter(owner => owner.name === name)
}
console.log(getHeroesByOwner('DC'))

//const getHeroesByOwner =  (owner) => superHeroes.filter(owner => owner.name === name)
