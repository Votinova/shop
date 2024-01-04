import React, { useContext } from 'react';
import { PRODUCTS } from '../../../products';
import { item } from '../../../types';
import { Product } from './Product';
import './products.css';
import { ShopContext } from '../../../context/context';
import { InputAddToCart } from './InputAddToCart';
import { Button } from './Button';


export const Products = () => {
  const {searchTerm} = useContext(ShopContext);
  return (
    <div className='products'>
       {PRODUCTS.filter(item => 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())).map((product: item) => {        
          return (   
            <Product  key={product.id}  product={product}/>
          )        
       })
       }
    </div>
  )
}
