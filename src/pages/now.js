import React from "react"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"
import { Link } from "gatsby"

import ThemeContext from "../context/ThemeContext"

import "../components/layout.css"



class now extends React.Component {
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

              <Bio />

              <h3 style={{ textAlign: "center" }}>What am I doing at the moment?</h3>
              <p>
                I am currently working on completing <a href="https://www.udemy.com/course/modern-react-bootcamp/" target="_blank" rel="noopener noreferrer">The Modern React Bootcamp (Hooks, Context, NextJS, Router)</a>.  I'm excited to start building React applications.
                  <br></br>
                <br></br>I have been applying to front-end development positions as I feel confident in applying the skills I've learned to a professional setting.
              </p>

              <h3 style={{ textAlign: "center" }}>Books</h3>
              <p style={{ textAlign: "center" }}>I am reading two books at the moment. </p>
              <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                <img style={{ width: `35%`, height: "auto" }} alt="The Name Of The Wind Book" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1515589515l/186074._SX318_.jpg" />
                <img style={{ width: `35%`, height: "auto" }} alt="A Mind for Numbers Book" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1575009552l/18693655._SY475_.jpg" />
              </div>
              <p>I believe the secret to success is to constantly improve and refine your skills. I want to learn more effectively and efficiently to make the most out of my Pomodoro process and become a better writer.</p>

              <h3 style={{ textAlign: "center" }}>Games</h3>
              <p>I still play CS:GO during my leisure time<span role="img" aria-label="SunglassSmiley">😎</span>. I have been bouncing between Vermintide 2 with a couple of my friends and playing Borderlands 3!</p>

              <h3 style={{ textAlign: "center" }}>Side-Projects</h3>
              <p>I am helping my friend with his application for CS:GO called <a href="https://scrim.app/" target="_blank" rel="noopener noreferrer">Scrim.app</a> and building multiple projects with React found in my <a href="https://github.com/kxdang" target="_blank" rel="noopener noreferrer">Github.</a></p>

              <p style={{ textAlign: "center", marginBottom: "0", fontSize: "0.8em", fontStyle: "italic" }}>Last updated (March 1st 2020)</p>
            </div>
            <footer><p style={{ textAlign: "center", marginBottom: "0", fontSize: "0.8em", fontStyle: "italic" }}>/now page inspired by <a href="https://sivers.org/nowff" target="_blank" rel="noopener noreferrer">Derek Sivers</a></p></footer>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default now
