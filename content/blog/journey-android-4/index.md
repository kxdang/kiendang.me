---
author: Kien
date: 2018-11-18 17:48:31+00:00
title: Journey to Android Development Pt. 4
description: "Exploring custom array adapters to generate a scrolling list view."
tags: ["java"]
---

In order to create a list view with different views to show more information, a custom array adapter must be made. An example was done in the previous Miwok app from Udacity Lesson 3, but Lesson 4 had a clearer explanation (Earthquake app) with a summary below:

For this to work, there are 4 steps involved in making custom array adapters.

1. Create a new XML layout and create a horizontal LinearLayout and adjust the list item view  - this allows us to enter more than just one specific information in a list and is a starting point to allow android to recycle the item list. - _earthquake_list_item.xml
   _

2) Create a java object to hold all the earthquake information. We define an Earthquake class which represents a single earthquake and define 3 global variables for its parameters. A public constructor is required for the Earthquake class which will specify the magnitude, location and date.  Global variables are private, so we need public getter methods to recall the variables which is shown in lines 16-25 below.

```java
  public class Earthquake {

      /* Setting type of variables for this class*/
      private String mMagnitude;
      private String mLocation;
      private String mDate;

      /* creating the method to hold these variables */
      public Earthquake(String magnitude, String location, String date) {
          mMagnitude = magnitude;
          mLocation = location;
          mDate = date;
      }

      /*Setting getter methods*/
      public String getMagnitude() {
          return mMagnitude;

      }
      public String getLocation() {
          return mLocation;
      }
      public String getDate() {
          return mDate;

      }

```

3. Edit the Activity to create new Earthquake objects by calling the constructor. Instead of ArrayList of Strings (which is default), we want to create an ArrayList of Earthquake objects called earthquakes [line 14].

We then add the new constructor by specifying the name “earthquakes” and using the .add method to add each constructor one at a time and while filling the 3 required parameters.

Lastly, we create a new adapter that takes the list of earthquakes as input. (Adapters act as a bridge between a view and a data source - an ArrayAdapter is a type of adapters that work with an array). Our custom EarthquakeAdapter is customized to generate the list of earthquakes as an input. The next step is creating the EarthquakeAdapter.

```java
    public class EarthquakeActivity extends AppCompatActivity {

      public static final String LOG_TAG = EarthquakeActivity.class.getName();

      @Override

      protected void onCreate(Bundle savedInstanceState) {

          super.onCreate(savedInstanceState);
          setContentView(R.layout.earthquake_activity);

          // Hardcoding the earthquake locations.

          ArrayList<Earthquake> earthquakes = new ArrayList<>();
          earthquakes.add(new Earthquake("7.2","San Francisco", "Feb 2, 2016"));
          earthquakes.add(new Earthquake("6.1","London", "July 20, 2015"));
          earthquakes.add(new Earthquake("3.9","Tokyo", "Nov 10, 2014"));
          earthquakes.add(new Earthquake("5.4","Mexico City", "May 3, 2014"));
          earthquakes.add(new Earthquake("2.8","Moscow", "Jan 31, 2013"));
          earthquakes.add(new Earthquake("4.9","Rio de Janeiro", "Aug 19, 2012"));
          earthquakes.add(new Earthquake("1.6","Paris", "Oct 20, 2011"));

          // Find a reference to the {@link ListView} in the layout
          ListView earthquakeListView = (ListView) findViewById(R.id.list);


          // Create a new {@link ArrayAdapter} of earthquakes
          EarthquakeAdapter adapter = new EarthquakeAdapter(this, earthquakes);


```

4. Create the EarthquakeAdapter java file in the root of the activity. When we create this, we want it to be an extension of the ArrayAdapter and override the getView method to control how the list item view gets created.

```java{numberLines: true}
 @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        View listItemView = convertView;
        if(listItemView == null) {
            listItemView = LayoutInflater.from(getContext()).inflate(R.layout.earthquake_list_item, parent, false);
        }
        Earthquake currentEarthquake = getItem(position);


```

Line 5 - checks to see if existing view is being reused, it is common for it to be null. We name it to be the convertView so that it’s clear we’re working with a listItemView.

Line 6 - will allow us to get the position parameter of the earthquake in our list, because it is an Array, we want to get the specific Array number to display on the list accordingly.

```java
    Earthquake currentEarthquake = getItem(position);

          TextView magnitudeView = (TextView) listItemView.findViewById(R.id.magnitude);
          magnitudeView.setText(currentEarthquake.getMagnitude());

          TextView locationView = (TextView) listItemView.findViewById(R.id.locaction);
          locationView.setText(currentEarthquake.getLocation());

          TextView dateView = (TextView) listItemView.findViewById(R.id.date);
          dateView.setText(currentEarthquake.getDate());

          return listItemView;

```

Lastly, above will allow us to bind the TextView’s by locating the XML id and set the textview to display the current earthquake data by passing the getter methods which return the specific string of that parameter.

Remembering our last line in our main activity:

```java

          // Set the adapter on the {@link ListView}
          // so the list can be populated in the user interface
          earthquakeListView.setAdapter(adapter);
      }

```

This code sets the adapter of earthquakeListView and calls the adapter (which is the custom adapter we created) to view the list in the UI of the app.

The above is a summary of how to generate the custom array adapter. I've made a post about it so I can refer back to this concept for my future application.
