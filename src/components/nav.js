import React from "react"
import { Link } from "gatsby"

class nav extends React.Component {
  render() {
    return (
      <div>
        <Link
          activeStyle={{
            color: "#F78C6C",
            paddingRight: `10px`,
            fontWeight: "bold",
          }}
          to="/"
          style={{
            boxShadow: `none`,
            paddingRight: `10px`,
            borderBottom: `none`,
          }}
        >
          Home
        </Link>
        <Link
          activeStyle={{
            color: "#F78C6C",
            paddingRight: `10px`,
            fontWeight: "bold",
          }}
          to="/blog"
          style={{
            boxShadow: `none`,
            paddingRight: `10px`,
            borderBottom: `none`,
          }}
        >
          Blog
        </Link>
        <Link
          activeStyle={{
            color: "#F78C6C",

            fontWeight: "bold",
          }}
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
          activeStyle={{
            color: "#F78C6C",
            fontWeight: "bold",
          }}
          to="/now"
          style={{
            boxShadow: `none`,
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
