import React from 'react'
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

export default function PostPreview({ title, date, tags, description, excerpt, slug, readingTime }) {
    return (<div>
        <h3
            style={{
                marginBottom: rhythm(1 / 4),
            }}
        >
            <Link
                style={{ boxShadow: `none`, borderBottom: "none" }}
                to={slug}
            >
                {title}
            </Link>
        </h3>
        <small>
            {date} - {readingTime.text}{" "}
            {readingTime.minutes > 0 &&
                readingTime.minutes <= 2
                ? "🍵"
                : readingTime.minutes > 2 &&
                    readingTime.minutes <= 3
                    ? "🍵🍵"
                    : readingTime.minutes > 3 &&
                        readingTime.minutes <= 5
                        ? "🍵🍵🍵"
                        : "🍵🍵🍵🍵"}
            <p style={{ marginBottom: `0.5rem`, marginTop: `0.3rem` }}>
                {tags.length > 1 ? (
                    tags.map(t => (
                        <Link
                            to={`/tags/` + t}
                            className={`${t} alltags`}
                            style={{ marginRight: `3px` }}
                        >
                            {t.replace(/-/g, " ")}
                        </Link>
                    ))
                ) : (<Link
                    to={`/tags/` + tags}
                    className={`${tags} alltags`}
                >
                    {tags}
                </Link>
                    )}
            </p>
        </small>
        <p style={{ marginBottom: `0.5rem`, marginTop: `0.3rem` }}>
        </p>
        <p
            dangerouslySetInnerHTML={{
                __html: description || excerpt,
            }}
        />
    </div>)
}