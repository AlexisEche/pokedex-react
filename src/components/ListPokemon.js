import React, { useEffect, useState } from 'react';
import { GetPokemons } from '../api/GetPokemons';
import { Pokemon } from './Pokemon';

export const ListPokemon = () => {

  const [pokemons, setPokemons] = useState([]);

  useEffect(() =>{
    GetPokemons()
      .then(setPokemons)
  },[])
  console.log(pokemons);
  return (
    <div>
      <ul>
        {
          pokemons.map(poke => {
            return <Pokemon key={poke.id} name={poke.name}/>
          })
        } 
      </ul> 
    </div>
  )
}