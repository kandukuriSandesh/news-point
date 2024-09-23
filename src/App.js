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
      source:`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=0555e1b3499d447187d5e0d7c048c974`,
      include:"",
      loading:true
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
  this.setState({loading:true});

  
}

toggleLoading= (value) => {
    this.setState({loading:value})
}

searchFunc = async (value) => {
  this.setState({include:value});
 
}

 render(){
   return(
      <>
     <NavBar searchFunc = {this.searchFunc} />
     <SideBar getAndInvoke={this.getAndInvoke} active={this.state.name.toLowerCase()}  />
     <News key={this.state.source} toggleLoading={this.toggleLoading} source={this.state.source} heading={this.state.name} include={this.state.include} loading = {this.state.loading} />
     
    
      </>
    ) 
 }
}


export default App;
