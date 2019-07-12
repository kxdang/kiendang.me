import React from "react"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"
import { Link } from "gatsby"

import ThemeContext from "../context/ThemeContext"

import "../components/layout.css"

//importing font awesome using react-icons
import { FaGithub } from "react-icons/fa"

class contact extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <div className={theme.dark ? "dark" : "light"}>
            <div
              style={{
                marginLeft: `auto`,
                marginRight: `auto`,
                maxWidth: rhythm(24),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
                minHeight: `100vh`,
              }}
            >
              <h1
                style={{
                  ...scale(1.5),
                  marginBottom: rhythm(1.5),
                  marginTop: 0,
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    color: `inherit`,
                  }}
                  to="/"
                >
                  {" "}
                  Dang it
                </Link>
              </h1>
              <div
                id="toggleTheme"
                style={{ display: `flex`, justifyContent: `flex-end` }}
              >
                <button className="dark-switcher" onClick={theme.toggleDark}>
                  {theme.dark ? (
                    <div id="lightmodebutton">Light mode ☀</div>
                  ) : (
                    <div id="darkmodebutton">Dark mode ☾</div>
                  )}
                </button>
              </div>

              <Bio />

              <h3>Contact Me</h3>
              <p>
                Please feel free to connect with me! My social media links are
                below:
              </p>
              <a href="www.google.ca" style={{ textDecoration: `none` }}>
                <FaGithub size={28} color={`#F78C6C`} /> Github
              </a>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default contact
