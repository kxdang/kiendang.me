import React from "react"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"
import { Link } from "gatsby"

import ThemeContext from "../context/ThemeContext"

import "../components/layout.css"
class about extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {theme => (
          <div
            className={theme.dark ? "dark" : "light"}
            style={{ height: `100vh` }}
          >
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

              <h3>About Me</h3>
              <p>
                Hello, my name is Kien Dang. I have a Bachelors of Science in
                Honours Biochemistry from the University of Waterloo. I’ve held
                many job positions while I was in co-op ranging from research in
                the laboratory to corporate positions.
                <br />
                <br />I love technology ranging from computers, phones to cars.
                I’m a self motivated learner who programs as a side hobby. One
                of my favourite things to do is try to automate tasks I
                encounter every day and improve the quality of life through
                science and technology.
                <br />
                <br />
                My blog is a platform to share my experiences, interests,
                hobbies and current progress with programming. In addition, I
                hope to become a better writer by blogging. Feel free to browse
                around!{" "}
              </p>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default about
