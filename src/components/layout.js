import React from "react"
import { Link } from "gatsby"
import Switch from "react-switch"
import { Twemoji } from "react-emoji-render"
import CookieConsent from "react-cookie-consent"

import { rhythm, scale } from "../utils/typography"

import ThemeContext from "../context/ThemeContext"

import "../styles/styles.scss"

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
              <CookieConsent
                location="bottom"
                buttonText="Accept"
                declineButtonText="Decline"
                cookieName="gatsby-gdpr-google-analytics"
                enableDeclineButton
                style={{
                  background: "#2B373B",
                  alignItems: "center",
                  fontSize: "13px",
                }}
                buttonStyle={{
                  color: "#2B373B",
                  background: "#e9a700",
                  borderRadius: "6px",
                }}
                declineButtonStyle={{
                  color: "#fff",
                  background: "#2B373B",
                  borderRadius: "6px",
                }}
                flipButtons
              >
                This website stores cookies in order to improve and customize
                your browsing experience (e.g remembering dark mode state) and
                for analytics and metrics about visitors on this website. If you
                decline, your information won’t be tracked when you visit this
                website.
              </CookieConsent>
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
                <Switch
                  onChange={theme.toggleDark}
                  checked={theme.dark}
                  onColor="#27374c"
                  offColor="#222831"
                  offHandleColor="#fefefe"
                  onHandleColor="#fefefe"
                  checkedIcon={
                    <span
                      style={{ marginLeft: "0.3rem" }}
                      role="img"
                      aria-label="sun"
                    >
                      <Twemoji text="🌒" />
                    </span>
                  }
                  uncheckedIcon={
                    <span
                      style={{ marginLeft: "0.3rem" }}
                      role="img"
                      aria-label="moon"
                    >
                      <Twemoji text="🌞" />
                    </span>
                  }
                  activeBoxShadow="0 0 2px 3px #226597"
                />
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
                <Switch
                  onChange={theme.toggleDark}
                  checked={theme.dark}
                  onColor="#27374c"
                  offColor="#222831"
                  offHandleColor="#fefefe"
                  onHandleColor="#fefefe"
                  checkedIcon={
                    <span
                      style={{ marginLeft: "0.3rem" }}
                      role="img"
                      aria-label="sun"
                    >
                      <Twemoji text="🌒" />
                    </span>
                  }
                  uncheckedIcon={
                    <span
                      style={{ marginLeft: "0.3rem" }}
                      role="img"
                      aria-label="moon"
                    >
                      <Twemoji text="🌞" />
                    </span>
                  }
                  activeBoxShadow="0 0 2px 3px #226597"
                />
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
                  © {new Date().getFullYear()}, Built with ❤{` `} and {` `}{" "}
                  created with {` `}
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
