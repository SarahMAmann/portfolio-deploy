import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <Link to="/work">
      <p className="App-link">WORK</p>
    </Link>
  );
}

export default Nav;