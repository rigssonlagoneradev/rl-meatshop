import React, { useContext } from 'react'
import "./cart.css";
import { MEATPRODUCTS } from '../../products';
import { ShopContext } from "../../context/shop-context";
import { CartItem } from './cart-item';
import { Link } from "react-router-dom";
import emptycart from "../../assets/emptycart.png";

export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {MEATPRODUCTS.map((meat) => {
          if (cartItems[meat.id] !== 0) {
            return <CartItem data={meat}/>
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className='checkout'>
        <div className='subtotal'> <p><b>Subtotal: ${totalAmount}</b></p> </div>
          <Link to="/shop"><button className='ctn-shopping'>Continue Shopping</button></Link>
          <button className='chk-out'>Checkout</button>
        </div>
      ) : (
      <div className='cart-container'>
        <h3>Your Cart Looks Empty</h3>
        <img src={emptycart} alt="empty-cart"/>
        <Link to="/shop"><button className='ctn-shopping'><p>Shop Now</p></button></Link>
      </div>
      )}
      
      </div>
  )
};