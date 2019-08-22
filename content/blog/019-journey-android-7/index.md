---
author: Kien
date: 2018-12-09 03:59:03+00:00
title: Journey to Android Development Pt. 7 (Introduction to Databases)
tags: ["java"]
---

Android Basics: Data Storage, the last course for Android for beginners course on [Udacity](https://eu.udacity.com/course/android-development-for-beginners--ud837). I plan on finishing this curriculum completely and then supplementing my android app building with [Head First Android Development](https://www.amazon.ca/Head-First-Android-Development-Brain-Friendly/dp/9352136063/ref=sr_1_1?s=books&ie=UTF8&qid=1544326588&sr=1-1&keywords=Head+First+Android+Development+2nd+edition) to fill in any missing details.

The next step is enrolling in Android Development for Intermediate after being more comfortable with Android and Java.

In the data storage course, SQL was introduced. I’ve done a bit of SQL self study from the Stanford course in hopes to complete my certification, however, with the lack of real substance in accomplishing anything with SQL and doing plain questions. Now revisiting SQL in Android, it became a nice refresher and something I feel proud of learning beforehand which allowed me to keep up with the instructor. I will still continue to learn enough so that I can finish my SQL certification.

The objective is create a database to store pets for a local shelter. In this course, SQLite is used. Some recap of the lessons are below:

SQL Statements:

```sql
    CREATE TABLE pets(
    _id INTEGER,
    name TEXT,
    breed TEXT,
    gender INTEGER,
    weight INTEGER);
```

The `CREATE TABLE` is part of SQL. This code in SQL initiates a new table named pets with the column name of `_id`, `name`, `breed`, `gender` and `weight`. The data type is initiated in red so we know exactly what each parameter field takes. The `_id` is a conventional column for Android.

The conventional parameters of creating a table goes as follows:

```sql
    (columnname1 <data type>, columnname2 <data type>, . . .);
```

For  my reference, I've created a write up for Generic SQL commands below:

**SELECTING A SPECIFIC COLUMN FROM A TABLE:**

```sql
    SELECT <column> FROM <tablename>;
```

An asterisk (\*) can be used to select all of a specific column.

**CREATING A NEW ENTRY IN SQL:**

```sql
    INSERT INTO <tablename> (<columnname1>, <columnname2>...) VALUES (<datatype1>,<datatype2>...)
```

We can also make entries of SQL data more robust by introducing commands below:

**PRIMARY KEY** - There can only be 1 primary key, ensures uniqueness
**AUTOINCREMENT** - Allows increase of a value
**NOT NULL** - Null values are not allowed
**DEFAULT** - When inserting a new row, if no values are found then default value will be used

For example, we are creating a table that satisfy the requirements below:

- auto-fills the `_id` value with a primary key and auto-increments the value by 1,

- creating a `name` that is mandatory to have

- `breed` parameter to be optional

- `gender` to be an integer that cannot be empty

- `weight` to be an integer that cannot be empty or else it will default to 0
