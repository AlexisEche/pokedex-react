import React, { useEffect, useState } from 'react';
import { GetPokemons } from '../api/GetPokemons';
import { Pokemon } from './Pokemon';

export const ListPokemon = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    GetPokemons()
      .then(setPokemons)
  }, []);

  return (
    <div>
      <ul>
        {
          pokemons.map(poke => (
            <Pokemon key={poke.id} name={poke.name} image={poke.image} />
          ))
        }
      </ul>
    </div>
  )
}