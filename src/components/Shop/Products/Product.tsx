import { item } from "../../../types";
import React from 'react';
import { Button } from "./Button";

export const Product = (props: {product: item}) => {

  return(
    <div className="product">
        <div>
            <img src={props.product.image} alt="Image"/>
        </div>
        <div>
            {props.product.name}
        </div>
        <Button />    
    </div>
  )
  
}
