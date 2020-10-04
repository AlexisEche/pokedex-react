import React from 'react';
import PropTypes from 'prop-types';

import './../styles/HeaderPokemon.sass';

export const HeaderPokemon = ({ number, name, mainType }) => {
  return (
    <div className="container is-fullhd mb4">
      <div className="notification is-primary not-rounded pb0">
        <div className="columns">
          <div className="column is-3">
            <h5 className="title is-5">N° {number}</h5>
          </div>
          <div className="column is-4">
            <h6 className="title is-6">{name}</h6>
          </div>
          <div className="column is-3 ">
            <span>{mainType}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

HeaderPokemon.propTypes = {
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  mainType: PropTypes.string.isRequired,
}