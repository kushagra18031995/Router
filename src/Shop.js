import React, {useState,useEffect} from 'react';
import './App.css';
import {Link }   from 'react-router-dom'
//import Inform from "./Inform"
function Shop() {
  useEffect(()=>{
 fetchItems();
  },[]);

  
  const [items,setItems] = useState([]);
  
 const fetchItems = async()=>{
   const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
   const items = await data.json();
    console.log(items);
   setItems(items);

 
  }
 
    
  return (
    <div >
      <h1>People list</h1>
    {items.map((items)=>(
    <h4 key = {items.id}> <Link to={{ pathname: '/Inform', state: { id: items.id} }}  >{items.name}</Link></h4>
    ))}
    </div>
  );
}

export default Shop;
