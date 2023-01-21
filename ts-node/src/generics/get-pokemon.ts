import axios from 'axios';

export const getPokemon = async(pokemonId: number) => {
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    console.log(resp)
}