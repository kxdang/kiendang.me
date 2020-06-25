import React from "react"
import { Twemoji } from "react-emoji-render"
import { Link } from "gatsby"
import { rhythm } from "../utils/typography"
import { timeWithTea } from "../utils/utils"

export default function PostPreview({
  title,
  date,
  tags,
  description,
  excerpt,
  slug,
  readingTime,
}) {
  return (
    <div key={slug}>
      <h3
        style={{
          marginBottom: rhythm(1 / 4),
        }}
      >
        <Link style={{ boxShadow: `none`, borderBottom: "none" }} to={slug}>
          <Twemoji text={title} />
        </Link>
      </h3>
      <small>
        {date} - {readingTime.text}{" "}
        {timeWithTea(readingTime.minutes)}
        <p style={{ marginBottom: `0.5rem`, marginTop: `0.3rem` }}>
          {tags.length > 1 ? (
            tags.map(t => (
              <Link
                key={t}
                to={`/tags/` + t}
                className={`${t} alltags`}
                style={{ marginRight: `3px` }}
              >
                {t.replace(/-/g, " ")}
              </Link>
            ))
          ) : (
              <Link to={`/tags/` + tags} className={`${tags} alltags`}>
                {tags}
              </Link>
            )}
        </p>
      </small>
      <p style={{ marginBottom: `0.5rem`, marginTop: `0.3rem` }}></p>
      <p
        dangerouslySetInnerHTML={{
          __html: description || excerpt,
        }}
      />
    </div>
  )
}
