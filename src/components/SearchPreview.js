import React from "react"
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
import { Highlight } from "react-instantsearch-dom"
import "./layout.css"
import { Twemoji } from "react-emoji-render"

export default function SearchPreview({ hit, date, readingTime, slug }) {
  return (
    <div>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none`, borderBottom: "none" }} to={slug}>
          <Highlight
            hit={<Twemoji text={hit} />}
            attribute="title"
            tagName="mark"
          />
        </Link>
      </h3>

      <p style={{ marginBottom: `0.5rem`, marginTop: `0.3rem` }}></p>
      <small>
        {date} - {readingTime.text}{" "}
        {readingTime.minutes > 0 && readingTime.minutes <= 2
          ? "🍵"
          : readingTime.minutes > 2 && readingTime.minutes <= 3
          ? "🍵🍵"
          : readingTime.minutes > 3 && readingTime.minutes <= 5
          ? "🍵🍵🍵"
          : "🍵🍵🍵🍵"}
      </small>
      <br />
      <Highlight hit={hit} attribute="excerpt" tagName="mark" />
    </div>
  )
}
