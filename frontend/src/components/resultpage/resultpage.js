import React from "react"
import { Link } from "react-router-dom"
import { LineChart, Line, Tooltip, YAxis, XAxis, CartesianGrid, Legend } from 'recharts';
import "./resultpage.scss"


export default class Resultpage extends React.Component {

  render() {
    const emotionData = [
    {moodType: "happy", points: 10},
    {moodType: "cheerful", points: 10},
    {moodType: "calm", points: 10},
    {moodType: "social", points: 10},
    {moodType: "active", points: 10},
    {moodType: "sad", points: 5},
    {moodType: "cheerful", points: 5},
    {moodType: "stressed", points: 5},
    {moodType: "angry", points: 5},
    {moodType: "num", points: 5}
  ]
    return (
      <div>
        <h1>RESULTPAGE</h1>
        <div className="chartContainer">
        <LineChart width={400} height={400} data={emotionData}>
          <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        </LineChart>
        </div>
        <button>BACK</button>
      </div>
    )
  }

}
