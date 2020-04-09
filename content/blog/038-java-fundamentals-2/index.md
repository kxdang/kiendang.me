---
author: Kien
date: 2019-02-25 02:08:42+00:00
slug: java-fundamentals-pt-2
title: "Java Pt. 2: Fundamentals Cont'd"
description: "Learning about containers in Java"
tags: ["java"]
---

### <center>Containers</center>

You don’t know how many objects you will need to solve a problem or how to store them or even how much space is required if the information isn’t known until the program is ran.

For this, you will be using an object called a **container** (or a collection) and will expand itself every time it is required. Java has different types of containers for different needs, these are Lists classes (holds sequences) Maps (associative arrays, associates objects with other objects) and Sets (to hold one of each type of object).

Java containers provide different types of interfaces and external behaviours, so one of these might solve your solution better than another. Different containers have different efficiencies for certain operations.

Example:

List: **ArrayList** and **LinkedLinks**

Both can have identical interfaces and external behaviours, however, they can have significantly different costs of resources. ArrayLists is a constant-time operation, it takes the same amount of time regardless of the elements you select. A LinkedList takes longer to find random elements that is farther down the list but faster to insert an element in the middle of a sequence.

Containers only hold Objects, so when you add an object reference into the container, it only upcasts to an Object. In this specific example of finding the type of Object, we need to do something called downcasting. Remember that upcasting a Circle is a Shape so it is safe to upcast, however, you don’t know if the object is a Shape or a Circle, so downcasting is not ideal here. If downcasting finds the wrong thing, you will have a runtime error called _exception._

Downcasting and runtime checks require cost extra for running the program, so in order to create the container so it knows the type it holds and reduce downcast, we can use something called **parameterized** type mechanism. It is a class that runs to customize work with particular types and is used by creating angle brackets (these are the use of generics)

```java
    ArrayList<Shape> shapes = new ArrayList<Shape>();
```

### <center>Object Creation and Life Time </center>

One of the major issues working with object is the way they are created and destroyed as they require resources and most importantly, memory to exist. When an object is destroyed, it frees up resources to be reused.

The issue becomes more prominent when you want to destroy objects and you don’t know when to. The resolution for this is to create objects dynamically in memory called the heap. Java uses a dynamic memory allocation and you would use the **new **operator to build a dyanmic instance of that object. The lifetime of that object is determined when the **garbage collector** (feature in Java) discovers that the object is no longer in use and destroys it. The garbage collector feature in Java knows when an object is not in use and automatically frees up memory.

### <center>Exception Handling in Java</center>

Exception handling helps your code simpler to write because you aren’t constantly checking for errors, when something goes wrong a thrown exception. An exception cannot be ignored and provide away to recover your code and create robust programs.

### <center>Concurrent Programming </center>

A fundamental concept of programming is the idea off handling multiple tasks at the same time. Within a program, these separate running “threads” provide a more responsive program. The tasks can run in parallel if your operating system can support multiple processors. However, there is a catch when you are trying to access the shared resources. This becomes a bottleneck and two processes cannot access a single resource at the same time. Java's concurrency is built into the language.
