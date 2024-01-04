import { useContext } from 'react';
import './InputAddToCart.css';
import { ShopContext } from '../../../context/context';

export const InputAddToCart = (props: {id: number}) => {
  const {productCart, addToCart, removeToCart} = useContext(ShopContext);
  return (
    <div className='AddInputButton'>
        <button title="выбрать" className='buttonInput' onClick={() => removeToCart(props.id)}>
            -
        </button>
        <div className='inputAdd'>
          {productCart[props.id]}
        </div>
        <button title="выбрать" className='buttonInput' onClick={() => {addToCart(props.id)}}>
            +
        </button>
    </div>
  )
}
