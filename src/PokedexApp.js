import React, { useState } from 'react';

import Navbar from './components/Navbar';
import { CurrentPokemon } from './components/CurrentPokemon';
import { ListPokemon } from './components/ListPokemon';

const PokedexApp = () => {
  const [selectedPokemon, setSelectedPokemon] = useState("totodile");

  return (
    <div>
      <Navbar />    
      <div className="columns">
        <div className="column is-8">
          <CurrentPokemon namePokemon={selectedPokemon} />
        </div>
        <div className="column is-4">
          <ListPokemon setSelectedPokemon={setSelectedPokemon} />
        </div>
      </div>
    </div>
  )
}

export default PokedexApp;