import React, { createContext, useState } from 'react'
import {MEATPRODUCTS} from "../products";


export const ShopContext = createContext(null);

const GetDefaultCart = () => {
    let cart = {};
    for (let i=1; i < MEATPRODUCTS.length + 1; i++) {
        cart [i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(GetDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems ((prev) => ({...prev,[itemId]:newAmount}))
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0) {
                let itemInfo = MEATPRODUCTS.find((meat) => meat.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }return totalAmount;
    }
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount} 
    
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
