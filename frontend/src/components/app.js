import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Mainpage from "./mainpage/mainpage"
import Resultpage from "./resultpage/resultpage"
export class App extends React.Component {



  render() {

    return (
      <Router>
      <div>
      <Link to="/"> Mainpage </Link>
      <Link to="/resultpage"> Resultpage </Link>
      <Route exact path="/" component={Mainpage} />
      <Route exact path="/resultpage" component={Resultpage} />
      </div>
      </Router>
    )
  }

}

export default App
