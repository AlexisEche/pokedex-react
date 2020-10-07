import React from 'react';

export const Pokemon = ({ id, name, image }) => {

  return (
    <div className="card">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src={image} alt="" />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-5">{name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}