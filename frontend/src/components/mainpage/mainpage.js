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

  handleClick = (mood) => {
    this.setState({mood})
  }

  handleSubmit = () => {

    if(!this.state.mood){
      alert("hej")
      return
    }


    fetch("http://localhost:8085/moods", {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({emotion: this.state.mood}) // "{mood: mood}"
    }).then((data) => {
      console.log('Request success: ', data);
      this.setState({didSend: true})
    })
    .catch((error) => {
      console.log('Request failure: ', error);
    });
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
        <h3>How are you today?</h3>
        <div className="mood-buttonContainer">
        <div className="mood-button">
        <button onClick={() => this.handleClick("happy")}>HAPPY</button>
        <button onClick={() => this.handleClick("cheerful")}>CHEERFUL</button>
        <button onClick={() => this.handleClick("rested")}>RESTED</button>
        <button onClick={() => this.handleClick("alert")}>ALERT</button>
        </div>
        <div className="mood-button">
        <button onClick={() => this.handleClick("calm")}>CALM</button>
        <button onClick={() => this.handleClick("social")}>SOCIAL</button>
        <button onClick={() => this.handleClick("focused")}>FOCUSED</button>
        <button onClick={() => this.handleClick("fearless")}>FEARLESS</button>
        </div>
        <div className="mood-button">
        <button onClick={() => this.handleClick("optimistic")}>OPTIMISTIC</button>
        <button onClick={() => this.handleClick("active")}>ACTIVE</button>
        <button onClick={() => this.handleClick("sad")}>SAD</button>
        <button onClick={() => this.handleClick("heavy")}>HEAVY</button>
        </div>
        <div className="mood-button">
        <button onClick={() => this.handleClick("stressed")}>STRESSED</button>
        <button onClick={() => this.handleClick("unsocial")}>UNSOCIAL</button>
        <button onClick={() => this.handleClick("fatigue")}>FATIGUE</button>
        <button onClick={() => this.handleClick("pessimistic")}>PESSIMISTIC</button>
        </div>
        <div className="mood-button">
        <button onClick={() => this.handleClick("bitter")}>BITTER</button>
        <button onClick={() => this.handleClick("irritated")}>IRRITATED</button>
        <button onClick={() => this.handleClick("angry")}>ANGRY</button>
        <button onClick={() => this.handleClick("numb")}>NUMB</button>
        </div>
        </div>
        {this.state.value}
        <div className="add-button">
        <button onClick={this.handleSubmit}><span>Next</span></button>
        </div>
        <div className="reload-button">
        <button type="button" onClick={ refreshPage }><span>Try again</span></button>
        </div>
        </div>

      )
    }
  }

export default MainPage
