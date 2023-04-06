import React, {useContext} from 'react';
import { ShopContext } from '../../context/shop-context';
import "./cart.css"

export const CartItem = (props) => {
    const {id, meatPName, price, per, meatImage} = props.data;
    const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  return (
    <div className='cartItem'>
        <img src={meatImage}/>
        <div className='description'>
            <p><b>{meatPName}</b></p>
            <p> ${price} per {per}</p>
            <div className='countHandler'>
              <button className='pls-btn' onClick={() => removeFromCart(id)}> - </button>
              <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}/>
              <button className='mns-btn' onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
        </div>
  )
}
