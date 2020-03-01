import React from "react"
import { Link } from "gatsby"

class nav extends React.Component {
  render() {
    return (
      <div>
        <Link
          to="/about"
          style={{
            boxShadow: `none`,
            paddingRight: `10px`,
            borderBottom: `none`,
          }}
        >
          About
        </Link>
        <Link
          to="/now"
          style={{
            boxShadow: `none`,
            paddingLeft: `20px`,
            paddingRight: `10px`,
            borderBottom: `none`,
          }}
        >
          Now
        </Link>
      </div>
    )
  }
}

export default nav
