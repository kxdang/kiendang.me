import React from "react"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"
import { Link } from "gatsby"
class contact extends React.Component {
  render() {
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            color: `#f78c6c`,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
            }}
            to="/"
          >
            {" "}
            Dang it
          </Link>
        </h1>

        <Bio />

        <h3 style={{ color: `var(--textTitle)` }}>Contact Me</h3>
        <p>
          Please feel free to connect with me! My social media links are below:
        </p>
      </div>
    )
  }
}

export default contact
