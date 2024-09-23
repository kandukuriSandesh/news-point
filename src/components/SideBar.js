import React from 'react';
import "./SideBar.css";

export default function SideBar(props) {
 
  return (
    <div className='my-3 SideBar' style={{width:"15%",height:"100%",float:"left"}}>
      
        <h1 style={{textAlign:"center"}} ><span className="badge badge-secondary" style={{backgroundColor:"blue",color:"white"}} >News Topics</span></h1>
        <h3 onClick={()=> props.getAndInvoke(`https://newsdata.io/api/1/latest?apikey=pub_540957621ed02d46dc48df0806ef9405e4e88`,"Latest")} className={props.active==="Latest"?"selected":""} > Latest News </h3>
        <h3 onClick={()=> props.getAndInvoke(`https://newsdata.io/api/1/latest?apikey=pub_540957621ed02d46dc48df0806ef9405e4e88&q=social`,"Social")}  className={props.active==="Social"?"selected":""} >Social News</h3>
        <h3 onClick={()=> props.getAndInvoke(`https://newsdata.io/api/1/latest?apikey=pub_540957621ed02d46dc48df0806ef9405e4e88&category=science`,"Science")}  className={props.active==="Science"?"selected":""}>Science</h3>
        <h3 onClick={()=> props.getAndInvoke(`https://newsdata.io/api/1/latest?apikey=pub_540957621ed02d46dc48df0806ef9405e4e88&q=business`,"Business")}  className={props.active==="Business"?"selected":""}>Business</h3>

        
        <h3 onClick={()=> props.getAndInvoke(`https://newsdata.io/api/1/sources?apikey=pub_540957621ed02d46dc48df0806ef9405e4e88`,"News Source")} className={props.active==="News Source"?"selected":""} > News Source </h3>

    </div>
  )
}
