import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import "./mainpage.scss"
import Deets from "./deets/deets"



class Mainpage extends React.Component {

  render() {
    return (
      <div>
       <h1>MAINPAGE</h1>
         <button>Happy</button>
         <button>Sad</button>
         <button>Calm</button>
         <button>Angry</button>
         <button>Fearless</button>
         <button>Heavy</button>
         <button>Social</button>
         <button>Fatigue</button>
         <button>Alert</button>
         <button>Numb</button>
      </div>
    )
  }

}
export default Mainpage
