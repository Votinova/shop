import React from 'react';
import './Navbar.css'
import { UserCircle } from "@phosphor-icons/react";
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className='navbar'>
        
        <Link to="/">
          <span className='catalog'>Каталог</span>
        </Link>
        <Link to="/cart">
          <span className='comparison'>Корзина</span>
        </Link>
        <Link to="/profile">
          <span className='profile text'>Личный кабинет
            <UserCircle  className='icon'size={32} />
          </span> 
        </Link>
    </div>
  )
}
