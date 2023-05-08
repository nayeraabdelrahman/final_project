import Mainphoto from "./MImage.png";
import React from 'react'
import "./MainContent.css"
import { Component } from "react";
class Maincontent extends Component{
  render(){
    return(
        <div class ="MainElment">
        <img src={Mainphoto} alt='...'/>
        <h1>Get 50%  Off on <br></br>Selected categories</h1>
        </div>
    )
  }
}

export default Maincontent;