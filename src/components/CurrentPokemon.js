import React from 'react';
import { HeaderPokemon } from './HeaderPokemon';
import BoxAnatomy from './BoxAnatomy';

export const CurrentPokemon = ({ namePokemon }) => {

  const pokemon = {
    number: "001",
    name: "Totodile",
    mainType: "Some main type"
  }

  return (
    <div className="container">
      <HeaderPokemon
        number={pokemon.number}
        name={pokemon.name}
        mainType={pokemon.mainType}
      />
      <div class="columns">
        <div class="column is-2">
          <BoxAnatomy />
        </div>
        <div class="column is-8">
          Totodile Image
        </div>
        <div class="column is-2">
          Types
        </div>
      </div>
      <div class="columns">
        <div class="column">
        Abilities
          </div>
      </div>
    </div>
  )
}