import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import 'bulma'
import PokedexApp from './PokedexApp';
import Navbar from './components/Navbar';


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <PokedexApp />

  </React.StrictMode>,
  document.getElementById('root')
);