import React from 'react';
// import logo from './logo.svg';
import signaturetitle from './signaturetitleEDIT.png'
import './App.css';
import Nav from './Nav';
import Work from './Work';
import Title from './Title';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <body className="App-header">
        <Route path="/" exact component={Title} />
        <Route path="/" exact component={Nav} />
        <Route path="/work" component={Work}/>
      </body>
    </div>
    </Router>
  );
}

export default App;
