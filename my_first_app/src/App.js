import React from 'react';
import logo from './logo.svg';
import './App.css';

function Snack() {
  const midnight_snack = "smoothies & fruit";
  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    > {midnight_snack} </div>
  );
}

export default Snack;
