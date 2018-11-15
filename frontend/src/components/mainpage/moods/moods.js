import React from "react"
import { Link } from "react-router-dom"
import "./moods.scss"



class Moods extends React.Component {

  render() {
    return (
      <div>
      <div className="mood-buttons">
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
      </div>
    )
  }

}


export default Moods
