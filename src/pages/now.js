import React from "react"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"
import { Link, graphql } from "gatsby"
import Switch from "react-switch"
import Img from "gatsby-image"
import ThemeContext from "../context/ThemeContext"


import "../components/layout.css"

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

              <h3 style={{ textAlign: "center" }}>
                What am I doing at the moment?
              </h3>
              <p>
                📝I am currently learning Redux and TypeScript as a personal initiative to fill the knowledge I need for my new position.
              <br></br>
                <br></br>
                🎯I am still focused on studying algorithms and data structures to understand the fundamentals of computer science.

              </p>


              <h3 style={{ textAlign: "center" }}>Books</h3>
              <p style={{ textAlign: "center" }}>I am reading: </p>
              <div style={{ display: "flex", justifyContent: "space-evenly", paddingBottom: "2rem" }}>
                <Img style={{ width: "35%" }} fluid={book.bookone.childImageSharp.fluid} alt="Red Rising" />
                <Img style={{ width: "35%" }} fluid={book.booktwo.childImageSharp.fluid} alt="The Daily Stoic" />
              </div>
              <p>
                I am reading a new book called Red Rising and hoping that the third book of the The Kingkiller Chronicle will release sometime this year.
              </p>


              {/* <h3 style={{ textAlign: "center" }}>Games</h3>
              <p style={{ textAlign: "center" }}>
                Currently enjoying Valorant
                <span role="img" aria-label="SunglassSmiley">
                  🙂
                </span>
              </p> */}

              <h3 style={{ textAlign: "center" }}>Side-Projects</h3>
              <p>
                I am currently working on a full stack application and learning React Hooks by building multiple projects found here on my {" "}
                <a
                  href="https://github.com/kxdang"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github.
                </a>

                {" "} I am periodically updating <a href="https://notcodenames.com/">notcodenames</a> by applying new React concepts I am learning. I hope to be able to create a dark mode theme toggle, add colour blind mode and fix current issues.
              </p>

              <p
                style={{
                  textAlign: "center",
                  marginBottom: "0",
                  fontSize: "0.8em",
                  fontStyle: "italic",
                }}
              >
                Last updated on May 30th 2020
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
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default now

export const pageQuery = graphql`
query Books {
  bookone: file(relativePath: { eq: "books/book1.png"}) {
    childImageSharp{
      fluid {
        ...GatsbyImageSharpFluid
      } 
    }
  }
  booktwo: file(relativePath: { eq: "books/book2.jpg"}) {
    childImageSharp{
      fluid {
        ...GatsbyImageSharpFluid
      } 
    }
  }
}
  
`