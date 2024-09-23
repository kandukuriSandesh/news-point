import React from 'react';
import "./SideBar.css";

export default function SideBar(props) {
 
  return (
    <div className='my-3 SideBar' style={{width:"15%",height:"100%",float:"left"}}>
      
        <h1 style={{textAlign:"center"}} ><span className="badge badge-secondary" style={{backgroundColor:"blue",color:"white"}} >News Topics</span></h1>
        <h3 onClick={()=> props.getAndInvoke(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0555e1b3499d447187d5e0d7c048c974`,"Technology")} className={props.active==="technology"?"selected":""} >Technology </h3>
        <h3 onClick={()=> props.getAndInvoke(`https://newsapi.org/v2/everything?q=health&sortBy=publishedAt&apiKey=0555e1b3499d447187d5e0d7c048c974`,"health")}  className={props.active==="tesla"?"selected":""} >Health</h3>
        <h3 onClick={()=> props.getAndInvoke(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0555e1b3499d447187d5e0d7c048c974`,"business")}  className={props.active==="business"?"selected":""}>Business</h3>
        
        <h3 onClick={()=> props.getAndInvoke(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=0555e1b3499d447187d5e0d7c048c974`,"general")} className={props.active==="random"?"selected":""} > Random News </h3>

    </div>
  )
}
