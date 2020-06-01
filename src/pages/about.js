import React from "react"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"
import { Link } from "gatsby"
import Switch from "react-switch"

import { GiBookshelf, GiMouse } from "react-icons/gi"
import { FaKeyboard, FaClock } from "react-icons/fa"

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
                <Switch
                  onChange={theme.toggleDark}
                  checked={theme.dark}
                  onColor="#292D3E"
                  offColor="#292D3E"
                  offHandleColor="#fefefe"
                  onHandleColor="#292D3E"
                  checkedIcon={
                    <span
                      style={{ marginLeft: "0.3rem" }}
                      role="img"
                      aria-label="sun"
                    >
                      🌞
                    </span>
                  }
                  uncheckedIcon={
                    <span
                      style={{ marginLeft: "0.3rem" }}
                      role="img"
                      aria-label="moon"
                    >
                      🌒
                    </span>
                  }
                  boxShadow="0 0 2px 3px #226597"
                  activeBoxShadow="0 0 2px 3px #89ddff"
                />
              </div>
              <Bio />
              <h3 style={{ textAlign: `center` }}>Hello <span role="img" aria-label="wave">👋</span></h3>
              <p>
                My name is Kien (pronounced /'key in/). I have a Bachelor
                of Science in Honours Biochemistry from the University of
                Waterloo.
                <br />
                <br />
                I have held many positions during my co-op education and have
                over 2 years of professional work experience at a chemical
                company specializing in polyurethane foam for the automotive
                industry.
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
                hope to become a better writer by blogging.
              </p>
              <h3 style={{ textAlign: `center` }}>Career Change</h3>
              <p>
                I <a href="/040-new-chapter-2019/">resigned </a>from my job back in May of 2019 and I'm currently in
                the process of pursuing a programming career in front-end web
                development. I documented my entire journey on my blog and
                tracked my progress using the{" "}
                <a href="/022-pomodoro-technique/">Pomodoro Technique</a>.
              </p>

              <p style={{ textAlign: `center`, marginBottom: `0px` }}>
                <a href="/066-2019-yearend-pomodoro/">Year End Progress 2019</a>
              </p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>&darr;</p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>
                <a href="/084-april-2020-pomodoro/">
                  Current Progress for 2020
                </a>
              </p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>&darr;</p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>&darr;</p>
              <p
                style={{
                  textAlign: `center`,
                  justifyItems: `center`,
                }}
              >

                <span role="img" aria-label="celebrate">🎉</span>

              </p>
              <p>
                I'm always looking to improve my skills and be the best version
                of myself. If you have any questions, please send me an email: <a href="mailto: hello@kien.dev">hello@kien.dev</a>
              </p>
              <blockquote>
                Everything is a skill, and thus everything can be learned,
                improved on, and mastered, given enough time and effort. —
                Serena Chen
              </blockquote>

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
                  href="/024-watches/"
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
          </div >
        )
        }
      </ThemeContext.Consumer>
    )
  }
}

export default about
