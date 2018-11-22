import React from "react"
import { HashRouter as Router, Route, Link } from "react-router-dom"
import Mainpage from "./mainpage/mainpage"
import Resultpage from "./resultpage/resultpage"
import Header from "./header/header"
import Footer from "./footer/footer"


export class App extends React.Component {



  render() {

    return (
      <Router>
        <div>
          <Header />
          <Link to="/"> Mainpage </Link>
          <Link to="/resultpage"> Resultpage </Link>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/resultpage" component={Resultpage} />
          <Footer />
        </div>
      </Router>
    )
  }

}

export default App
