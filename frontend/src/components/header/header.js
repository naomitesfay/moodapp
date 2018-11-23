import React from "react"
import "./header.scss"

class Header extends React.Component {

  render() {
    return (
      <div>
       <h1>iFeel</h1>
        <img className="headerImage" src="../images/waves.png"/>
      </div>
    )
  }

}


export default Header
