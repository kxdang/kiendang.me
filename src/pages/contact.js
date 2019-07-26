import React from "react"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"
import { Link } from "gatsby"

import ThemeContext from "../context/ThemeContext"

import "../components/layout.css"

//importing font awesome using react-icons
import { FaGithub, FaLinkedin } from "react-icons/fa"

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
                    <div id="darkmodebutton">Dark mode 🌒</div>
                  )}
                </button>
              </div>

              <Bio />

              <h3>Contact Me</h3>
              <p>
                Please feel free to connect with me! Additional links are
                provided below:
              </p>
              <ul>
                <li
                  style={{
                    listStyle: `none`,
                  }}
                >
                  <a
                    href="https://github.com/kxdang"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ boxShadow: `none`, display: `flex` }}
                  >
                    <FaGithub
                      size={28}
                      color={`#F78C6C`}
                      style={{ marginRight: `5px` }}
                    />{" "}
                    Github
                  </a>
                </li>
                <li style={{ listStyle: `none` }}>
                  <a
                    href="https://www.linkedin.com/in/kien-dang/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      boxShadow: `none`,
                      display: `flex`,
                      width: `129px`,
                    }}
                  >
                    <FaLinkedin
                      size={28}
                      color={`#F78C6C`}
                      style={{ marginRight: `5px` }}
                    />{" "}
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default contact
