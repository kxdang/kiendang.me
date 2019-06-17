import React from "react"
import { Link } from "gatsby"

class nav extends React.Component {
  render() {
    return (
      <div>
        <Link
          to="/about"
          style={{ boxShadow: `none`, color: `var(--textLink)` }}
        >
          About
        </Link>
        <Link
          style={{
            boxShadow: `none`,
            color: `var(--textLink)`,
            paddingLeft: `20px`,
          }}
        >
          Contact
        </Link>
      </div>
    )
  }
}

export default nav
