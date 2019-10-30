import React from 'react';
import './App.css';
import signaturetitle from './signaturetitleEDIT.png'

function Title() {
  return (
    <div>
    <img src={signaturetitle} className="App-logo" alt="logo" />
    <p className="subtitle">i build stuff</p>
    </div>
  );
}

export default Title;