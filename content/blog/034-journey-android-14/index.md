---
author: Kien
date: 2019-01-29 08:26:48+00:00
title: Journey to Android Development Pt. 14 (RecyclerViews)
tags: ["java"]
---

RecyclerViews are more flexible than List Views. It efficiently manages a small number of views to give an appearance of a large collection that extends beyond the screen. I’ve learned about this in the Udacity course from Google and I’ve struggled to implement the RecyclerView a few times. A CardView was created to show the pizza names and image.

![](./CardViews.gif)

When creating and generating data on our device, we generally want to use a RecyclerView. The data flows goes as follows: Datasource -> Adapter -> RecyclerView

#### **Adding Design Support Libraries**

Navigate to File -> Project Structure -> app -> Dependencies and the + button and find the dependency and add them to the project.

#### **Building the RecyclerView Adapter**

There are two main objectives of adapters:

1. Bind the data with a datasource to RecyclerViews

2) Create a visible data for the RecyclerView from the data

In this exercise, the data would be the pizza’s image and the name. Therefore, the adapter must take in an array of images and pizza names. This is created by extending the RecycleView.Adapter class and overriding the methods required to create this new adapter. We also need to define an inner class called ViewHolder. A ViewHolder tells the app which views the Recycler will use for the given data.

A custom adapter will be created so that it can satisfy the two main objectives. In this app, the adapter created will be called `CaptionedImagesAdapter` which will take a String and an int (for the image ID). The code for the adapter is shown below:

```java
    class CaptionedImagesAdapter extends RecyclerView.Adapter<CaptionedImagesAdapter.ViewHolder> {

       private String[] captions;
       private int[] imageIds;
       private Listener listener;

       interface Listener {
           void onClick(int position);
       }

       public static class ViewHolder extends RecyclerView.ViewHolder {

           private CardView cardView;

           public ViewHolder(CardView v) {
               super(v);
               cardView = v;
           }

       }


       public CaptionedImagesAdapter(String[] captions, int[] imageIDs) {
           this.captions = captions;
           this.imageIds = imageIDs;

       }
```

For the RecyclerView, we will be using a CardView class from the support library, the XML for CardView can be found in the github repo. We need to call the ViewHolder method and put our CardView inside it. The super(v) is the super constructor and needs to be included because the ViewHolder’s superclass contains data that is required give its full functionality. Since we want to shown a CardView, it will be generated in our ViewHolder method. The RecyclerView code snippet is part of the adapter, but for clarity sake, its isolated here below:

```java
    public static class ViewHolder extends RecyclerView.ViewHolder {

       private CardView cardView;

       public ViewHolder(CardView v) {
           super(v);
           cardView = v;
       }

    }
```

The ViewHolder class is now defined, the next step would be generating the adapter to construct one using the onCreateViewHolder() method. The method takes two parameters:

1. ViewGroup parent (recyclerview)

2) Int (viewType)

To instantiate the ViewHolder, the CardView will be created and inflated out to the code snippet below:

```java
    @Override
    public CaptionedImagesAdapter.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
       CardView cv = (CardView) LayoutInflater.from(parent.getContext()).inflate(R.layout.card_captioned_image, parent, false);
       return new ViewHolder(cv);
    }
```

Up until this point, we have a blank CardView. In order to connect the data required to show in the CardView, we will need to implement the `onBindViewHolder()` method. Since the CardView contains two parameters, which is the image (ID of info_image) and the text (ID of info_text)

The `onBindViewHolder()` method code snippet is show below:

```java
    @Override
    public void onBindViewHolder(ViewHolder holder,final int position) {
       CardView cardView = holder.cardView;
       ImageView imageView = (ImageView)cardView.findViewById(R.id.info_image);
       Drawable drawable = ContextCompat.getDrawable(cardView.getContext(), imageIds[position]);
       imageView.setImageDrawable(drawable);
       imageView.setContentDescription(captions[position]);
       TextView textView = (TextView)cardView.findViewById(R.id.info_text);
       textView.setText(captions[position]);
       cardView.setOnClickListener(new View.OnClickListener() {
           @Override
           public void onClick(View v) {
               if (listener != null) {
                   listener.onClick(position);
               }
           }
       });
    }
```

We call the CardView, ImageView and Drawable object in the method and also bring in our Image and Textview. The code snippet also contains an onClick to toggle and generate an intent when someone clicks on a card.

The RecyclerView will be in a separate android fragment. In this app, it's called the PizzaFragment. The xml connected to this fragment will need to contain our RecyclerView code snippet:

```xml
    <android.support.v7.widget.RecyclerView
       xmlns:android="http://schemas.android.com/apk/res/android"
       android:id="@+id/pizza_recycler"
       android:layout_width="match_parent"
       android:layout_height="match_parent"
       android:scrollbars="vertical"
       />
```

To hook up our RecyclerView and our adapter, we will need to tell the adapter what kind of data to use and then connect the RecyclerView to it. In this case, it will be the pizza names and the image IDs from its constructor. The next step would be to use its setAdapter() which will make our connection.

The code snippet for this is below. We first initialize the pizzaNames as an array of Strings and then the pizzaImage as an array of ints. This will help call the appropriate pizza based on its location of `i`.

The `CaptionedImagesArrayAdapter` passes the array to the adapter.

```java
    public class PizzaFragment extends Fragment {
       @Override
       public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {

           RecyclerView pizzaRecycler = (RecyclerView) inflater.inflate(R.layout.fragment_pizza, container, false);

           String[] pizzaNames = new String[Pizza.pizzas.length];
           for (int i = 0; i < pizzaNames.length; i++) {
               pizzaNames[i] = Pizza.pizzas[i].getName();
           }

           int[] pizzaImages = new int[Pizza.pizzas.length];
           for (int i = 0; i < pizzaImages.length; i++) {
               pizzaImages[i] = Pizza.pizzas[i].getImageResourceId();
           }

           CaptionedImagesAdapter adapter = new CaptionedImagesAdapter(pizzaNames, pizzaImages);
           pizzaRecycler.setAdapter(adapter);
           GridLayoutManager layoutManager = new GridLayoutManager(getActivity(), 2);
           pizzaRecycler.setLayoutManager(layoutManager);

           adapter.setListener(new CaptionedImagesAdapter.Listener() {
               public void onClick(int position) {
                   Intent intent = new Intent(getActivity(), PizzaDetailActivity.class);
                   intent.putExtra(PizzaDetailActivity.EXTRA_PIZZA_ID, position);
                   getActivity().startActivity(intent);
               }
           });
           return pizzaRecycler;

       }
     }
```

### Layout of Cards

The `GridLayoutManager` allows us to create the layout in a grid like orientation. We can also change this to be a linear list by calling a `LinearLayoutManager` using the code snippet below:

```java
    LinearLayoutManager layoutManager = new LinearLayoutManager(getActivity());
    pizzaRecycler.setLayoutManager(layoutManager);
```

![](./cardviewimage.png)

This code snippet will give us this look below.

### **Responding to User Clicks**

In a ListView, there are a large number of superclasses that is inherited which allows the developer to use onItemClickListener when a specific view is pressed on the list. The built-in features allow the developer to override these methods. However, for a RecyclerView, they do not inherit the superclasses that ListView has. Therefore, RecyclerViews require extra work to respond to user clicks. There are two ways in approaching this.

1. Listen to view events from Adapter

2) Use an interface

We will skip the first way because we want to be able to reuse the adapter. Instead we will use an interface. An interface is similar to an abstract class. An abstract method provides a way to generate a method but does not implement it. An interface is similar in that you can specify methods that have no body and that these methods must be implemented in a class in order for it to be defined. Once an interface is defined, any class can implement it and must require a body to implement its method. This was seen in the previous code snippet, but here it is as an isolated method:

```java
     CaptionedImagesAdapter adapter = new CaptionedImagesAdapter(pizzaNames, pizzaImages);
           pizzaRecycler.setAdapter(adapter);
           GridLayoutManager layoutManager = new GridLayoutManager(getActivity(), 2);
           pizzaRecycler.setLayoutManager(layoutManager);

           adapter.setListener(new CaptionedImagesAdapter.Listener() {
               public void onClick(int position) {
                   Intent intent = new Intent(getActivity(), PizzaDetailActivity.class);
                   intent.putExtra(PizzaDetailActivity.EXTRA_PIZZA_ID, position);
                   getActivity().startActivity(intent);
               }
           });
           return pizzaRecycler;
       }
    }
```

We throw in the intent to add a new activity just like what was learned previously.

Phew, this was a long one, after doing many examples and practices with RecyclerViews, I’m becoming more comfortable using them. The next chapter will be creating a Navigation Drawer.
