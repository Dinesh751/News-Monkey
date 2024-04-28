import React,{Component} from "react"
import Navbar from "./Component/Navbar"
import News from "./Component/News"
import {  Routes,Route } from 'react-router-dom';


export default class App extends Component{

  render(){
    return (
      <>
      
        
           <Navbar/>
           
           {/* <News pageSize={6} country="in" category="health"/> */}
         

           <Routes>
       

       
           
          
       <Route exact  path="/" element={ <News key="" pageSize={6} country="in" category="general"/>}/> 
       <Route exact  path="/general" element={ <News key="general" pageSize={6} country="in" category="General"/>}/> 
       <Route exact  path="/entertainment" element={ <News key="entertainment" pageSize={6} country="in" category="Entertainment"/>}/> 
       <Route exact  path="/business" element={ <News key="business" pageSize={6} country="in" category="Business"/>}/> 
       <Route exact  path="/health" element={ <News key="health" pageSize={6} country="in" category="Health"/>}/> 
       <Route exact  path="/science" element={ <News key="science" pageSize={6} country="in" category="Science"/>}/> 
       <Route exact  path="/sport" element={ <News key="sport" pageSize={6} country="in" category="Sports"/>}/> 
       <Route exact  path="/technology" element={ <News key="technology" pageSize={6} country="in" category="Technology"/>}/> 
      
       </Routes>
       
           
      
      </>
    )
  }
}