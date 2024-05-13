import React from 'react';
import './Drinks.css';

function Drinks() {
  return (
    <div className="menuSection">
      <h2>Featured Coffee</h2>
      <ul className='drinkUl'>
        <li className='drinksLi'><span className="itemName">Starbies Signature Blend</span><span className="itemPrice">$4.00</span></li>
        <li className='drinksLi'><span className="itemName">Vanilla Latte</span><span className="itemPrice">$4.50</span></li>
        <li className='drinksLi'><span className="itemName">Caramel Macchiato</span><span className="itemPrice">$4.75</span></li>
        <li className='drinksLi'><span className="itemName">Espresso</span><span className="itemPrice">$3.50</span></li>
        <li className='drinksLi'><span className="itemName">Mocha</span><span className="itemPrice">$4.00</span></li>
        <li className='drinksLi'><span className="itemName">Americano</span><span className="itemPrice">$3.00</span></li>
        <li className='drinksLi'><span className="itemName">Flat White</span><span className="itemPrice">$3.75</span></li>
        <li className='drinksLi'><span className="itemName">Cappuccino</span><span className="itemPrice">$4.00</span></li>
        <li className='drinksLi'><span className="itemName">Latte</span><span className="itemPrice">$3.75</span></li>
        <li className='drinksLi'><span className="itemName">Iced Coffee</span><span className="itemPrice">$3.50</span></li>
        <li className='drinksLi'><span className="itemName">Cold Brew</span><span className="itemPrice">$4.25</span></li>
        <li className='drinksLi'><span className="itemName">Nitro Brew</span><span className="itemPrice">$5.00</span></li>
      </ul>
      <h2>Pastries and More</h2>
      <ul>
        <li className='drinksLi'><span className="itemName">Croissant</span><span className="itemPrice">$2.50</span></li>
        <li className='drinksLi'><span className="itemName">Banana Bread</span><span className="itemPrice">$3.00</span></li>
        <li className='drinksLi'><span className="itemName">Blueberry Muffin</span><span className="itemPrice">$3.25</span></li>
        <li className='drinksLi'><span className="itemName">Chocolate Chip Cookie</span><span className="itemPrice">$2.00</span></li>
        <li className='drinksLi'><span className="itemName">Cinnamon Roll</span><span className="itemPrice">$3.50</span></li>
        <li className='drinksLi'><span className="itemName">Scone</span><span className="itemPrice">$2.75</span></li>
        <li className='drinksLi'><span className="itemName">Bagel with Cream Cheese</span><span className="itemPrice">$3.50</span></li>
        <li className='drinksLi'><span className="itemName">Ham and Cheese Croissant</span><span className="itemPrice">$4.00</span></li>
        <li className='drinksLi'><span className="itemName">Vegan Wrap</span><span className="itemPrice">$4.50</span></li>
        <li className='drinksLi'><span className="itemName">Gluten-Free Brownie</span><span className="itemPrice">$3.00</span></li>
        <li className='drinksLi'><span className="itemName">Fruit Tart</span><span className="itemPrice">$4.25</span></li>
        <li className='drinksLi'><span className="itemName">Apple Turnover</span><span className="itemPrice">$2.75</span></li>
      </ul>
    </div>
  );
}

export default Drinks;
