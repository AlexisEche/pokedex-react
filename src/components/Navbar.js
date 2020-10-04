import React, { useState, useEffect } from 'react';
import '../styles/_header.scss'
import CurrentHour from './CurrentHour';

const Navbar = () => {

    return (
        <>
            <div id='navbar'>
                <h1>Pokedex</h1>
                < CurrentHour />
            </div>
        </>
    )
}

export default Navbar