import React from 'react';
import { Router } from '@reach/router';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path='/home' />
        <Home path='/:word' />
        <Home path='/:word/:font/:background' />
        <Home path='/:number' />
      </Router>

    </div>
  );
}

export default App;
