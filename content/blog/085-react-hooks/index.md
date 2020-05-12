---
author: Kien
date: 2020-05-06
slug: react-hooks
title: ⚓React Hooks
description: A deeper dive in React Hooks and their purpose.
tags: ["webdev","react"]
---

Technology moves quickly and I realized that if you are not constantly learning, you'll feel behind in the world of web development. Developing skills to learn quickly is a lifelong journey and that is why I find web development a conducive environment for my visions of continuous learning.


For the past few months, I’ve taken a deeper dive in learning how to build with React and what I noticed was when completing the Modern React Bootcamp, my `npx create-react-app` boilerplate started off with a functional component. I finished the course building multiple class based React projects but had very little exposure to Hooks.


It seems like the React community developers have been pushing for functional components. The newly added Hooks give extra functionality allowing function components to behave similarly to classes but with less code. 


Class components are here to stay and there’s no plans on it being removed but it is encouraged to develop future components using Hooks.

I decided to learn more about React Hooks and how I can use them in my future projects. I will be doing a material dump on React Hooks and what I have learned so far. 


Hopefully by writing it here on my blog, it will help cement the concepts I’ve learned and be used as reference material since I wrote them in my own words. In addition, I will be trying my best to build new projects using Hooks to have a better understanding of them.

# <center>What are React Hooks?</center>

React Hooks add extra functionality to React functional components. There are many different Hooks such as useState, useEffect, useReducer, useRef and the ability to create custom Hooks. 

## <center> What problems do React Hooks solve? </center>
It allows us to add state to functional components, improves code reuse and compositions and solve the problems below:

When using class based components, you need to initialize the state of the component inside the constructor method as a state property of the instance and you must invoke the super function and pass in props before you can use the “this” keyword:

```
constructor (props) {
 super(props) // … 
}
```

In addition, you need to bind functions in the constructor, which is generally more performant than binding inline or using arrow functions because you generate new functions on every render which can be expensive.

You also need to organize components by lifecycle methods which forces us to have related logic throughout our components and React has no good primitive way of sharing non-visual logic.

# <center> What is the useState Hook? </center>
It is a React Hook that allows us to trigger a re-render on a component and preserves values in between renders. Similar to setState in class based components.

## <center> What’s the difference between the setState and useState? </center>
Class based components - setState allows you to update anything in the state as you can pass it in an object. It lets you change one thing at a time and merge the rest of the object unchanged, thus creating a new state with one piece of data changed.

Functional based components - setSpecificState(value) – allows you to update one thing at a time, setSpecificValue is the naming convention. It does not replace one thing at a time, it replaces it completely, that’s why each piece will need its own state. However, you can use something called useReducer (which will be saved for another post with useEffect)

```JSX
state = {
  loading: true,
  authed: false,
  data: [],
};
const [loading, setLoading] = useState(true);
const [authed, setAuthed] = useState(false);
const [data, setData] = useState([]);
```

A good example of showing useState in action is to create a counter application below comparing the class based component and function based component.

Class based component:

```JSX
import React, { Component } from "react";
export default class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.increment = this.increment.bind(this);
  }
  increment() {
    this.setState((pvState) => ({ count: pvState.count + 1 }));
  }
  render() {
    return (
      <div>
        {" "}
        <h1>The Count Is: {this.state.count}</h1>{" "}
        <button onClick={this.increment}>Add 1</button>{" "}
      </div>
    );
  }
}
```

Function based component:

```JSX
import React, { useState } from "react";

function CounterHooks() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>The Count Is:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add 1</button>
    </div>
  );
}
export default CounterHooks;

```

As you can see, function components use much less code than the class based component. The useState is destructed to take the initial state and a function to update that state.

Before this post gets too long, I’d like to end it off here. There are many new Hooks found in the React documentation and I will be writing more regarding useEffect, useReducer and useRef. I find it enjoyable to write and try to explain these concepts to myself to help me learn.




