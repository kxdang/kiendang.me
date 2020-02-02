import React from "react"
import { Link } from "gatsby"

class nav extends React.Component {
  render() {
    return (
      <div>
        <Link to="/about" style={{ boxShadow: `none`, paddingRight: `10px` }}>
          About
        </Link>
        {/* <Link
          to="/contact"
          style={{
            boxShadow: `none`,
            paddingLeft: `20px`,
          }}
        >
          Contact
        </Link> */}
      </div>
    )
  }
}

export default nav
