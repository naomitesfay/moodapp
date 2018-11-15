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

      handleClickCheerful = () => {
        const points = this.state.value + 10
          this.setState({
              value: points
          })
      }

      handleClickCalm = () => {
        const points = this.state.value + 10
          this.setState({
              value: points
          })
      }

      handleClickSocial = () => {
        const points = this.state.value + 10
          this.setState({
              value: points
          })
      }

      handleClickActive = () => {
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

      handleClickStressed = () => {
        const points = this.state.value + 5
          this.setState({
              value: points
          })
      }

      handleClickUnsocial = () => {
        const points = this.state.value + 5
          this.setState({
              value: points
          })
      }

      handleClickAngry = () => {
        const points = this.state.value + 5
          this.setState({
              value: points
          })
      }

      handleClickNumb = () => {
        const points = this.state.value + 5
          this.setState({
              value: points
          })
      }

     render(){
      return(
        <div>
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
        </div>

      )
    }
  }

export default Mainpage
