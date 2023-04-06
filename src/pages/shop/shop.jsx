import React from 'react'
import { MEATPRODUCTS } from '../../products';
import { Meat } from './meat';

export const Shop = () => {
  return (
    <div>
      <h1 className='title'>Meat Products</h1>
      <div className='meat-products'> {MEATPRODUCTS.map((meat) => (<Meat data={meat}/> ))} </div>

    </div>
  )
};