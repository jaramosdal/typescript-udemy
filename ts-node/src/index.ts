import { getPokemon } from "./generics/get-pokemon";

getPokemon(4)
    .then(resp => console.log(resp))
    .catch(error => console.error(error))
    .finally(() => console.log('Fin de getPokemon.'))