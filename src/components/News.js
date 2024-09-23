import React, { useState,useEffect } from "react"
import NewsItem from "./NewsItem";
import Pagination from './Pagination';
import "./News.css";

export default function News(props) {
  

  const [articles, setArticles] = useState([]);
  const [partArticles, setpartArticles] = useState([]);
  const [link, setLink] = useState(props.source);
  const [dot, setDot] = useState(".")
 
  //https://newsapi.org/v2/top-headlines?sources=${this.state.sources}&apiKey=${this.state.apiKey}

  console.log({link})

  useEffect (  () => {
   fetch(link)
    .then( req => req.json())
    .then(r => { console.log(r);setArticles(r.results); return r  })
    .then(res => setpartArticles(res.results.slice(0,8)))
    const key = setInterval(() => {
      setDot(state => state + ".")
      console.log(dot)
    }, 1000);
       
     setTimeout(() => {
      props.toggleLoading(false);
      clearInterval(key);
     }, 3000);
     
   },[])


  

  const partHandler = (pageNumber) => {
    
     setpartArticles(articles.slice((pageNumber*8)-8,pageNumber*8))
    console.log(this.state.articles)

     
  }
   
  
 console.log(props.loading)
    
     return (

   props.loading ?  <h1>Loading{dot}</h1> : <div  style={{marginLeft:"16%"}}>
      <div className=" my-3" style={{width:"85%"}} >
       
          <h1 className="heading" >{`Here is Top ${props.heading} News`}</h1>
          <div className="box ">
           {partArticles?partArticles.filter((ele) => ele.title.includes(props.include)).map((ele,index) => { if(index < 8) { return <NewsItem key={ele.article_id} urlToImage = {ele.image_url} title = {ele.title} publishedAt={ele.pubDate} url = {ele.link} />}}):""}
           
          </div>
          <Pagination data = {articles} partHandler={partHandler} />
      
      </div>
      </div>
    );
  
}
