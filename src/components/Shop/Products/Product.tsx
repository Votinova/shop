import { item } from "../../../types";
import React, { useContext, useState } from 'react';
import { Button } from "./Button";
import { InputAddToCart } from "./InputAddToCart";
import { ShopContext } from "../../../context/context";


export const Product = (props: {product: item}) => {

  return(
    <div className="product">
            <img src={props.product.image} alt="Image"/>
            {props.product.name}
            {props.product.price}
        {props.product.showAddToCart? <InputAddToCart id={props.product.id}/> : <Button id={props.product.id}/>}
    </div>
  )
  
}
