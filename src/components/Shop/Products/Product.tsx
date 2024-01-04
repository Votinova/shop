import { item } from "../../../types";
import React, { useContext, useState } from 'react';
import { Button } from "./Button";
import { InputAddToCart } from "./InputAddToCart";
import { ShopContext } from "../../../context/context";


export const Product = (props: {product: item}) => {

  return(
    <div className="product">
        <div>
            <img src={props.product.image} alt="Image"/>
        </div>
        <div>
            {props.product.name}
        </div>
        {props.product.showAddToCart? <InputAddToCart id={props.product.id}/> : <Button id={props.product.id}/>}
    </div>
  )
  
}
