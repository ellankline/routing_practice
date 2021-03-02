import './App.css';
import React from 'react';
import { Router } from '@reach/router';
import Header from './components/Header'
import Home from './components/Home'
import Number from './components/Number'
import Word from './components/Word'
import Colors from './components/Colors'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Home path='/home' />
        <Number path='/4' />
        <Word path='/hello' />
        <Colors path='/hello/blue/red' />
      </Router>

    </div>
  );
}

export default App;
