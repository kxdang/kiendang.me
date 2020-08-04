import React from "react"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"
import { Link, graphql } from "gatsby"
import Switch from "react-switch"
import Img from "gatsby-image"
import ThemeContext from "../context/ThemeContext"
import { Twemoji } from "react-emoji-render"
import Bar from "../components/nowPomoData"
import "../styles/styles.scss"

class now extends React.Component {
  render() {
    const book = this.props.data

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

              <h3 style={{ textAlign: "center" }}>
                What am I doing at the moment?
              </h3>
              <p>
                <p style={{ textAlign: "center" }}><span style={{ fontSize: "1.2rem" }}><Twemoji text="💊" /></span><span style={{ color: "#08f334", fontWeight: '700' }}> [Recovering in progress]</span></p>


                <br />
                <span style={{ fontSize: "1.2rem" }}><Twemoji text="📝" /></span>
                <span style={{ color: "#ff5f40", fontWeight: '700' }}> [Paused] </span>
                <br />
                I am currently learning Redux and TypeScript as a personal
                initiative to fill the knowledge I need for my new position as a
                Software Developer at Coveo.
                <br></br>
                <br></br>
                <span style={{ fontSize: "1.2rem" }}><Twemoji text="🍅" /></span>
                <span style={{ color: "#ff5f40", fontWeight: '700' }}> [Paused] </span>
                <br />
                I am looking at resources to learn how to debug effectively and
                efficiently for my new role.
                <br></br>
                <br></br>
                <span style={{ fontSize: "1.2rem" }}><Twemoji text="🎯" /></span>
                <span style={{ color: "#ff5f40", fontWeight: '700' }}> [Paused] </span>
                <br />
                Studying algorithms and data structures to
                understand the fundamentals of computer science. However, I have now delayed this until I am able to figure a time frame of when I can fit this into my schedule in anticipation of my surgery.
              </p>

              <h3 style={{ textAlign: "center" }}>Currently Reading:</h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  paddingBottom: "2rem",
                }}
              >
                <Img
                  style={{ width: "35%", boxShadow: "-13px 42px 67px -30px rgba(0,0,0,0.75)" }}
                  fluid={book.bookone.childImageSharp.fluid}
                  alt="The Daily Stoic"
                />
                <Img
                  style={{ width: "35%", boxShadow: "-13px 42px 67px -30px rgba(0,0,0,0.75)" }}
                  fluid={book.bookfour.childImageSharp.fluid}
                  alt="Deep Work"
                />
              </div>
              {/* 
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  paddingBottom: "2rem",
                }}
              >
                <Img
                  style={{ width: "35%", boxShadow: "-13px 42px 67px -30px rgba(0,0,0,0.75)" }}
                  fluid={book.bookfour.childImageSharp.fluid}
                  alt="Deep Work"
                />
              </div> */}
              <ul style={{ textAlign: 'center', listStyleType: 'none' }}>
                <li>The Daily Stoic - Ryan Holiday</li>
                <li>Deep Work - Cal Newport</li>
              </ul>
    =
              {/* <h3 style={{ textAlign: "center" }}>Games</h3>
              <p style={{ textAlign: "center" }}>
                Currently enjoying Valorant
                <span role="img" aria-label="SunglassSmiley">
                  🙂
                </span>
              </p> */}

              <Bar />

              <p>
                The <a href="/022-pomodoro-technique/">Pomodoro Technique</a> helps manage my time and keeps me accountable for staying focused in achieving my goals. This data is an overview of 2020 and my <a href="/094-june-2020-pomodoro/">current progress</a>.
              </p>


              {/* <h3 style={{ textAlign: "center" }}>Side-Projects</h3>
              <p>
                Creating React-Redux applications with TypeScript to
                have a better grasp of the technology stack at my current
                position at Coveo. For personal interest and as a personal
                initiative to be more effective at work.
              </p> */}

              <p
                style={{
                  textAlign: "center",
                  marginBottom: "0",
                  fontSize: "0.8em",
                  fontStyle: "italic",
                }}
              >
                Last updated on August 4th 2020
              </p>
            </div>
            <footer>
              <p
                style={{
                  textAlign: "center",
                  marginBottom: "0",
                  fontSize: "0.8em",
                  fontStyle: "italic",
                }}
              >
                /now page inspired by{" "}
                <a
                  href="https://sivers.org/nowff"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Derek Sivers
                </a>
              </p>
            </footer>
          </div>
        )
        }
      </ThemeContext.Consumer>
    )
  }
}

export default now

export const pageQuery = graphql`
  query Books {
    bookone: file(relativePath: { eq: "books/book1.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bookthree: file(relativePath: { eq: "books/darkage.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bookfour: file(relativePath: { eq: "books/deepwork.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
