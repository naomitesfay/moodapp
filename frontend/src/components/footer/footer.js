import React from "react"
import "./footer.scss"

class Footer extends React.Component {

  render() {
    return (
      <div className="footerSection">
        <p>Tracking your mood since 2018</p>
        <p>Developed by <em>Naomi</em> and <em>Nathalie</em> from Technigo Bootcamp</p>
        <p>A responsive moodapp powered by React, MongoDB database, Node.js and SASS</p>
      </div>
    )
  }
}

export default Footer
