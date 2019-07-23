---
author: Kien
date: 2019-02-10 23:54:37+00:00
slug: journey-into-android-development-pt-15-navigation-drawers
title: Journey into Android Development Pt. 15 (Navigation Drawers)
tags: ["java"]
---

Tabs are great for easy navigation when there are only a few screens required. However, when dealing with multiple screens, an ideal solution would be using the Navigation View. The Navigation View allows users to swipe or use the hamburger menu to access other screens. Below is the finished product in action:

![](./drawer.gif)

I will be writing my experience on implementing the navigation drawer and will use this as a reference to come back when I need it for my future projects.

By implementing a navigation drawer, we need to add the drawer layout to the activities layout. There are two views that are considered:

1. The main content - which contains a toolbar and a frame layout which is used to display each fragment.

2) A view for the drawer contents - the navigation view itself which controls its behaviour

There will be four main steps to create this navigation drawer

## <center>**Creating the fragments and activities**

The important thing we need to remember is we will be displaying a toolbar over all of these activities and the navigation drawer. We first need to create the fragments and activities individually and hook them up to the navigation.

Fragments will be displayed under the frame component of the application, this will be reviewed later.

Creating fragments will be done as usual, under the `app/src/main/java folder`, New -> Fragment -> Fragment (Blank) and it will generate its own XML layout.

Each fragment will have a simple code below:

```java
     @Override
       public View onCreateView(LayoutInflater inflater, ViewGroup container, Bundle savedInstanceState) {
           return inflater.inflate(R.layout.fragment_inbox, container, false);
       }
    }
```

`The R.layout.fragment_inbox` references our XML layout `fragment_inbox.xml`. This is repeated for the Drafts, Sent Messages, and Trash respectively.

For the activities, which are the support items in the navigation drawer, the activities need to be created through the New -> Empty Activity. We need to add our toolbar to these activities and we will do so by making the toolbar a separate layout.

We need to navigate through the `app/src/res/main/layout` folder and create a new Layout resource file. We need to make sure we rename this to `toolbar_main` which will generate our XML file. The toolbar we created will be replacing our built in one because we want to be able to add other functionalities to it, like adding the hamburger menu or a share button in previous exercises.

```xml
    <?xml version="1.0" encoding="utf-8"?>
    <android.support.v7.widget.Toolbar
       xmlns:android="http://schemas.android.com/apk/res/android"
       android:layout_width="match_parent"
       android:layout_height="?attr/actionBarSize"
       android:background="?attr/colorPrimary"
       android:theme="@style/ThemeOverlay.AppCompat.Dark.ActionBar"/>
```

In order to remove the built in one, we need to update the `styles.xml` and replacing the parent with “**Theme.AppCompat.Light.NoActionBar**”.

```xml
    <resources>
        <!-- Base application theme. -->
       <style name="AppTheme" parent="Theme.AppCompat.Light.DarkActionBar">
           <!-- Customize your theme here. -->
           <item name="windowNoTitle">true</item>
           <item name="windowActionBar">false</item>
       </style>

    </resources>
```

## <center>**Creating the Header of the Navigation Drawer**

The navigation drawer header is usually a picture and contain basic information. It is an optional component, however, its recommended to make the application look nicer. There are a set of options below and this is where we will connect the fragments and activities based on the users inputs.

For this navigation header, we create it in a separate Layout resource file and is named “nav_header”. The code to make this layout is below:

```xml
    <?xml version="1.0" encoding="utf-8"?>
    <FrameLayout
       xmlns:android="http://schemas.android.com/apk/res/android"
       android:layout_width="match_parent"
       android:layout_height="180dp"
       android:theme="@style/ThemeOverlay.AppCompat.Dark">

       <ImageView
           android:layout_width="wrap_content"
           android:layout_height="wrap_content"
           android:scaleType="centerCrop"
           android:src="@drawable/kitten_small"/>

       <LinearLayout
           android:layout_width="wrap_content"
           android:layout_height="match_parent"
           android:orientation="vertical"<code>
           android:gravity="bottom|start"
           android:layout_margin="16dp">

           <TextView
               android:layout_width="wrap_content"
               android:layout_height="wrap_content"
               android:text="@string/app_name"
               android:textAppearance="@style/TextAppearance.AppCompat.Body1"/>

           <TextView
               android:layout_width="wrap_content"
               android:layout_height="wrap_content"
               android:text="@string/user_name"/>

       </LinearLayout>

    </FrameLayout></code>
```

### <center>**Creating the Options of the Navigation View**

For the list of options, we need to create another resource file called `menu_nav` and give it a resource type of “**Menu**”. You’ll see how the menu is created and pay close attention to the way it is grouped. The `android:checkableBehaviour=”single”` is set to the parent group that contains the items which allow the android to know when each individual item is clicked in the menu list.

All of the string is referenced from the `strings.xml` for good practice. All the icons are built in from Android which is awesome. We can also use custom icons in the drawable folder if we had them.

The strings will all be listed under the resource component like so:

```xml
    <menu xmlns:android="http://schemas.android.com/apk/res/android">
       <group android:checkableBehavior="single">
           <item
               android:id="@+id/nav_inbox"
               android:icon="@android:drawable/sym_action_email"
               android:title="@string/nav_inbox"
               android:checked="true"/>
           <item
               android:id="@+id/nav_drafts"
               android:icon="@android:drawable/ic_menu_edit"
               android:title="@string/nav_drafts" />
           <item
               android:id="@+id/nav_sent"
               android:icon="@android:drawable/ic_menu_send"
               android:title="@string/nav_sent" />
           <item
               android:id="@+id/nav_trash"
               android:icon="@android:drawable/ic_menu_delete"
               android:title="@string/nav_trash" />
       </group>
       <item android:title="@string/nav_support">
           <menu>
               <item
                   android:id="@+id/nav_help"
                   android:icon="@android:drawable/ic_menu_help"
                   android:title="@string/nav_help" />
               <item
                   android:id="@+id/nav_feedback"
                   android:icon="@android:drawable/sym_action_email"
                   android:title="@string/nav_feedback"/>
           </menu>
       </item>

    </menu>

```

### <center>**Implementing the Navigation Drawer in the MainActivity**

There are two main things we need to finish doing, the first step is to adjust our Main Activity XML and the second step is to connect everything together in the MainActivity java file.

You will notice right away that the parent element of `android.support.v4.widget.DrawerLayout` will nest everything in our MainActivity XML, including our custom toolbar and our `FrameLayout` element (where the fragments will be inflated):

```xml
    <?xml version="1.0" encoding="utf-8"?>
    <android.support.v4.widget.DrawerLayout
       xmlns:android="http://schemas.android.com/apk/res/android"
       xmlns:app="http://schemas.android.com/apk/res-auto"
       android:id="@+id/drawer_layout"
       android:layout_width="match_parent"
       android:layout_height="match_parent">

       <LinearLayout
           android:layout_width="match_parent"
           android:layout_height="match_parent"
           android:orientation="vertical">

           <include
               android:id="@+id/toolbar"
               layout="@layout/toolbar_main" />

           <FrameLayout
               android:id="@+id/content_frame"
               android:layout_width="match_parent"
               android:layout_height="match_parent"/>
       </LinearLayout>

       <android.support.design.widget.NavigationView
           android:id="@+id/nav_view"
           android:layout_width="wrap_content"
           android:layout_height="match_parent"
           android:layout_gravity="start"
           app:headerLayout="@layout/nav_header"
           app:menu="@menu/menu_nav"/>

    </android.support.v4.widget.DrawerLayout>
```

There is one thing I need to point out and that would be making sure that the LinearLayout has its orientation, I was pulling my hair out for 30 minutes figuring out why none of my fragments were showing up. This was a silly mistake but I will make sure that never happens again.

At this point, we are missing the hamburger menu, you will need to create two string names with `nav_open_drawer` and `nav_close_drawer` which is required as the last two parameters of our `ActionBarDrawerToggle` object in the MainActivity `onCreate()`. The code snippet is below:

```java
    DrawerLayout drawer = findViewById(R.id.drawer_layout);
    ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(this, drawer, toolbar, R.string.nav_open_drawer, R.string.nav_close_drawer);

    drawer.addDrawerListener(toggle);
    toggle.syncState();
```

The `addDrawerListener(toggle)` passes our `ActionBarDrawerToggle` to let the drawer know when it should pop out. The `toggle.syncState()` method allows the icons to synchronize with the toolbar state. The icon changes based on the click and gives us a nice animation but the drawer will cover it.

The entire code snippet for MainActivity is shown below, this is when things go from 0 to 100 real quick, just like how everything is unfortunately. However, when breaking all the chunks of code down, it becomes easier over time:

```java
    public class MainActivity extends AppCompatActivity implements NavigationView.OnNavigationItemSelectedListener {

       @Override
       protected void onCreate(Bundle savedInstanceState) {
           super.onCreate(savedInstanceState);
           setContentView(R.layout.activity_main);

           Toolbar toolbar = findViewById(R.id.toolbar);
           setSupportActionBar(toolbar);

           DrawerLayout drawer = findViewById(R.id.drawer_layout);
           ActionBarDrawerToggle toggle = new ActionBarDrawerToggle(this, drawer, toolbar, R.string.nav_open_drawer, R.string.nav_close_drawer);

           drawer.addDrawerListener(toggle);
           toggle.syncState();

           NavigationView navigationView = findViewById(R.id.nav_view);
           navigationView.setNavigationItemSelectedListener(this);

           Fragment fragment = new InboxFragment();
           FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
           ft.add(R.id.content_frame, fragment);
           ft.commit();
       }

       @Override
       public boolean onNavigationItemSelected(MenuItem item) {
           int id = item.getItemId();
           Fragment fragment = null;
           Intent intent = null;

           switch (id) {
               case R.id.nav_drafts:
                   fragment = new DraftsFragment();
                   break;
               case R.id.nav_sent:
                   fragment = new SentItemsFragment();
                   break;
               case R.id.nav_trash:
                   fragment = new TrashFragment();
                   break;
               case R.id.nav_help:
                   intent = new Intent(this, HelpActivity.class);
                   break;
               case R.id.nav_feedback:
                   intent = new Intent(this, FeedbackActivity.class);
                   break;
               default:
                   fragment = new InboxFragment();

           }

           if (fragment != null) {
               FragmentTransaction ft = getSupportFragmentManager().beginTransaction();
               ft.replace(R.id.content_frame, fragment);
               ft.commit();
           } else {
               startActivity(intent);
           }

           DrawerLayout drawer = findViewById(R.id.drawer_layout);
           drawer.closeDrawer(GravityCompat.START);
           return true;

       }

       @Override
       public void onBackPressed() {
           DrawerLayout drawer = findViewById(R.id.drawer_layout);
           if (drawer.isDrawerOpen(GravityCompat.START)) {
               drawer.closeDrawer(GravityCompat.START);
           } else {
               super.onBackPressed();
           }
       }
    }
```

The MainActivity needs to implement the `NavigationView.OnNavigationItemSelectedListener` because we will be overriding some important methods to get our Navigation Drawer to connect and display our certain fragments. In this case, we are using a Switch Case statement to toggle and inflate the corresponding fragments in the `FrameLayout` we had set up in our XML file. The activities for support will throw intents as shown in previous posts.

Keep in mind, we add all of the essential components such as our Toolbar, DrawerLayout, NavigationView and Fragment objects in our `onCreate()` method of our activity since we want to make sure these are created for the user when the application starts.

And viola, by doing these 4 steps, we will be able to implement our functional navigation drawer.  The final code is hosted on my Github repository under the Android Development section for a thorough reference.
