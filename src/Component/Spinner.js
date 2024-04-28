
import {Component} from "react"
import Loading from "../images/Spinner-1s-200px.gif"

export default class Spinner extends Component{
  

  render(){

    return (
      <>
      <div className="text-center">
        <img src={Loading} alt="loading Images" style={{height:"20%",width:"5%"}}/>
      </div>
      
      </>
    )
  }
}