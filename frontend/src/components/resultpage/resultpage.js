import React from "react"
import { Link } from "react-router-dom"
import { AreaChart, Area, Tooltip, YAxis, XAxis, CartesianGrid, Legend } from 'recharts';
import "./resultpage.scss"

export default class Resultpage extends React.Component {

constructor(props) {
  super(props)
  this.state = {
    moods:[]
  }
}

componentDidMount() {
  fetch('http://localhost:8080/moods/')
  .then(res => res.json())
  .then(json => {
    this.setState({
      moods: json
    })
  })

}


 render() {
   if (this.state.moods.length === 0) {
     return <div>loading</div>
   }

   return (
     <div>
       <div className="chartContainer">
       <AreaChart width={600} height={400} data={this.state.moods} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
       <Area type='monotone' dataKey='points' stroke='#743C6A' fill='#743C6A' />
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       </AreaChart>
       </div>
         <Link to="/">
       <button className="back-button">Go back</button>
       </Link>
     </div>
   )
 }

}
