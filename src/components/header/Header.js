import React from 'react'
import logo from '../../assets/images/logo.svg';
import basket from '../../assets/images/basket.svg'
import "./Header.css";
import { selectTotalPrice, } from './../basket/basketSlice';
import { useSelector, } from 'react-redux';

/**
 * Header of core layout 
 * This header shows user basket status as well
 */
export default function Header() {
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <header className='Header'>
      <div className='left-menu'></div>
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='right-menu'>
        <div className='user-basket'>
          <img src={basket} />
          <span>&#8378;{totalPrice.toFixed(2)}</span>
        </div>
      </div>
    </header >
  )
}
