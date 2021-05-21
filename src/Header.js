import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Plate from './Foodimages/Plate.jpg';


function Header() {
  return (
    <div className='header'>
      <img className='header_icon' src={Plate} alt=''/>

      <div className='header_center'>
        <input type = 'text' />
        <SearchIcon className="search-icon"/>  
      </div>
      <div className='header_right'>
        <p>Order your meal</p>
        <ShoppingCartIcon />
        <ExpandMoreIcon/>
        <Avatar/>
      </div>
    </div>
  )
}

export default Header