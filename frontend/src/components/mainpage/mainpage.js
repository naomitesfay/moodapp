import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import "./mainpage.scss"



class Mainpage extends React.Component {

//
// constructor() {
//    super()
//    this.handleSubmit = this.handleSubmit.bind(this)
//  }
//
//  handleSubmit(event) {
//    event.preventDefault()
//    const data = new pointsData(event.target)
//
//    fetch('/api/form-submit-url', {
//         method: 'POST',
//         body: data,
//       })



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


      // handleSubmit(point) {
      //   console.log()
      // }



     render(){
      return(

        <div className="moodsContainer">
        <h3>How are you today?</h3>

        <div className="mood-buttonContainer">
        <div className="mood-button">
        <button onClick={this.handleClickHappy}>HAPPY</button>
        <button onClick={this.handleClickCheerful}>CHEERFUL</button>
        </div>
        <div className="mood-button">
        <button onClick={this.handleClickCalm}>CALM</button>
        <button onClick={this.handleClickSocial}>SOCIAL</button>
        </div>
        <div className="mood-button">
        <button onClick={this.handleClickActive}>ACTIVE</button>
        <button onClick={this.handleClickSad}>SAD</button>
        </div>
        <div className="mood-button">
        <button onClick={this.handleClickStressed}>STRESSED</button>
        <button onClick={this.handleClickUnsocial}>UNSOCIAL</button>
        </div>
        <div className="mood-button">
        <button onClick={this.handleClickAngry}>ANGRY</button>
        <button onClick={this.handleClickNumb}>NUMB</button>
        </div>
        </div>
        {this.state.value}
        <div className="add-button">
        <button onSubmit={this.handleSubmit}>Add Moods/Next Page</button>
        </div>
        </div>

      )
    }
  }

export default Mainpage
