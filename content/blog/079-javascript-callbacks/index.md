---
author: Kien
date: 2020-04-16
slug: javascript-callbacks
title: ✍What are callbacks?
description: What are callbacks and why are they useful?
tags: ["javascript"]
---

## <center> What is a callback function</center>
A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete an action or routine. It is also a function that is executed after another function is finished when called in as the argument, hence, the name "call back".

### <center> Why are they important?</center>

There are times where we request data from an external source such as an API and we have no idea when it will respond back with data. In this case, we want to wait for the data before we proceed to the next function. Thus, a callback can be used.


JavaScript will not wait for a response before moving on to execute the next function, therefore, you need a callback to wait for a response from the server in order to have the information ready.

Without a callback, JavaScript will keep executing while listening for other events. Callbacks allow us to wait for a function to complete execution before running it.
