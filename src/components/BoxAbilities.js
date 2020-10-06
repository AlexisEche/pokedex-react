import React from 'react';
import { AbilityPokemon } from './AbilityPokemon';

export const BoxAbilities = () => {

    return(
      <div className="panel is-primary">
      <p className="panel-heading">
        <i className="fas fa-book" aria-hidden="true"></i>
        Habilidades
      </p>
      <div>
        <AbilityPokemon />
      </div>
    </div>
    );
}