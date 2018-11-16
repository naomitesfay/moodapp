import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import "./mainpage.scss"

class Mainpage extends React.Component {

  state = {
      value: 0
  }

      handleClickHappy = () => {
          this.setPoints(10)
      }

      handleClickCheerful = () => {
          this.setPoints(10)
      }

      handleClickCalm = () => {
          this.setPoints(10)
      }

      handleClickSocial = () => {
          this.setPoints(10)
      }

      handleClickActive = () => {
          this.setPoints(10)
      }

      handleClickSad = () => {
          this.setPoints(5)
      }

      handleClickStressed = () => {
          this.setPoints(5)
      }

      handleClickUnsocial = () => {
          this.setPoints(5)
      }

      handleClickAngry = () => {
          this.setPoints(5)
      }

      handleClickNumb = () => {
        this.setPoints(5)
      }


      setPoints = (point) =>{
        const currentPoint = this.state.value
          this.setState({
              value: currentPoint + point
          })
      }


     render(){
      return(

        <div className="moodsContainer">
        <h1>MOOD APP</h1>
        <button onClick={this.handleClickHappy}>HAPPY</button>
        <button onClick={this.handleClickCheerful}>CHEERFUL</button>
        <button onClick={this.handleClickCalm}>CALM</button>
        <button onClick={this.handleClickSocial}>SOCIAL</button>
        <button onClick={this.handleClickActive}>ACTIVE</button>
        <button onClick={this.handleClickSad}>SAD</button>
        <button onClick={this.handleClickStressed}>STRESSED</button>
        <button onClick={this.handleClickUnsocial}>UNSOCIAL</button>
        <button onClick={this.handleClickAngry}>ANGRY</button>
        <button onClick={this.handleClickNumb}>NUMB</button>
        {this.state.value}
        <button onClick={this.}></button>
        </div>

      )
    }
  }

export default Mainpage
