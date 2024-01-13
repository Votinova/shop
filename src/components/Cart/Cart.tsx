import React, { useContext } from 'react'
import { PRODUCTS } from '../../products'
import { CartItems } from './CartItems';
import { item } from '../../types';
import './Cart.css';
import { ShopContext } from '../../context/context';
import { ButtonMakeOrder } from './ButtonMakeOrder';

export const Cart = () => {
  const {productCart} = useContext(ShopContext)
  return (
    <div className='cart'>
      {PRODUCTS.map((product: item) => {
        if (productCart[product.id] !== 0) {
          return <CartItems product={product} key={product.id}/>
        }
      })}

      <ButtonMakeOrder />
    </div>
    )

}
