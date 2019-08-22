---
author: Kien
date: 2019-02-08 17:57:11+00:00
title: "Java Pt. 1: Fundamentals"
tags: ["java"]
---

I picked up Thinking in Java by Bruce Eckel to help develop my understanding of object oriented programming. When working with Java and trying to develop android applications I wanted to understand why the Java code is the way it is and how it works the way it does. I know that once I solidify my fundamentals of OOP, I'll recognize some of the core concepts when developing and eventually help me become a better programmer.

The concepts are taken from the book and are written in my own words to help me understand them as I go through the book. This post will be a long one.

Characteristics that represent a pure approach to object-oriented programming by Alan Kay:

1. Everything is an object

Thinking of objects as variables which store data but can make request to perform certain operations on itself

2. A program is a bunch of objects communicating to each other by sending messages

The messages are request to call a method belonging to a particular object

3. Each object has its own memory made up of other objects

We can create new objects by making a package that contains existing objects, therefore being able to build complex objects

4. Every object has a type

Each object is an instance of a class

5. All objects of a particular type can receive the same messages

For example, a circle object is an object type of shape. Shape type can be shared with other objects like triangle or square and any objects that will satisfy the shape description

Another description of an object from Booch:

An object has a state (internal data), behaviour (methods) and identity (unique address in memory).

### <center> **Interfaces**

All objects are unique but are part of a class of objects that share characteristics and behaviours. Creating abstract classes (data types) is a fundamental concept in OOP, we can create variable types (e.g objects or instances) and manipulate them. For the bank teller example, tellers, customers, accounts etc, are represented with a unique entity in the computer program. This unique entity is the object and each object belongs to a class that defines the characteristics and behaviours.

When a class is created, the programmer can make as many objects of that class and manipulate those objects to find a solution to the problem. Each object can satisfy only a certain request and the request that are made are defined by its **interface** and the type is what determines the interface.

An example would be a light bulb:

```java
    Light lt = new Light();
    lt.on();
```

The interface determines the request you can make for a specific object. The code is not written in the interface itself, but is hidden and comprises the _implementation_.

The Light is the name of the class and is called **lt**, the requests you can make from a Light object are turning it on, off, brighten or dim. The Light object is defined by a reference “**lt**” and calling new to create a new object. From there, the way to connect the interface is using the dot to manage the request to execute a function.

### **Think about objects as service providers**

The program provides services to the user by utilizing the functions of other objects. The idea is to locate existing code libraries (set of objects) that provide the ideal service to solve the problem.

High cohesion - fundamental quality of software design that means many aspects of the software component fit together well.

In OOP, there are two types if programmers:

1. Class creators (those who create new data types or classes)

2) Client programmers (consumers who uses classes in their applications)

The goal of the class creator is to build a class that exposes only the essential code required for the client programmers and hide the rest of the code. The goal of the client programmer is to use a bunch of the classes for rapid application development.

The reason for hidden code is that the client programmer cannot access it and allows the class creator to refactor the code behind the scenes without having to impact anyone else. Hiding implementations can reduce program bugs because the hidden portion of the code is untouched by the client programmer.

In summary:

1. Restrict access control to keep client programmers from breaking the code necessary of internal operations. Separates what is important and what is not for client programmers.

2) Allow library designers to refactor the code of the class without affecting client programmer

Java uses the three keywords to set boundaries in a class called access specifiers: public, private and protected.

`public` - the element is available to everyone

`private` - no one can access the element except you (brick wall)

`protected` - acts like private but allows an inheriting class to access it.

### <center>**Reusing implementation - Composition (Member object)**

Reusing a class is as easy as using an object of that class directly but also putting that object inside of a new class - “creating a member object”. Your new class can be made up of any combination of other objects to achieve functionality. This concept is called **composition**. If it happens dynamically, it's called **aggregation**. An example of composition is “A car has an engine”. Composition allows for a lot of flexibility as member objects of new classes are private and allow changes to them without disturbing client code.

It is ideal for a beginner to use compositions first when creating new classes; it will help the design be cleaner and with experience it will be obvious when to use inheritance over compositions.

### <center>**Inheritance (class extends from another)**

Instead of creating classes and be forced to create a new one that might have similar functionality, we can clone the existing class and make additions and modifications to the clone. This is called inheritance. However, if the original class (e.g superclass or base class) is changed, then the modified cloned (inherited class or subclass) also reflects those changes.

Usually, when an interface is created, it can have more characteristics and behaviours than the base type but share common ones. For example, when building a recycling center, the base class would be trash and the piece of trash has weight etc. and it can either be shredded, melted, or recycled. From this, we can generate specific types of trash that might have additional characteristics like the colour, or behaviours (metallic) and using inheritance, a hierarchy can be built.

There are two ways to differentiate the new derived class (subclass) from its original base class.

1. Add new methods to the derived class that are not part of the base class interface

2) Changing the behaviour of the base class method referred to as **overriding**

When the derived class is exactly the same type as the base class but only override the base class methods is known as pure substitution and is referred to as the substitution principle. “A circle **is a** shape”, an easy test to determine if it is an “is-a” relationship and have it make sense. When adding new interface elements to the derived type (extending the interface), you will have an object that contain the interface of the base type but also other methods so they’re not 100% the same.

An example would be having an air conditioner pump that's broken and you replace it with a pump that can cool and heat. Therefore the new pump can be an object that has been extended and the air conditioner system only knows how to interact with the cooling interface of the pump and not the heat.

### **Polymorphism**

When dealing with type hierarchies, we should treat an object as the base type and not the specific type. The benefit of this is that we can write code that is not dependent on a specific type, but rather, its base type.

For example, we write a code that ignores specific details of type and talks only to base class:

```java
    void doSomething(Shape shape) {

        shape.calculateArea(); 

        shape.calculatePerimeter();

    }
```

This method works for any Shape so regardless of what specific shape it is, all it knows is that it takes a Shape object and when a type of Shape is passed through, it will know exactly how to execute its method. Remember that creating those instances means that Circle or Triangle objects **extends** Shape and will be overriding base methods to solve the problem.

```java
    Circle circle = new Circle()
    Triangle triangle = new Triangle()

    doSomething(circle);
    doSomething(triangle);
```

The `doSomething()` automatically works regardless of the exact type of object. Circle is being passed into a method that expects a Shape and a circle is a Shape, it can be treated as one by the `doSomething()` method. The process of treating a derived type as if it was a base type is considered upcasting. What is great about this process is that there are no conditionals, meaning, if you are a Circle, execute method A, if you are a Triangle, execute method B and so on. There requires no check because of** polymorphism**.

So calling `calculateArea()` on a circle runs a different code than calling `calculateArea()` on a triangle. The correct behaviour occurs based on the type of Shape, this is the benefit of polymorphism.

This wraps put part one of Java fundamentals. I will continue to review and summarize more concepts by writing them out in my future posts.
