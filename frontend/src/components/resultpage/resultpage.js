import React from "react"
import { Link } from "react-router-dom"
import { AreaChart, Area, Tooltip, YAxis, XAxis, CartesianGrid, Legend } from 'recharts';
import "./resultpage.scss"

export default class Resultpage extends React.Component {

 render() {
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
   
   return (
     <div>
       <h1>RESULTPAGE</h1>
       <div className="chartContainer">
       <AreaChart width={600} height={400} data={emotionData} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
       <Area type='monotone' dataKey='points' stroke='#743C6A' fill='#743C6A' />
       </AreaChart>
       </div>
       <button className="back-button">Go back</button>
     </div>
   )
 }

}
