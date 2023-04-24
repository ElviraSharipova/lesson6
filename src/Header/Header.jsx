import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Headers.css';


import { Link } from 'react-router-dom'

export default function Header() {
  return (
  
      <ul className='nav my-nav'>
        <li><a href="/">Главная</a></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>

  )
}
