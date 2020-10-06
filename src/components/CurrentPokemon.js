import React from 'react';
import { HeaderPokemon } from './HeaderPokemon';
import BoxAnatomy from './BoxAnatomy';
import { BoxAbilities } from './BoxAbilities';

export const CurrentPokemon = ({ namePokemon }) => {

  const pokemon = {
    number: "001",
    name: "Totodile",
    mainType: "Some main type"
  }

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-12">
          <HeaderPokemon
            number={pokemon.number}
            name={pokemon.name}
            mainType={pokemon.mainType}
          />
        </div>
      </div>
      <div className="container">
        <div className="columns">
          <div className="column is-3">
            <BoxAnatomy />
          </div>
          <div className="column is-7">
            Totodile Image
        </div>
          <div className="column is-2">
            Types
        </div>
        </div>
      </div>
      <div className="columns">
        <div className="column">
          <BoxAbilities />
        </div>
      </div>
    </div>
  )
}