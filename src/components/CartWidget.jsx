import React from 'react';
import { useContext } from 'react';
import { cartContext } from '../context/cartContext';

const CartWidget = () => {
  const { countCartItems }=useContext(cartContext)
  return (
    
      
      <span>🛒{countCartItems()}</span>
    
  );
};

export default CartWidget;