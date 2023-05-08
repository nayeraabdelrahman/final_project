import React from 'react'
import { useState,useEffect} from "react";
import axios from "axios"
import Navbar from "../../components/Navbar.jsx";
import MainContent from "../../components/MainContent.jsx";
import "./inndex.css"
import { Link } from 'react-router-dom';
function Home()  {const [posts, setposts]=useState([])
  useEffect ( ()=> {
   axios.get('products1.json').then((res)=>{setposts(res.data)})
   .catch(err=>{console.log(err)})
 },[])
const[ChangeColor,setChangeColor]=useState(false)
const handleclick=()=>{
  setChangeColor((prevState)=>(!prevState))
}

let icon = (ChangeColor)?
< i   class="fa-regular fa-heart" onClick={handleclick} style={{color: "#F61B5A"}}></i>:
  < i  class="fa-regular fa-heart" onClick={handleclick} style={{color:"#00000080"}}></i>



  return(
    <div>
    <Navbar></Navbar>
    <MainContent/>
    <div className="cards">
    <h2>Products</h2>
    <div className="list">
      
        {posts.map(post =><div key={post.id}>
          <div className="card">
          <div className='imgicon'>
              {icon}
            </div>
            <img src={post.images} alt="product"></img>
          </div>
    <Link to={`/Posts/${post.id}`}style={{textDecoration: "none",}}>
        <div className="Cardtitle">
        <h3><span>{post.title}</span></h3><h3><span>{post.price}$</span></h3>
        </div>
        <p>{post.description}</p>
        </Link>
        </div>)}
        </div>
        <div class="SeeMore">
        <Link to='/posts'style={{textDecoration: "none",}}>
          <button className='footer'>
            See More</button>
        </Link>
        </div>
    </div>
    </div>
  )
}
export default Home;