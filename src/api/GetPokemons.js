
import { GetImages } from "./GetImages";

export const GetPokemons = async () => {

  const url = `https://pokeapi.co/api/v2/pokemon/`;
  const res = await fetch(url);
  const { results } = await res.json();
  let pokes = [];

  for (const poke of results) {
    const imgReceived = await GetImages(poke.url);
    pokes.push({
      id: poke.name,
      name: poke.name,
      image: imgReceived,
    });
  }
  return pokes;