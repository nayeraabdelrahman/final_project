import React from 'react'
import { useState,useEffect} from "react";
import axios from "axios"
import { Params, json, useParams } from 'react-router-dom';
import Navbar from "../../components/Navbar.jsx";
import { Link } from 'react-router-dom';
function SinglePost(){
    const Params=useParams();
    const id= Params.id;
    console.log(id)
    const [data,setdata]=useState([])
    
// const [posts, setposts]=useState([])
// useEffect ( ()=> {
//  axios.get('products3.json').then((res)=>{setposts(res.data)})
//  .catch(err=>{console.log(err)})
// },[])
    return(<div>
        
    <Navbar></Navbar>
</div>
)
}
export default SinglePost;
