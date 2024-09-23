import React from 'react';
import "./SideBar.css";

export default function SideBar(props) {
 
  return (
    <div className='my-3 SideBar' style={{width:"15%",height:"100%",float:"left"}}>
      
        <h1 style={{textAlign:"center"}} ><span className="badge badge-secondary" style={{backgroundColor:"blue",color:"white"}} >News Topics</span></h1>
        <h3 onClick={()=> props.getAndInvoke(`https://newsdata.io/api/1/latest?apikey=pub_540957621ed02d46dc48df0806ef9405e4e88`,"Latest")} className={props.active==="latest"?"selected":""} > Latest News </h3>
        <h3 onClick={()=> props.getAndInvoke(`https://newsdata.io/api/1/latest?apikey=pub_540957621ed02d46dc48df0806ef9405e4e88&q=social`,"Social")}  className={props.active==="social"?"selected":""} >Social News</h3>
        <h3 onClick={()=> props.getAndInvoke(`https://newsdata.io/api/1/latest?apikey=pub_540957621ed02d46dc48df0806ef9405e4e88&category=science`,"Science")}  className={props.active==="science"?"selected":""}>Science</h3>
        <h3 onClick={()=> props.getAndInvoke(`https://newsdata.io/api/1/latest?apikey=pub_540957621ed02d46dc48df0806ef9405e4e88&q=business`,"Business")}  className={props.active==="business"?"selected":""}>Business</h3>

        
        <h3 onClick={()=> props.getAndInvoke(`https://newsdata.io/api/1/latest?apikey=pub_540957621ed02d46dc48df0806ef9405e4e88&q=health`,"Health")} className={props.active==="health"?"selected":""} > Health </h3>

    </div>
  )
}
