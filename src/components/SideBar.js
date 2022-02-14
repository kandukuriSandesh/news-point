import React from 'react';
import "./SideBar.css";

export default function SideBar(props) {
 
  return (
    <div className='my-3 SideBar' style={{width:"15%",height:"100%",float:"left"}}>
      
        <h1 style={{textAlign:"center"}} ><span className="badge badge-secondary" style={{backgroundColor:"blue",color:"white"}} >News Topics</span></h1>
        <h3 onClick={()=> props.getAndInvoke(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1d5752dee9dc4b4da874bcd80891c6b4`,"Technology")} className={props.active==="technology"?"selected":""} >Technology </h3>
        <h3 onClick={()=> props.getAndInvoke(`https://newsapi.org/v2/everything?q=tesla&from=2022-01-14&sortBy=publishedAt&apiKey=1d5752dee9dc4b4da874bcd80891c6b4`,"Tesla")}  className={props.active==="tesla"?"selected":""} >Telsa</h3>
        <h3 onClick={()=> props.getAndInvoke(`https://newsapi.org/v2/everything?q=apple&from=2022-02-13&to=2022-02-13&sortBy=popularity&apiKey=1d5752dee9dc4b4da874bcd80891c6b4`,"Apple")} className={props.active==="apple"?"selected":""} >Apple</h3>                        
        <h3 onClick={()=> props.getAndInvoke(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1d5752dee9dc4b4da874bcd80891c6b4`,"Business")}  className={props.active==="business"?"selected":""}>Business</h3>
        
        <h3 onClick={()=> props.getAndInvoke(`https://newsapi.org/v2/everything?domains=wsj.com&apiKey=1d5752dee9dc4b4da874bcd80891c6b4`,"Overall")} className={props.active==="random"?"selected":""} > Random News </h3>

    </div>
  )
}
