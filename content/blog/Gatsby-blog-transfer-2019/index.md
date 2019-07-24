---
author: Kien
date: 2019-07-23
title: Gatsby Blog Transfer - Success!
tags: ["technology"]
description: "Made the switch from Wordpress to Gatsby"
---

![](https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80)

I’ve gone from paying $200 yearly for server hosting to $0 dollars for hosting my blog. Initially, I ran Wordpress to run my blog and had to pay quite a bit of money just for hosting. I pay \$17 dollars yearly for my domain and when I found out you can have hosting for free, I was instantly motivated in learning how to get free web hosting.

My friend told me about Hugo, a static site generator and I stumbled upon a few other blogs running Hugo. I noticed how quickly they load and found out more about static site generators. I tried creating with Hugo but quickly realized I would have to learn Go as a new programming language and failed to make decent progress after struggling to run Hugo locally.

Another friend of mine briefly mentioned Gatsby, a framework based on React. It is a PWA (Progressive Web App) generator, similar to Hugo. It comes preloaded with Webpack and has a built in database system running on GraphQL. Since Gatsby is based off of React, a library that I’m familiar with, I was able to follow their tutorials via their documentation and was able to have a simple blog up and running.

I found that it deploys with Netlify via github which made updating and adding posts very seamless through commits. Most importantly, the hosting from <a href="https://www.netlify.com/" target="_blank">Netlify</a> is completely free!

##<center>Features I Added

My current blog is based off of a Gatsby Starter Blog found <a href="https://gatsby-starter-blog-demo.netlify.com/" target="_blank">here</a>

However, the blog provided was very barebones in terms of features. It was missing pagination of blogs, categories, pages and many other features that I wanted in a blog. This lackluster template allowed me to figure out all of the features I wanted all on my own.

Below are the changes I’ve made to the starter blog provided by Gatsby. 50+ commits and 575 minutes later, my final project from transferring to Gatsby from Wordpress has been completed! It is heavily inspired by Dan Abramov’s blog. I love the simplicity and minimalistic style.

All the changes made to the Gatsby Starter Blog, in the exact order of changes and additions:

1. <b style="color: #FF5370">Edited CSS</b> - inspired by Material Design from a Visual Studio Code theme

2. <b style="color: #FF5370">Added extra pages</b> - about me and contact pages

3. <b style="color: #FF5370">Added reading time and number of teas</b> - number of teas based on length of post, reading time like medium

4. <b style="color: #FF5370">Added tags page</b> - followed documentation but had a hard time with a preloaded template initially, played around with template code until it worked
5. <b style="color: #FF5370">Added clickable tag categories on the front page with posts</b> - Gatsby has a great documentation for tags. I still do not have a full understanding of graphQL and how it handles the database but I do know how to access certain data.
6. <b style="color: #FF5370">Pagination with posts</b> - Gatsby's documentation had different code sample from template.I had to moved my index.js file to a template folder. This will allow me to serve it as a template instead of a main index.js file. Initially when I followed the documentation, I was having issues making pagination but after enough tinkering, I realized that the index.js needed to be a template. Templates are what will be constant in gatsby pages, for example, instead of making headers the same all the time having templates will reduce a lot of CSS. This can be the same as components in React.
7. <b style="color: #FF5370">Dark mode toggle</b> - finally added this following documentation and from a tip from <a href="https://www.taniarascia.com/" target="_blank">Tania</a>. I sent her an email and she got back to me with a direction on how to implement <a href="https://www.gatsbyjs.org/blog/2019-01-31-using-react-context-api-with-gatsby/" target="_blank">dark mode</a>. Big thanks to her!
8. <b style="color: #FF5370">Adding Font Awesome </b> to my React Pages using <a href="https://github.com/react-icons/react-icons" target="_blank">react-icons</a>
9. <b style="color: #FF5370">Adding gatsby plugin catch links</b> - helps load pages locally on my blog instead of refreshing the page, preserving the Single Page Application feel
10. <b style="color: #FF5370">Adding PrismJS</b> - helps add colour to my code snippets. <a href="https://prismjs.com/" target="_blank">PrismJS</a>

###<center>Wordpress Blog Posts to Gatsby Blog Post (Markdown)

After completing all the features I wanted in this blog, I had to figure out a way to convert all my Wordpress blog posts into a Markdown file. I tried multiple plugins from Wordpress but all had failed as they were no longer up to date. I exported all of my blog post into a single xml file using the Wordpress export settings and found that xml can be converted over to md files.

I found Python tool to convert Wordpress blogs to the Jekyll blog engine which uses Markdown <a href="https://github.com/thomasf/exitwp" target="\_blank"> exitwp</a>. I was unable to get the Python script to work locally and stumbled upon a cloud version of this script which is called <a href="https://github.com/kxdang/travis-exitwp" target="_blank">Travis Exitwp</a>. I followed the instructions and was able to generate my Wordpress blog posts to the MD format I needed for Gatsby.

This basically did 50% of the work, the rest was adding it into the Gatsby folders and making sure I still had my images.

Overall, I’m extremely happy with the result, I love how fast Gatsby is and I've learned a lot through this project.

I wish I had finished this earlier but due to a recent surgery, my productivity has been set back quite a bit. I’m hoping my second set of antibiotics will help me recover so I can get back to programming; I definitely needed this win!
