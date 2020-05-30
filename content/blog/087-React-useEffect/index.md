---
author: Kien
date: 2020-05-11
slug: react-useeffect
title: 📺 React useEffect
description: What are useEffects used for?
tags: ["react"]
---

# <center> What are React useEffects?</center>

It is a React Hook used to perform side effects in functional components.
Side effects are anything that can be observed or interact with the outside of its local environment.

React useEffect allows us to do this with our application, such as calling an API. There are 3 main concepts about useEffect
-	Adding an effect (e.g API call)
-	Skip re-invoking the effect
-	Cleaning up the effect (optional)

When using useEffect, anything inside of the hook will invoke on **initial render** and **after React updates the DOM**.
There are also three ways to use useEffect depending on your scenario:

```JSX
React.useEffect(() => {
  // Will be invoked on the initial render 
  // and all subsequent re-renders.
})

React.useEffect(() => {
  // Will be invoked on the initial render
  // and when "id" or "authed" changes.
}, [id, authed])

React.useEffect(() => {
  // Will only be invoked on the initial render
 // Pass an empty array to stop the infinite loop!
}, [])
```

A simple use case for useEffect would be loading an API request to retrieve information. This pattern will be often be seen in useEffect. 

For my recent personal project, I wanted to fetch a random motivational quote for my Pomodoro application on initial render. Here’s how I implemented my API call in my useEffect hook:

```JSX
import React, { useState, useEffect } from 'react'

export default function Quoteblock() {
    const [quoteData, setQuoteData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://type.fit/api/quotes')
            .then(res => res.json())
            .then(data => {
                const randomQuote = data[Math.floor(Math.random() * data.length)]
                setQuoteData(randomQuote)
                setIsLoading(false)
            })


    }, [])

    return (
        <div>
            <blockquote><p>"{!isLoading && quoteData.text}"</p><p>— {!isLoading && quoteData.author}</p></blockquote>
        </div>
    )
```
Skipping an effect is important depending on what you need it for, the second argument in useEffect is an array of dependencies that will invoke useEffect if any information in the array changes. For my current API call, I passed in an empty array, otherwise it will cause an infinite loop and call my API multiple times.

I also ran into an issue where my API returned null, a fix for this was to create a loading state so that it waits for my data to retrieve before trying to interpolate it in my DOM.

Another simple use case with the useEffect hook was to update the browsers tab title to show the time left.

```JSX
  useEffect(() => {
    document.title = `${formattedTimeLeft} - ${session}`

  }, [timeLeft])
```


`timeLeft` is a state that decremented every second and is a dependency on this useEffect. Basically, every time my state changed, my useEffect would run and invoke the `document.title` to update the title to the current time. 

Cleaning up the effect is optional. We can clean up the useEffect by returning a function, this function will be invoked right before the component is removed from the DOM. When the component is re-rendered, the cleanup function for the previous render effect will be invoked before re-invoking the new effect.


### <center> Why this cleaning up useful? </center>
I haven’t used this functionality yet, but it’s useful for situations such as: if we were to generate data from a user, the clean up function can be used to unsubscribe to the person and reset the profile so that its available for someone else’s data. 
