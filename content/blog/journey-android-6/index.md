---
author: Kien
date: 2018-12-06 03:40:24+00:00
slug: journey-to-android-development-pt-6-http-request-and-async-task
title: Journey to Android Development Pt. 6 (HTTP Request and Async Task)
tags: ["java"]
---

`HttpURLConnection` is an HTTP client that you can use to make HTTP request in Android. This class helps you send and receive data across the web using an HTTP connection.

You start by calling `url.openConnection()`, the url is defined by the user and we use the `openConnection` method to access it. In order to fire out the information we use the `setRequestMethod` to be “GET” and then connect using the connect method to establish the connection with the server and lastly you would use `getInputStream()` to get the result.

The code snippet can be found below:

```java
     urlConnection = (HttpURLConnection) url.openConnection();
           urlConnection.setRequestMethod("GET");
           urlConnection.setReadTimeout(10000 /* milliseconds */);
           urlConnection.setConnectTimeout(15000 /* milliseconds */);
           urlConnection.connect();
           inputStream = urlConnection.getInputStream();
           jsonResponse = readFromStream(inputStream);
```

There are different types of HTTP request methods, the two main types are below:

1. **GET** (read) - most commonly used, typically reading info and sending it back to the client

2) **Post** (write) - when you update something to the server.

In Android, we enter the code below to access the URL information and return it as a string:

```java
    private String makeHttpRequest(URL url) throws IOException {
       String jsonResponse = "";
       HttpURLConnection urlConnection = null;
       InputStream inputStream = null;
       try {
           urlConnection = (HttpURLConnection) url.openConnection();
           urlConnection.setRequestMethod("GET");
           urlConnection.setReadTimeout(10000 /* milliseconds */);
           urlConnection.setConnectTimeout(15000 /* milliseconds */);
           urlConnection.connect();
           inputStream = urlConnection.getInputStream();
           jsonResponse = readFromStream(inputStream);
       } catch (IOException e) {
           // TODO: Handle the exception
       } finally {
           if (urlConnection != null) {
               urlConnection.disconnect();
           }
           if (inputStream != null) {
               // function must handle java.io.IOException here
               inputStream.close();
           }
       }
       return jsonResponse;
```

HTTP request is one of the main codes you require in order to access data online from an API. AsyncTask allows you to perform a background operation and publish results in the UI thread without having to manipulate threads or handlers.

Asynchronous task allows android to process data in the background thread and update the UI thread. In android it is defined by 3 generic types, `Params`,`Progress` and `Result` with 4 steps:

1. onPreExecute

2. doInBackground - does it off the UI thread

3. onProgressUpdate

4. onPostExecute

Example below:
`AsyncTask<Params, Progress, Result>`
If there are no data type required, then it would be used as `Void`

```java
    private class DownloadFilesTask extends AsyncTask<URL, Integer, Long> {
         protected Long doInBackground(URL... urls) {
             int count = urls.length;
             long totalSize = 0;
             for (int i = 0; i < count; i++) {
                 totalSize += Downloader.downloadFile(urls[i]);
                 publishProgress((int) ((i / (float) count) * 100));
                 // Escape early if cancel() is called
                 if (isCancelled()) break;
             }
             return totalSize;
         }

         protected void onProgressUpdate(Integer... progress) {
             setProgressPercent(progress[0]);
         }

         protected void onPostExecute(Long result) {
             showDialog("Downloaded " + result + " bytes");
         }
     }
```

One of the main issues we need to worry about is the screen orientation. Again, this [screen orientation](/journey-android-3) comes up and we need to address it because it destroys our current activity and recreates it in the new orientation. When we are rotating, we need to be careful not to run activities in the background multiple times.

We need to use **Loaders.** Loaders run on separate threads and helps us load data so they can be displayed in an activity or fragment, regardless of screen orientation which prevents duplicate queries. This would be the best option to update data in a user interface and will be explored in the next post.
