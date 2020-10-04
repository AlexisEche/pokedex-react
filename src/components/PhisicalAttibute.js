import React from 'react';

const PhisicalAttibute = ({ title, value }) => {

  return (
    <div className="panel is-primary">
      <p className="panel-heading">
        <i className="fas fa-book" aria-hidden="true"></i>
        {title}
      </p>
      <a className="panel-block is-active" href="#">
        <span className="panel-icon">
        </span> {value}
      </a>
    </div>
  );
}

export default PhisicalAttibute;
