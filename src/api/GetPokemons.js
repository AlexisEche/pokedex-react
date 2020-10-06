
import { GetAbilites } from "./GetAbilities";

export const GetPokemons = async() => {

    const url = `https://pokeapi.co/api/v2/pokemon/`;
    const res = await fetch(url);
    const {results} = await res.json();

    /* return console.log(results); */
    const pokes = results.map( poke =>{
        const imgReceived = GetAbilites(poke.url).then();
        console.log(imgReceived)
        return {
            id: poke.name,
            name: poke.name,
            image: imgReceived      
        }
    });
    //console.log(pokes)
    return pokes;

}