import React from 'react'
import "./NavbarStyle.css"
import { Component } from "react";
import Logo from "./logo (1).png"
import Usericon from "./Vector.png"
class Navbar extends Component{
  render(){
    return(
      <nav className='Navbar'>
        <div className='Navbarlogo'>
        <a href='/'><img src={Logo} alt='Logo'/></a>
        <h1>Minimal<space style={{color:"#F61B5A",}}>Shop</space>ping</h1>
        </div>
        <div div className='Navbaruser'>
          <a href='/Posts'><img src={Usericon}alt='usericon'/></a>
        </div>
      </nav>
    )
  }
}

export default Navbar;