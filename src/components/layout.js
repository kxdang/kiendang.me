import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

import ThemeContext from "../context/ThemeContext"

import "./layout.css"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <ThemeContext.Consumer>
          {theme => (
            <div className={theme.dark ? "dark" : "light"}>
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
                    borderBottom: `none`,
                  }}
                  to={`/`}
                >
                  {title}
                </Link>
              </h1>
              <div
                id="toggleTheme"
                style={{ display: `flex`, justifyContent: `flex-end` }}
              >
                <button className="dark-switcher" onClick={theme.toggleDark}>
                  {theme.dark ? (
                    <div id="lightmodebutton">
                      Light mode{" "}
                      <span role="img" aria-label="sun">
                        🌞
                      </span>
                    </div>
                  ) : (
                    <div id="darkmodebutton">
                      Dark mode{" "}
                      <span role="img" aria-label="moon">
                        🌒
                      </span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          )}
        </ThemeContext.Consumer>
      )
    } else {
      header = (
        <ThemeContext.Consumer>
          {theme => (
            <div className={theme.dark ? "dark" : "light"}>
              <h3
                style={{
                  fontFamily: `Montserrat, sans-serif`,
                  marginTop: 0,
                }}
              >
                <Link
                  style={{
                    boxShadow: `none`,
                    textDecoration: `none`,
                    borderBottom: `none`,
                  }}
                  to={`/`}
                >
                  {title}
                </Link>
              </h3>
              <div style={{ display: `flex`, justifyContent: `flex-end` }}>
                <button className="dark-switcher" onClick={theme.toggleDark}>
                  {theme.dark ? (
                    <div id="lightmodebutton">
                      Light mode{" "}
                      <span role="img" aria-label="sun">
                        🌞
                      </span>
                    </div>
                  ) : (
                    <div id="darkmodebutton">
                      Dark mode{" "}
                      <span role="img" aria-label="moon">
                        🌒
                      </span>
                    </div>
                  )}
                </button>
              </div>
            </div>
          )}
        </ThemeContext.Consumer>
      )
    }
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
              <header>{header}</header>
              <main>{children}</main>
              <footer>
                <p>
                  © {new Date().getFullYear()}, Built with
                  {` `}
                  <a href="https://www.gatsbyjs.org">Gatsby</a>
                </p>
              </footer>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Layout
