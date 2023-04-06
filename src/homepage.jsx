import React from 'react'
import "./homepage.css";
import {Link} from "react-router-dom";
import { CATEGORIES } from './categories';
import {Category} from "./pages/shop/category";



export const Homepage = () => {
  return (
    <div className='hometxt'>
      <h1> RL MeatShop </h1>
      <h1>Where Shopping Meat Online Made Possible! </h1>
    <div className='categories'> {CATEGORIES.map((category) => (<Category data={category}/> ))} </div>
    <Link to="/shop"><button className='shop-btn'><h3>Clike Here To Shop Now</h3></button></Link>
    </div>
  )
};