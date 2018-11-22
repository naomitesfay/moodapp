import React from "react"
import { Link } from "react-router-dom"
// import { LineChart, Line, Tooltip, YAxis, XAxis, CartesianGrid, Legend } from 'recharts';
import "./resultpage.scss"


export default class Resultpage extends React.Component {

// constructor(){
//   super:()
//   this.state = {points: []}
// }
//
// componentWillMount(){
//   fetch( 'http://localhost:8085/moods ')
//     .then( response => response.json() )
//     .then( ({results: items}) => this.setState({points}))
// }
//
//   render() {
//     let points = this.state.points;
//     if(this.state.filter){
//       items = items.fiult

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
    {moodType: "cheerful", points: 5},
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
    //
    // fetch('http://localhost:8085/moods')
    // .then(function(data) {
    // })
    // .catch(function(error) {
    // });
    //
    // fetch('http://localhost:8085/moods')
    // .then((resp) => resp.json())
    //
    //
    return (
      // <div>
      // {points.map(points =>
      // <Value key={points.value} points={points} />)}
      //

        <h1>RESULTPAGE</h1>
        <div className="chartContainer">
        <LineChart width={400} height={400} data={emotionData}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
        </div>
        <button className="back-button">Go back</button>
      </div>
    )
  }

}
