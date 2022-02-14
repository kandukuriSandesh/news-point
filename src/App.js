import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './components/NavBar';
import News from './components/News';
import SideBar from './components/SideBar';




class App extends React.Component{
  constructor(){
    super();
    this.state ={
      name:"Technology",
      status:"Owner",
      givenName:"",
      source:`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=1d5752dee9dc4b4da874bcd80891c6b4`,
      include:""
    }
  }
 componentDidMount(){
   console.log("CDM")
 }

 changeName(param){
   
   this.setState((state) => ({...state,name:param}))
 }

 getAndInvoke =(url,name) => {
  this.setState((state) => ({...state,source:url,name:name}));
  
}

searchFunc = async (value) => {
  this.setState({include:value});
 
}

 render(){
   return(
      <>
     <NavBar searchFunc = {this.searchFunc} />
     <SideBar getAndInvoke={this.getAndInvoke} active={this.state.name.toLowerCase()}  />
     <News key={this.state.source} source={this.state.source} heading={this.state.name} include={this.state.include} />
     
    
      </>
    ) 
 }
}


export default App;
