import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import "./mainpage.scss"



class Mainpage extends React.Component {

  state = {
      value: 0
  }

      handleClickHappy = () => {
        const points = this.state.value + 10
          this.setState({
              value: points
          })
      }

      handleClickSad = () => {
        const points = this.state.value + 5
          this.setState({
              value: points
          })
      }



     render(){
      return(
        <div>
        <h1> MOOD APP</h1>
        <button onClick={this.handleClickHappy}>HAPPY</button>
        <button onClick={this.handleClickSad}>SAD</button>

        {this.state.value}
        </div>


      )
    }
  }

export default Mainpage
