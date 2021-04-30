import React from 'react';
import logo from './logo.svg';
import './App.css';
import './App.jsx';

function midnightSnack() {
  const snackname = "smoothies and fruit";
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1> {snackname} </h1>
    </div>
  );
}

const element = React.createElement(
  'h1', 
  {className: 'snackname'},
  'smoothies and fruit'
);

export default midnightSnack;
