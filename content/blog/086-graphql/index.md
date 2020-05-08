---
author: Kien
date: 2020-05-08
slug: what-is-graphql
title: 🤷‍♂️ What is GraphQL?
description: A brief overview of GraphQL and what it does.
tags: ["graphql"]
---
It is a query language for your API’s developed by Facebook.

Back in 2012, Facebook’s mobile application was notorious for using a lot of battery life and CPU. The reason being was that it had made a lot of REST API calls.

Facebook's app had multiple API requests from other users giving you more information like mutual friends, information from other peoples feeds, status updates, and notification which caused a cascading effect, thus making it expensive on the CPU and making the application non performant.

### <center>What problem did GraphQL solve?</center>

It solves the problem of overfetching, which is a term where the client downloads more data than it actually needs. The query looks like it nests objects in the request like seen below:

```JavaScript
{
  hero {
    name
    friends {
      name
    }
  }
}
```

The query will return something like this below:

```JavaScript
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "friends": [
        {
          "name": "Luke Skywalker"
        },
        {
          "name": "Han Solo"
        },
        {
          "name": "Leia Organa"
        }
      ]
    }
  }
}
```

Facebook engineers condensed all the API requests into one request. It works with the GraphQL query language where we tell the API exactly all the data that we want and the API returns the requested data in JSON format.

What’s interesting here is we no longer need to call for multiple API request like we would for REST APIs and then merging it on the client side, the server side deals with sending the information and packaging it back to us the way we want it.

## <center>What makes this exciting?</center>
It’s exciting because now we can control exactly the data coming in without having to send multiple requests and also it comes with a GraphiQL interface that is self documenting which allows you to explore what data can be parsed. It still leverages REST’s POST HTTP method and the request body is simply just JSON data. 

I have been playing around with Gatsby and React which has helped me understand how GraphQL works. I've attached my queries to Algolia and learned a lot about how it's structured. I'm hoping to build more applications and expose myself to this new developing technology.

