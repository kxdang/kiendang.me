import React from 'react'
import { rhythm } from "../utils/typography"
import { Link } from "gatsby"
import { Highlight } from "react-instantsearch-dom"
import "./layout.css"

export default function SearchPreview({ hit, title, date, readingTime, description, excerpt, slug }) {
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
                <Highlight hit={hit} attribute="title" tagName="mark" />
            </Link>
        </h3>

        <p style={{ marginBottom: `0.5rem`, marginTop: `0.3rem` }}>
        </p>
        <small>{date} - {readingTime.text}</small><br />
        <Highlight hit={hit} attribute="excerpt" tagName="mark" />
        {/* <p
            dangerouslySetInnerHTML={{
                __html: description || excerpt,
            }}
        /> */}
    </div>)
}