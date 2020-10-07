import React from 'react';

export const AbilityPokemon = () => {

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-one-quarter">
          <div className="card">
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                  <figure className="image is-48x48">
                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="" />
                  </figure>
                </div>
                <div className="media-content">
                  <p className="title is-5">Ability</p>
                </div>
              </div>

              <div className="content">
                Description
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}