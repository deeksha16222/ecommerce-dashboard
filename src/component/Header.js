import React from 'react'

import {Link} from 'react-router-dom';

export default function Header(){
    return(
    <div>

<nav class="navbar navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav nav_bar_wrapper">
      <Link to = "/register"> Register </Link> 
      <Link to = "/login"> Login </Link> 
      <Link to = "/add"> Add Product </Link> 
      <Link to = "/update"> Update Product</Link>
      </div>
    </div>
  </div>
</nav>  
    </div>
   )
}