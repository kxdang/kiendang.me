import React from "react"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"
import { Link } from "gatsby"

import { GiBookshelf, GiMouse } from "react-icons/gi"
import { FaLinkedin, FaKeyboard, FaClock } from "react-icons/fa"

import ThemeContext from "../context/ThemeContext"

import "../components/layout.css"
class about extends React.Component {
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
              <h3 style={{ textAlign: `center` }}>About me</h3>
              <p>
                Hello, my name is Kien (pronounced "key in"). I have a Bachelors
                of Science in Honours Biochemistry from the University of
                Waterloo. I have held many positions during my co-op education
                and have over 2 years of professional work experience at a
                chemical company specializing in polyurethane foam for the
                automotive industry.
                <br />
                <br />
                I’m a self motivated learner who likes to program and one of my
                favourite things to do is try to automate tasks I encounter
                every day and improve the quality of life through science and
                technology.
                <br />
                <br />
                My blog is a platform to share my experiences, interests,
                hobbies and current progress with programming. In addition, I
                hope to become a better writer by blogging. Feel free to browse
                around! (Click on Dang it above){" "}
              </p>
              <h3 style={{ textAlign: `center` }}>My Journey</h3>
              <p>
                I'm currently in the process of pursuing a programming career in
                front-end web development. I resigned from my job back in May of
                2019 and have been documenting my progress here on my blog.
              </p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>
                <a href="/025-biochemistry-story/">My Biochemistry Story</a>
              </p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>&darr;</p>

              <p style={{ textAlign: `center`, marginBottom: `0px` }}>
                <a href="/040-new-chapter-2019/">Resignation May 2019 </a>
              </p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>&darr;</p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>
                <a href="/066-december-2019-yearend-pomodoro/">
                  Year End Progress 2019
                </a>
              </p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>&darr;</p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>
                <a href="/067-january-2020-pomodoro/">
                  Current Progress for 2020
                </a>
              </p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>&darr;</p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>&darr;</p>
              <p
                style={{
                  display: `flex`,
                  justifyItems: `center`,
                }}
              >
                <a
                  href="https://www.linkedin.com/in/kien-dang/"
                  style={{
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    margin: `auto`,
                  }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Maybe working for your company?{" "}
                  <FaLinkedin
                    style={{ fontSize: `1.3em`, marginLeft: `0.2em` }}
                  />
                </a>
              </p>
              <blockquote style={{ textAlign: "center" }}>Everything is a skill, and thus everything can be learned, improved on, and mastered, given enough time and effort. — Serena Chen</blockquote>
              <p>
                I still have a lot to learn and I'm in the process of gaining
                experience by going the self-taught route. I'm always looking to
                improve my skills and be the best version of myself. If you feel
                like I'd be a great addition to your team, feel free to contact
                me!
              </p>
              <h3 style={{ textAlign: `center` }}>Interests & Hobbies</h3>
              <div className="about__icons">
                <a
                  href="https://www.goodreads.com/review/list/63733680-kien-dang?shelf=read"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    margin: `auto`,
                  }}
                >
                  <GiBookshelf
                    className="icon"
                    style={{ marginRight: `0.3rem` }}
                  />{" "}
                  Books
                </a>
              </div>
              <div className="about__icons">
                <a
                  href="https://store.steampowered.com/app/730/CounterStrike_Global_Offensive/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    margin: `auto`,
                  }}
                >
                  <GiMouse className="icon" /> PC Gamer
                </a>
              </div>
              <div className="about__icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    margin: `auto`,
                  }}
                >
                  <FaClock
                    className="icon"
                    style={{ fontSize: `1rem`, marginRight: `0.3rem` }}
                  />{" "}
                  Watches
                </a>
              </div>
              <div className="about__icons">
                <a
                  href="https://www.reddit.com/r/MechanicalKeyboards/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: `flex`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    margin: `auto`,
                  }}
                >
                  <FaKeyboard
                    className="icon"
                    style={{ fontSize: `1rem`, marginRight: `0.3rem` }}
                  />{" "}
                  r/mk
                </a>
              </div>
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default about
