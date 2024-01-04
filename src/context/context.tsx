import React, { useState, createContext }  from 'react';
import { typesContext, item } from '../types';
import { PRODUCTS } from '../products';

type CountProviderProps = {children: React.ReactNode};

export const ShopContext = createContext <typesContext> ({productCart: [], searchTerm: '', setSearchTerm: (searchTerm: string) => {}, clickAddToCart: false, setClickAddToCart: (clickAddToCart: boolean) => {}, addToCart: (itemId: number) => {}, removeToCart: (itemId: number) => {} });
const getDefaultCart: () => number [] = () => {
    let cart = []
    for (let i = 0; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const ShopContextProvider = (props: CountProviderProps) => {
    const [clickAddToCart, setClickAddToCart] = useState(false);
    const [productCart, setProductCart] = useState <number[]>(getDefaultCart());
    const [searchTerm, setSearchTerm] = useState('');

    const addToCart = (itemId: number) => {
        setProductCart((prev: number[]) => ({
            ...prev,  [itemId]: prev[itemId] + 1
        }))
        for (let item of PRODUCTS) {
            if (item.id === itemId) {
                item.showAddToCart = productCart[itemId] > -1 ? true : false;
            }
        }
        console.log(productCart[itemId])
    }
    
    const removeToCart = (itemId: number) => {
            setProductCart((prev: number []) => ({
                ...prev, [itemId]: prev[itemId] - 1 
            }))

        for (let item of PRODUCTS) {
            if( item.id === itemId) {
                item.showAddToCart = productCart[itemId] > 1 ? true : false
            }
        }
    }

    const contexValue = {productCart, searchTerm, setSearchTerm, clickAddToCart, setClickAddToCart, addToCart, removeToCart}
    return (
        <ShopContext.Provider value={contexValue}>
            {props.children}
        </ShopContext.Provider>
    )
}