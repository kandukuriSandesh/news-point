import React, { Component } from 'react';
import "./NewsItem.css"

export default class NewsItem extends Component {
  render() {
      let {urlToImage,title,publishedAt,url} = this.props
    return ( 
    <div className='gri-item'>
        
        <img src={urlToImage} alt="" style={{heigth:"40%",width:"100%",borderRadius:"3px"}}  />
        <div>
        <h5 className="title">{title}</h5>
        <span>{publishedAt}</span>
        <p className='description' > </p>
        
        <a target={"_blank"} href={url} ><button className='btn btn-primary btn-sm'   >Read More</button></a>
        </div>
    </div>
    )
  }
}
