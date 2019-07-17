---
author: Kien
date: 2018-11-15 01:47:01+00:00
layout: post
title: Journey to Android Development Pt. 3
tags: ["java"]
---

During my journey, I've stumbled upon an issue with screen orientation where the app breaks and stops functioning when rotated. I feel like I will be coming into this issue often and will write about what I've learned to make sure I understand this clearly.

In Android, when the device is rotated, the activity becomes destroyed and recreated in the new orientation. Any local variables that were used in the activity gets lost. Therefore, to remedy this issue, we would need to save the state of our local variables in the activity's `onSaveInstance()` method.

As an example below, the timer app I've been working on would have an `onSaveInstanceState()` defined below.

```java
  Protected void onSaveInstanceState(Bundle, savedInstanceState) {
    	savedInstanceState.putInt(“seconds”,seconds);
     	savedInstanceState.putBoolean(“Running”, running);
    }
```

The two lines of code will ensure that the seconds is saved as an Int, and the running variable will be saved as a Bool. When the orientation happens, we need to make sure that in the onCreate method, we call the saved variables back. So in order to restore the state of the variables, I would need to write the code:

```java
   Protected void onCreate(Bundle savedInstanceState) {
    ...
    	if(savedInstanceState != null) {
    		seconds = savedInstance.getInt(“seconds”);
    		running = savedInstanceState.getBoolean(“running”);
          }
    ...

```

The code above will set my seconds to the savedInstance (previously set before it gets destroyed) and let the app remember that it was still running when changed orientation.

In my lessons with fragments, this issue is the same. The fragment becomes destroyed and recreated with an activity when orientation change happens. The solution would be to save the fragment state by overriding the fragment `onSaveInstanceState()` method. The parameter Bundle allows you to save any variables you need to keep at a given state.

In my previous workout app exercise, the fragments would restart and restore back to the first workoutId. The solution would be to save the state of the workoutId (which determines the type of exercise - ranging from 1-4 as an int) and restore the current displayed fragment.

The onSaveInstanceState() method gets called before the fragment is destroyed. The code below resolves this:

```java
    public void onSaveInstanceState(Bundle savedInstanceState) {
    	savedInstanceState.putLong(“workoutId”, workoutId);
    }

```

The Bundle called savedInstanceState is then used in the `onCreate()` method:

```java
    public void onCreate(Bundle savedInstanceState) {
    	super.onCreate(savedInstanceState);
    	If (savedInstanceState != null) {
    		workoutId = savedInstanceState.getLong(“workoutId”);
            }
    }

```

During the onCreate method, which is called right after the fragment gets created after orientation change, the If-statement checks whether the Bundle is empty, if not, that tells the program that it needs to set the workoutId to the last saved workoutId. Therefore, it keeps the last fragment open and acts as if nothing happened.
