import React, { useContext } from 'react'
import { ShopContext } from '../../../context/context'

export const Button = (props: {id: number}) => {
  const {addToCart, productCart} = useContext(ShopContext);

  return (
    <button className='button' onClick={()=> addToCart(props.id)}>
        Добавить в корзину 
    </button>
  
  )
}
