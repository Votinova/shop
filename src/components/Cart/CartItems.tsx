import React from 'react';
import { item } from '../../types';
import { InputAddToCart } from '../Shop/Products/InputAddToCart';


export const CartItems = (props: {product: item}) => {
  return (
   <div className='productCart'>
        <div className='cartItem'>
            <img src={props.product.image} alt="Image"/>
            {props.product.name}
        </div>
        <div className='price'>
             Цена:{props.product.price}
            <InputAddToCart id={props.product.id}/>
        </div>
   </div>
  )
}
