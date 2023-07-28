import {Pokemon} from './pokemon.js'
import {Combat} from './combat.js'
import {pokeList} from './pokedeck.js'

const main = document.getElementById('pkGame')

let random = Math.floor(Math.random() * pokeList.length)
let pok1 = new Pokemon(pokeList[random])

random = Math.floor(Math.random() * pokeList.length)
let pok2 = new Pokemon(pokeList[random])


let fight = new Combat(main, pok1, pok2)

fight.generate()



