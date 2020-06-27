---
author: Kien
date: 2019-03-03
title: "Java Pt 3: Manipulating Objects with References"
tags: ["java"]
---

Treat everything as an object using consistent syntax. The identifier you manipulate will be a reference to the object. For example, a TV and a remote. The TV is the object, the remote is the reference to the object. So when you want to perform a change on the TV, you use the remote to modify the TV. You can still change the TV’s state anywhere in the room, just take the remote with you.

### <center>**You must create all objects** </center>

You create objects by using the **new** operator. For example, creating a String s = new String(“hello world”). If everything is an object, then using the class keyword followed by the name of the new type.

Creating new data types:

```java
    Class ATypeName {/* Class body goes here */}
```

You will then create an object of this type using **new**:

```java
    ATypeName a = new ATypeName();
```

You then must define methods in order to send messages. You define classes, make objects of those classes (objects are instances of classes, and classes are blueprints of objects) and you can put two types of elements in your class

1. Fields (data members)

2) Methods (specific functions)

Example of a class with fields:

```java{numberLines: true}
    Class DataOnly {

    Int i

    Double d
    Boolean b

    }
```

This class does nothing so far, but hold data. You create an object using this notation below:

DataOnly data = new DataOnly();

Then assign values to the field using the dot object reference like so:

```java
    Data.i = 44;
    Data.d = 4.1;
    Data.b = true;
```

Your object might contain other objects so you would keep connecting the dots:

```java
    myCar.gasTank.capacity = 13;
```

### <center> Methods, arguments and return values </center>

A function is used to describe a subroutine, this is true in languages such as C and C++. However, in Java, these are called **methods,** thinking of methods as a way to do something. As stated in previous post, methods determine what the objects can receive. The important part of methods are

1. Name

2) Arguments - gives the types and names for information that is passed into the method

3. Return Type - describes the value that comes back from the method after it’s been called.

4) Body

It is structured below:

```java
    ReturnType methodName (/* Argument list */ =( {

    /* Method body */

    }
```

Methods in Java can be created only as part of a class

Remember:

Objects are instances of classes. For example, we can take Human as an example of a class, and the objects would be individuals such as you and me. In the class of Humans, we can have methods such as walk, which applies to every individual.

### <center> Return </center>

The return keyword does two things:

1. Leave the method, I’m done

2) If method produces a value, then it will return that value after the method is complete

`Void`  - When the return is a type void, then the return keyword is used to exit the method.

Everything in a Java program can look like a bunch of objects with methods that take other objects as arguments and send messages to other objects. With that in mind, we can break the steps down by the next posts.
