import React from 'react'
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"

export default function SearchPreview({ title, date, readingTime, description, excerpt, slug }) {
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

        <p style={{ marginBottom: `0.5rem`, marginTop: `0.3rem` }}>
        </p>
        <p>{date} - {readingTime.text}</p>
        <p
            dangerouslySetInnerHTML={{
                __html: description || excerpt,
            }}
        />
    </div>)
}