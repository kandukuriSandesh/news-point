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
      name:"Latest",
      status:"Owner",
      givenName:"",
      source:`https://newsdata.io/api/1/latest?apikey=pub_540957621ed02d46dc48df0806ef9405e4e88`,
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
