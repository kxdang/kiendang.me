---
author: Kien
date: 2019-01-05 00:15:45+00:00
title: Java - Object Oriented Programming
tags: ["java"]
---

I am currently reading Head First Java to understand the object oriented programming and brush up on any Java concepts I’m struggling with such as inheritance of methods and the syntax on how to declare variables, try and catch and interfaces.

In object oriented programming, we have something called inheritance where there are classes that inherit methods from a superclass. This will allow a user to create subclasses and inherit methods that can be reused. The most important concept here is we can override these methods to adapt to any changing circumstances.

When declaring a variable, for Java, there are two types. The first types are primitives data and the second is object references. Object references have a specific way of declaring them. For example, creating a Dog object that will have methods such as Bark, Play, Trick.

```java
    Dog Fido = new Dog()
```

`Dog Fido`, which reference `Fido` as a new `Dog` object. The right hand side of the declaration creates a new Dog. To access Fido’s methods, we can use the `Fido.Bark()`, `Fido.Play()` and `Fido.Trick()`. The syntax here uses a dot syntax to access a method within a class.

A class is not an object but is used to construct them. Essentially they are the blueprint of an object. When designing classes it should be noted that it is something that object knows (instance variables) and what the objects can do (methods).

When diving straight into Android Development, my lack of understanding Java made it a little difficult. OOP is something new to me. I wrote this post here to remind myself what I learned as I was doing Android development and what other concepts I need to figure out in addition to Android.
