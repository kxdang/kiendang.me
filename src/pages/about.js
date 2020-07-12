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
import "../styles/timeline.scss"

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

                <br />
                <br />
                I'm always looking to improve my skills and be the best version
                of myself. Feel free to browse around!

              </p>
              <h3 style={{ textAlign: `center` }}>My Career Change Journey</h3>
              <p>
                I'm happy to say that I am employed as a Software Developer at{" "}
                <a
                  href="https://www.coveo.com/Coveo"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Coveo
                </a>{" "}
                <span role="img" aria-label="celebrate">
                  <Twemoji text="💙🧡" />
                </span>
                <br></br>
                <br></br>I documented my entire journey on my blog and tracked
                my progress using the{" "}
                <a href="/022-pomodoro-technique/">Pomodoro Technique</a>.
              </p>

              <Timeline lineColor={'#ddd'} className={'timeline-custom'}>
                <TimelineItem
                  key="001"
                  dateText="2011 – 2016"
                  className={'start'}
                >
                  <h3><Twemoji text="👨‍🎓University of Waterloo" /></h3>
                  <h4><Twemoji text="👨‍🔬 " /><a href="/025-biochemistry-story">My Biochemistry Story</a></h4>
                  <p>
                    Graduated a 5 year co-op program with a Bachelors of Science in Honours Biochemistry (B.Sc.)
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="002"
                  dateText="2017 – 2019"
                  style={{ color: '#89DDFF' }}
                  className={'job-1'}
                >
                  <h3><Twemoji text="🏢 The Woodbridge Group" /></h3>
                  <h4><Twemoji text="💻 Costing Technologist" /></h4>
                  <p>
                    After graduating, I worked at a chemical company specializing in polyurethane for the automotive industry for over 2 years.
                  </p>
                  <p>
                    I <a href="/029-automated-job-process/">automated</a> a portion of my work using VBA which sparked my interest in programming.
                    </p>
                  <p>Thus, I decided to <a href="/040-new-chapter-2019/">resign</a> to pursue my passion and start my programming journey.</p>

                </TimelineItem>
                <TimelineItem
                  key="003"
                  dateText="May 3rd 2019"
                  dateInnerStyle={{ background: '#76bb7f' }}
                  style={{ color: '#76bb7f' }}
                >
                  <h3><Twemoji text="🚀 The Leap of Faith" /></h3>
                  <h4><Twemoji text="👨‍🚀 Begins The self-taught journey" /></h4>
                  <p>
                    I had plans to dedicate 100% of my time studying and learning HTML, CSS, JS and React as my framework of choice for web development.
                  </p>

                </TimelineItem>
                <TimelineItem
                  key="004"
                  dateText="June-Oct 2019"
                  dateInnerStyle={{ background: '#e86971' }}
                  style={{ color: '#e86971' }}
                >
                  <h3><Twemoji text="🏥 The Fall" /></h3>
                  <h4><Twemoji text="💊 Antibiotics galore" /></h4>
                  <p>
                    A month later, I encountered a health issue that required several hospitalizations. I was unable to focus due to my long recovery.
                  </p>
                  <p>
                    Through this difficult period, I created this <a href="/048-Gatsby-blog-transfer-2019/">blog</a> and decided to embrace the opportunity to document my journey, finding solace in the activity.
                  </p>
                  <p>
                    I started to change my perspective and draw inspiration from my negative experience.
                  </p>
                  <p>
                    I decided to write about my prescribed <a href="/tags/biochemistry/">medications</a> and my experience with them using my background in biochemistry.
                  </p>
                </TimelineItem>
                <TimelineItem
                  key="005"
                  dateText="End of 2019"
                  dateInnerStyle={{ background: '#89DDFF' }}
                  style={{ color: '#89DDFF' }}
                  className={'job-1'}
                >
                  <h3>The End of 2019</h3>
                  <h4><Twemoji text="💉 " /><a href="/060-propofol/">2 surgeries,<br /></a><Twemoji text="💊 " /><a href="/tags/biochemistry/">9 antibiotics,</a><br /> <Twemoji text="🌺 " /><a href="/062-opioids/">4 opioids,</a></h4>
                  <p>
                    Nearing the end of 2019, I had slowly worked my way back on my feet, using the momentum I built from creating this blog and writing about my journey.
                  </p>
                  <p>
                    By the end of this year, I managed to accomplish more than I thought I was going to, despite my circumstances.
                  </p>
                  <p><Twemoji text="🍅" /><a href="/066-2019-yearend-pomodoro/">My Year End Progress</a></p>
                  <p>I stuck with my process right into 2020 after almost being 100% recovered.</p>
                </TimelineItem>
                <TimelineItem
                  key="006"
                  dateText="May 2020"
                  dateInnerStyle={{ background: '#76bb7f' }}
                  style={{ color: '#76bb7f' }}
                >
                  <h3><Twemoji text="✅" /> Employment Found!</h3>
                  <h4><Twemoji text="🎉" /> <a href="/091-new-chapter/">Full time at Coveo</a> <Twemoji text="🍾" /></h4>
                  <p>
                    Honestly, 2019 hasn't been a kind year, but neither was 2020. After a year of studying, I accomplished my goal in becoming a developer.
                  </p>
                  <p>
                    <Twemoji text="🍅" /> <a href="/092-year-journey-summary/">
                      1031 Pomodoro's - 430 hours of work
                    </a>
                  </p>
                  <p>
                    The pandemic proved to be very difficult in my finding employment but after several interviews, I'm excited to start this new chapter in my journey!
                  </p>
                  <p>
                    I am pending my third and last surgery, hoping to close that chapter in my journey.
                  </p>
                </TimelineItem>
              </Timeline>

              <p style={{ textAlign: `center`, marginBottom: `4rem` }}>
                <a href="/094-june-2020-pomodoro/">
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
        )
        }
      </ThemeContext.Consumer>
    )
  }
}

export default about
