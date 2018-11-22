import React from "react"
import { HashRouter as Router, Route, Link, Redirect } from "react-router-dom"
import "./mainpage.scss"

const emotionData = [
{moodType: "happy", points: 10},
{moodType: "cheerful", points: 10},
{moodType: "calm", points: 10},
{moodType: "social", points: 10},
{moodType: "active", points: 10},
{moodType: "rested", points: 10},
{moodType: "alert", points: 10},
{moodType: "focused", points: 10},
{moodType: "fearless", points: 10},
{moodType: "optimistic", points: 10},
{moodType: "sad", points: 5},
{moodType: "stressed", points: 5},
{moodType: "angry", points: 5},
{moodType: "numb", points: 5},
{moodType: "heavy", points: 5},
{moodType: "unsocial", points: 5},
{moodType: "fatigue", points: 5},
{moodType: "pessimistic", points: 5},
{moodType: "unconcerned", points: 5},
{moodType: "irritated", points: 5}
]

class MainPage extends React.Component {
  constructor(props){
      super(props);
      this.state = {
        mood: null,
        didSend: false
      }
    }

  handleClick = (mood, points) => {
    this.setState({mood, points})
  }

  handleSubmit = () => {

    if(!this.state.mood){
      alert("Pick a mood")
      return
    }

    fetch("http://localhost:8080/moods", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({emotion: this.state.mood,points:this.state.points}) // "{mood: mood}"
    }).then((data) => {
      console.log('Request success: ', data)
      this.setState({didSend: true})
    })
    .catch((error) => {
      console.log('Request failure: ', error)
    })
  }

      setPoints = (point) =>{
        const currentPoint = this.state.value
          this.setState({
              value: currentPoint + point
          })
      }

     render(){
       if(this.state.didSend){
         return (<Redirect to='/resultpage' />)
       }

       function refreshPage(){
         window.location.reload();
      }

      return(



        <div className="moodsContainer">
        <pre>{JSON.stringify(this.state,2,2)}</pre>
        <h3>How are you feeling?</h3>

        <div className="mood-buttonContainer">
          <div className="mood-button">
          <button onClick={() => this.handleClick("happy", 10 )}>HAPPY</button>
          <button onClick={() => this.handleClick("cheerful", 10)}>CHEERFUL</button>
          <button onClick={() => this.handleClick("rested", 10)}>RESTED</button>
          <button onClick={() => this.handleClick("alert", 10)}>ALERT</button>
          </div>
        <div className="mood-button">
          <button onClick={() => this.handleClick("calm", 10)}>CALM</button>
          <button onClick={() => this.handleClick("social", 10)}>SOCIAL</button>
          <button onClick={() => this.handleClick("focused", 10)}>FOCUSED</button>
          <button onClick={() => this.handleClick("fearless", 10)}>FEARLESS</button>
        </div>
          <div className="mood-button">
          <button onClick={() => this.handleClick("optimistic", 10)}>OPTIMISTIC</button>
          <button onClick={() => this.handleClick("active", 10)}>ACTIVE</button>
          <button onClick={() => this.handleClick("sad", 5)}>SAD</button>
          <button onClick={() => this.handleClick("heavy", 5)}>HEAVY</button>
        </div>
        <div className="mood-button">
          <button onClick={() => this.handleClick("stressed", 5)}>STRESSED</button>
          <button onClick={() => this.handleClick("unsocial", 5)}>UNSOCIAL</button>
          <button onClick={() => this.handleClick("fatigue", 5)}>FATIGUE</button>
          <button onClick={() => this.handleClick("pessimistic", 5)}>PESSIMISTIC</button>
        </div>
        <div className="mood-button">
          <button onClick={() => this.handleClick("bitter", 5)}>BITTER</button>
          <button onClick={() => this.handleClick("irritated", 5)}>IRRITATED</button>
          <button onClick={() => this.handleClick("angry", 5)}>ANGRY</button>
          <button onClick={() => this.handleClick("numb", 5)}>NUMB</button>
          </div>
        </div>
        {this.state.value}
        <div className="AddReturnButtons">
          <Link to="/resultpage">
          <button onClick={this.handleSubmit} className="add-button"><span>Next</span></button>
          </Link>
          <button onClick={ refreshPage }><span>Try again</span></button>
        </div>

      </div>

      )
    }
  }

export default MainPage
