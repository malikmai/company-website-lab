import React from "react";
// import './Menu.css';

function Menu() {
  return (
    <div className="menuSection">
      <h2>Featured Coffee</h2>
      <ul>
        <li>Starbies Signature Blend - $4.99</li>
        <li>Vanilla Latte - $5.99</li>
        <li>Caramel Macchiato - $6.99</li>
        <li>Choca Mocha Latte - $6.99</li>
      </ul>
      <h2>Pastries</h2>
      <ul>
        <li>Crossaint - $4.99</li>
        <li>Donuts - $2.99</li>
        <li>Chef's Breakast Sandwhich - $9.99</li>
        <li>Muffins - $2.99</li>
      </ul>
    </div>
  );
}

export default Menu;
