---
author: Kien
date: 2020-04-15
slug: first-javascript-post
title: ✍What are closures?
description: What are closures and why are they useful?
tags: ["javascript"]
---

Recently, most of my time has been devoted to development and learning the tools to build projects related web development and I feel like I should start posting about the material I've learned to help me retain important concepts that I might see or use in the future.

Writing will help me stay accountable while also improving my writing skills. I want to be able look back in the future to see my own progression on the topics I've learned.

## <center> What are closures? </center>

A closure in JavaScript refers to the combination of a function and the lexical scope in which the function was defined.

A basic example of a closure:

```JavaScript
const myFunction = () => {
  const message = "This is a message";
  const printMessage = () => {
    console.log(message);
  };
  printMessage();
};

myFunction() // will return "This is a message"

```

If we were to make some edits below:

```JavaScript
const myFunction = () => {
  const message = "This is a message";
  const printMessage = () => {
    console.log(message);
  };
  printMessage();
};

const banana = myFunction()
banana()  // will return "This is a message"

```

We stored a function inside a constant variable called `banana` and we called it at the end, which is after the completion of the first function. The `printMessage` still runs and has access to the message inside of myFunction and returns the message.

### <center>Why are closures useful? </center>

They are useful because it allows for certain patterns that allow functions within a function to have access to things like a callback and be able to run after the main function has completed. It is also used to curry functions or create private variables.

### <center>What is currying?</center>

Closures can be used to perform currying which is the process of converting a function with several arguments into a sequence of functions that each take a single argument.

An example:

```JavaScript
const createAdder = (a) => {
    return (b) => {
        a + b
    }
}

const add10 = createAdder(10)
console.log(add10(-2)) // executes 10 - 2 which returns 8

const add100 = createAdder(100)
console.log(add100(-90)) // executes 100 - 90 which returns 10

```

### <center>What is the purpose of currying?</center>

It is useful when we want to reduce the number of arguments in a function by returning functions that take one argument at a time. The arguments are kept alive via closures and when all are used, then the final function in the currying chain is returned and executed.

### <center>What about creating private variables?</center>

An example:

```JavaScript
const createCounter = () => {
    let count = 0;
    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()

counter.increment() // 0 + 1 = 1
counter.decrement() // 1 - 1 = 0
counter.decrement() // 0 - 1 = -1
console.log(counter.get()) // will return -1
```

It allows us to control exactly what `count` is and the only way to increment or decrement `count` is by the use of the specific methods defined in createCounter. The user cannot add 100 to the counter by doing `counter.count = 100`. It will not work.

## <center>Why is this useful?</center>

It only allows the user to change the variable based on the interface that was provided by createCounter. Interface refers to the methods available to change the `count` variable.
