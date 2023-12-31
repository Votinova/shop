import React, { useState, createContext }  from 'react';
import { typesContext, item } from '../types';
import { PRODUCTS } from '../products';

type CountProviderProps = {children: React.ReactNode};

export const ShopContext = createContext <typesContext> ({productsFilter: PRODUCTS, searchTerm: '', setSearchTerm: (searchTerm: string) => {}});

export const ShopContextProvider = (props: CountProviderProps) => {
    const [productsFilter, setProductsFilter] = useState<item []>(PRODUCTS);
    const [searchTerm, setSearchTerm] = useState('');
    const contexValue = {productsFilter, searchTerm, setSearchTerm}
    return (
        <ShopContext.Provider value={contexValue}>
            {props.children}
        </ShopContext.Provider>
    )
}