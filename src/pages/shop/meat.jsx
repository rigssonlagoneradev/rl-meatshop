import React, { useContext } from 'react'
import "./meat.css";
import Card from 'react-bootstrap/Card';
import {ShopContext} from "../../context/shop-context"

export const Meat = (props) => {
    const {id, meatPName, price, per, meatImage} = props.data;
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id];
    return (
        <div className='product-wrapper'>
            <Card className="product-card" style={{ width: '18rem' }}>
            <Card.Title><h1>{meatPName}</h1></Card.Title>
            <Card.Img variant="top" className="prod-img" src={meatImage} alt="prod-img" />
            <Card.Body className="product-body">
            <Card.Text className='price-tag'>
            <p><b> ${price} per {per}</b></p>
            <button className='atc' onClick={() =>addToCart(id)}><b>Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</b></button>
            </Card.Text>
            </Card.Body>
            </Card>
        </div>
      
    )
  };