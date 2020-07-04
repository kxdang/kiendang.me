import React from "react"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"
import { Link } from "gatsby"
import Switch from "react-switch"
import { Twemoji } from "react-emoji-render"
import { GiBookshelf, GiMouse } from "react-icons/gi"
import { FaKeyboard, FaClock } from "react-icons/fa"
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';


import ThemeContext from "../context/ThemeContext"

import "../styles/styles.scss"

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
                    borderBottom: `none`,
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
              <Bio />
              <h3 style={{ textAlign: `center` }}>
                Hello{" "}
                <span role="img" aria-label="wave">
                  👋
                </span>
              </h3>
              <p>
                My name is Kien (pronounced /'key in/). I have a Bachelor of
                Science in Honours Biochemistry from the University of Waterloo.
                <br />
                <br />
                I’m a self motivated learner who likes to program and one of my
                favourite things to do is try to automate tasks I encounter
                every day and improve the quality of life through science and
                technology.
                <br />
                <br />
                My blog is a platform to share my experiences, interests, introspection and current progress with programming. In addition, I
                hope to become a better writer by blogging.
              </p>
              <h3 style={{ textAlign: `center` }}>Career Change</h3>
              <p>
                I <a href="/040-new-chapter-2019/">resigned </a>from my job back
                in May of 2019 to pursue my passion in programming. I happy to
                say that I am now employed as a Software Developer at{" "}
                <a
                  href="https://www.coveo.com/Coveo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Coveo
                </a>{" "}
                <span role="img" aria-label="celebrate">
                  💙🧡
                </span>
                <br></br>
                <br></br>I documented my entire journey on my blog and tracked
                my progress using the{" "}
                <a href="/022-pomodoro-technique/">Pomodoro Technique</a>.
              </p>

              <Timeline lineColor={'#ddd'}>
                <TimelineItem
                  key="001"
                  dateText="11/2010 – Present"
                  style={{ color: '#e86971' }}
                >
                  <h3>Title, Company</h3>
                  <h4>Subtitle</h4>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
    </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
    </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
    </p>
                </TimelineItem>
                <TimelineItem
                  key="002"
                  dateText="04/2009 – 11/2010"
                  dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                  bodyContainerStyle={{
                    background: '#ddd',
                    padding: '20px',
                    borderRadius: '8px',
                    boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                  }}
                >
                  <h3 style={{ color: '#61b8ff' }}>Title, Company</h3>
                  <h4 style={{ color: '#61b8ff' }}>Subtitle</h4>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
    </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
    </p>
                </TimelineItem>
                <TimelineItem
                  key="003"
                  dateComponent={(
                    <div
                      style={{
                        display: 'block',
                        float: 'left',
                        padding: '10px',
                        background: 'rgb(150, 150, 150)',
                        color: '#fff',
                      }}
                    >
                      11/2008 – 04/2009
                    </div>
                  )}
                >
                  <h3>Title, Company</h3>
                  <h4>Subtitle</h4>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
    </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
    </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
    </p>
                </TimelineItem>
                <TimelineItem
                  key="004"
                  dateText="08/2008 – 11/2008"
                  dateInnerStyle={{ background: '#76bb7f' }}
                >
                  <h3>Title, Company</h3>
                  <h4>Subtitle</h4>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
    </p>
                  <p>
                    Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                    exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                    nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                    est.
    </p>
                </TimelineItem>
              </Timeline>

              <p style={{ textAlign: `center`, marginBottom: `0px` }}>
                <a href="/066-2019-yearend-pomodoro/">Year End Progress 2019</a>
              </p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>&darr;</p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>&darr;</p>
              <p style={{ textAlign: `center`, marginBottom: `12px` }}>
                <span
                  style={{ fontSize: `2rem` }}
                  role="img"
                  aria-label="drinks"
                >
                  🍾
                </span>
                <a href="/091-new-chapter/">Employment @ Coveo</a>
                <span
                  style={{ fontSize: `2rem` }}
                  role="img"
                  aria-label="celebrate"
                >
                  🎉
                </span>
              </p>
              <p style={{ textAlign: `center`, marginBottom: `0px` }}>
                <a href="/092-year-journey-summary/">
                  Year Progression Summary (May 2019-2020)
                </a>
                <span
                  style={{ fontSize: `1.4rem` }}
                  role="img"
                  aria-label="celebrate"
                >
                  💻
                </span>
              </p>
              <p
                style={{
                  fontSize: `1.4rem`,
                  textAlign: `center`,
                  marginBottom: `0px`,
                }}
              >
                &delta;
              </p>

              <p style={{ textAlign: `center`, marginBottom: `4rem` }}>
                <a href="/090-may-2020-pomodoro/">
                  Continuous Improvement Initiative
                </a>
                <span
                  style={{ fontSize: `1rem` }}
                  role="img"
                  aria-label="growth"
                >
                  📈
                </span>
              </p>

              <p>
                I'm always looking to improve my skills and be the best version
                of myself. Feel free to browse around!
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
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default about
