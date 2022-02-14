import React, { useState,useEffect } from "react"
import NewsItem from "./NewsItem";
import Pagination from './Pagination';
import "./News.css";

export default function News(props) {
  

  const [articles, setArticles] = useState([]);
  const [partArticles, setpartArticles] = useState([]);
  const [link, setLink] = useState(props.source);
 
  //https://newsapi.org/v2/top-headlines?sources=${this.state.sources}&apiKey=${this.state.apiKey}

  useEffect (  () => {
   fetch(link)
    .then( req => req.json()).
    then(r => {setArticles(r.articles); return r  })
    .then(res => setpartArticles(res.articles.slice(0,8)))
  
   },[])


  

  const partHandler = (pageNumber) => {
    
     setpartArticles(articles.slice((pageNumber*8)-8,pageNumber*8))
    console.log(this.state.articles)

     
  }
   
  
 
    
     return (

     <div  style={{marginLeft:"16%"}}>
      <div className=" my-3" style={{width:"85%"}} >
       
          <h1 className="heading" >{`Here is Top ${props.heading} News`}</h1>
          <div className="box ">
           {partArticles?partArticles.filter((ele) => ele.title.includes(props.include)).map((ele,index) => { if(index < 8) { return <NewsItem key={ele.url} urlToImage = {ele.urlToImage} title = {ele.title} publishedAt={ele.publishedAt} url = {ele.url} />}}):""}
           
          </div>
          <Pagination data = {articles} partHandler={partHandler} />
      
      </div>
      </div>
    );
  
}
