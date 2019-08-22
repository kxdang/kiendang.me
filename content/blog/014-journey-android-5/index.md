---
author: Kien
date: 2018-11-21 00:46:32+00:00
title: Journey to Android Development Pt. 5 (Intent for Custom Adapters)
tags: ["java"]
---

A continuation of custom array adapters. One of the final objectives in the Android: Network Udacity course was to create an intent to launch a browser with a pre-loaded URL. The logic was to parse the JSON that contained the URL data. In my first post of my journey, I used intents to open up an email app to send an order of coffee. My new exercise also included intents but required to open a browser and read JSON data to fill the URL section.

![](./Intent.gif)

As a recap for my personal knowledge, **intents** are types of messages that allow the binding of separate objects together at a run-time. It is the *intent* to do something and calls the android code to complete it in the background. It is written like so:

```java
    Intent intent = new Intent(this, Target.class);
```

The intent can be see implemented in line 10 below.

For my custom array adapter, an override of the method `setOnItemclickListener` was required. The reason for this is because we want to make sure we tell android exactly what to do when an item on the list is selected.

```java
    earthquakeListView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
                @Override
                public void onItemClick(AdapterView<?> adapterView, View view, int position, long l) {
                    Earthquake currentEarthquake = adapter.getItem(position);

                    //convert the string url into a uri object to pass into the Intent constructor
                    Uri earthquakeUri = Uri.parse(currentEarthquake.getUrl());

                    //Create a new intent to view earthquake URI
                    Intent websiteIntent = new Intent(Intent.ACTION_VIEW, earthquakeUri);

                    //Send the intent to launch a new activity
                    startActivity(websiteIntent);
                }
            });
```

The onItemClick takes 4 parameters:

1. `parent` - the AdapterView

2) `view` - view within the AdapterView that was clicked

3. `position` - the position of the view in the adapter

4) `id` - the row id of the item

The code snippet above is an example of how to implement an action on a custom adapter that was created.
