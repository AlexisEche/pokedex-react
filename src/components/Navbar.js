import React, { useState, useEffect } from 'react';
import '../styles/Header.scss'
import CurrentHour from './CurrentHour';

const Navbar = () => {

  return (
    <div className='navbar'>
      <h1>Pokedex</h1>
      <CurrentHour />
    </div>
  )
}

export default Navbar