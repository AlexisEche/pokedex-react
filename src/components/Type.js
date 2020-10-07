import React from 'react';

const Type = ({ icon, type }) => {

  const pokemon = {
    type: 'fuego',
    icon: 'llamita'
  }

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          {pokemon.icon}
        </div>
        <div className="media-content">
          <div className="content">
            <p>{pokemon.type}</p>
          </div>
        </div>
      </article>

    </div>


  )

}

export default Type
