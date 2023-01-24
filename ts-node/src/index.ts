import { Pokemon } from "./decorators/pokemon";
import { getPokemon } from "./generics/get-pokemon";

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

console.log(charmander.savePokemonToDB(500));