import React,{useState,useEffect} from 'react'

function Inform (props){
    useEffect(()=>{
        item();
         },[]);

const [info,useinfo]= useState('');


const item = async ()=>{
  //  console.log(props)
   // console.log("id: ",props.location.state.id)
    var id = props.location.state.id
    const infromation = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const infoo = await infromation.json();
   // console.log(infoo)
    const add= infoo.address.city;
    console.log(add,'%%%5')
    useinfo(add);

    }
return(
    
    <div>
        <h1>City Name</h1>
       <h1>{info}</h1> 
    </div>
)
}
export default Inform;