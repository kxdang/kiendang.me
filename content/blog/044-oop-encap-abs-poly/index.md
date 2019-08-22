---
author: Kien
date: 2019-05-21 20:32:15+00:00
title: "OOP: Encapsulation, Abstraction, Polymorphism"
tags: ["java"]
---

![](https://images.unsplash.com/photo-1422207049116-cfaf69531072?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80)
Inheritance was covered here in this [post](/java-fundamentals-1/). The other concepts are explained here using my own words. These are my active recall questions.

## What is Encapsulation?

In object oriented programming, encapsulation is the process of wrapping the data (variables) and the code acting on the data (methods) together as a single unit. That means that the variables are considered private and not accessible to other classes except its own.

## Why is Encapsulation Important?

It is important because a class can have total control over what is stored in its field. It allows for data hiding which means the user will not have any information regarding the inner implementations. Other advantages are increased flexibility and re-usability like most of the concepts here.

## What is Abstraction?

It is the process of hiding the implementation details from the user and only functionality will be accessible.

## **Why is Abstraction important in OPP?**

It is important because the subclasses that are created inherit the parent class methods and require their **own** implementation of the parent method. You cannot instantiate the parent class and must provide an override of the abstract method or declare it as abstract.

Data abstraction is a property which only the essential details are displayed to the user, any trivial or non-essentials are hidden. Therefore it reduces the complexity of viewing things, avoid code duplication and increases usability.

An example would be having a superclass called Employee where it contains a `calculateSalary()` method. We set Employee as an abstract class and can have instances of either Contractor or FullTime. When Contractor or FullTime is created, its own implementation of calculateSalary will be required, therefore, being able to separate the calculateSalary method based on the class type.

## What is Polymorphism?

Polymorphism is a robust feature of object oriented programming. The reference type can point to a different object at any given time (the simplest form of polymorphism). It is based on the concept of inheritance and overriding concepts.

For example, we can create an interface called Animal and have a method of `move()`. We can implement the animal by creating subclasses below:

```java
    public interface Animal {
        public void move();
    }
     
    public class Bird implements Animal {
        public void move() {
            System.out.print("Flying...");
        }
    }
     
    public class Fish implements Animal {
        public void move() {
            System.out.print("Swimming...");
        }
    }
```

Now we can create a Trainer that teaches the animal to speak:

```java
    public class Trainer {
        public void teach(Animal anim) {
            anim.move();
        }
    }
```

The parameter anim can take any Animal base class, whether its a fish or a bird it will execute its method according to the base class.

## Why is Polymorphism important?

It is important because it allows for re-usability and flexibility with minimal modifications to the code. We do not need to write if statements for this type of problem.

There was also one question that I needed to clarify:

## What is the different between extends and implements in Java?

The difference is that extends is for extending a class, you can extend and override its methods (a.k.a creating subclasses)

Implements is for implementing an interface, meaning you cannot implement any of the declared methods and must specify what the methods should be doing when you implement them. Think of an interface as a remote with many buttons. Interface is the remote and buttons and you must assign what those buttons do when you create a new remote specific to an object.
