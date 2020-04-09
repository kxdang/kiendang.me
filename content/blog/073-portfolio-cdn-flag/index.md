---
author: Kien
date: "2020-03-28"
slug: canadian-flag-react
title: 🍁 Canadian Flag with React Icons
description: I accidentally found a creative way to show the Canadian flag using React Icons!
tags: ["webdev"]
---


After looking at other people's portfolio for inspiration, I noticed people included their Github and LinkedIn logos on the front of their page which made a lot of sense and thus, I decided to move mine as well.

My design choice was to have a line across the portfolio to provide a break between my title and summary and have the Github and LinkedIn logo in the center. However, upon looking at it, I realized it didn't look symmetrical with only two logos.

Eventually, as I was browsing through the [React Icons](https://react-icons.netlify.com/#/), I found a maple leaf icon, which would've been the perfect logo to show my Canadian roots and have it serve as a  link to this blog from my portfolio.

What happened next was a complete surprise, I initially had the circle version of the Github logo but I remembered Github had a square one and made the switch, and lo and behold, a subtle Canadian flag. I'm actually quite proud of this, so I thought I'd share my source code below, feel free to take this and tweet me if you ever use it [@k1dang](https://twitter.com/k1dang)!

A live preview on my [portfolio](https://www.kien.dev). Created with React Icons and CSS grid.

The HTML setup:

```HTML
 <div className="c-content-box__contact">
    <div className="c-content-box__contact--logo">
        <a
        href="https://www.linkedin.com/in/yourname/"
        target="_blank"
        rel="noopener noreferrer"
        >
        <FaLinkedin />
        </a>
        <a
        href="https://github.com/yourname"
        target="_blank"
        rel="noopener noreferrer"
        >
        <FaGithub className="c-content-box__contact--svg" />
        </a>
    </div>
</div>

```

I used the before and after pseudo-element to generate the lines and used CSS Grid to align them. Margins can be edited to control how far you want the lines to reach to the edge

The SASS setup: 


```CSS
&__contact {
    padding: 0.5rem 0 1rem;
    display: grid;
    grid-template-columns: 1fr min-content 1fr;
    grid-column-gap: 0.5rem;
    align-items: center;

    &--logo {
      display: flex;
    }
    a {
      border-bottom: none;
    }
    svg {
      vertical-align: middle;
      color: $light-gray-color;
      font-size: 1.3em;
      margin: 0 0.4rem;
      text-decoration: none;
    }
    &::before {
      content: "";
      height: 1px;
      display: block;
      background-color: $lighter-gray-color;
      margin-left: 5rem;
    }
    &::after {
      content: "";
      height: 1px;
      display: block;
      background-color: $lighter-gray-color;
      margin-right: 5rem;
    }
  }


```