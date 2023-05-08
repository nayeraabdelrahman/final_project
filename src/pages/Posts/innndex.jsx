import React from 'react'
import { useState,useEffect} from "react";
import axios from "axios"
import Navbar from "../../components/Navbar.jsx";
import { Link } from 'react-router-dom';
import "./style1.css"
function Posts(){const [posts, setposts]=useState([])
  useEffect ( ()=> {
   axios.get('products2.json').then((res)=>{setposts(res.data)})
   .catch(err=>{console.log(err)})
 },[])
const[ChangeColor,setChangeColor]=useState(false)
const handleclick=()=>{
  setChangeColor((prevState)=>(!prevState))
}

let icon = (ChangeColor)?
< i   class="fa-regular fa-heart" onClick={handleclick} style={{color: "#F61B5A"}}></i>:
  < i  class="fa-regular fa-heart" onClick={handleclick} style={{color:"#00000080"}}></i>

    return(<div>
    <Navbar></Navbar>
<div className="cards">
    <h2>All Products</h2>
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
    </div>
    </div>
)
}
export default Posts;