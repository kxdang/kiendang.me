---
author: Kien
date: 2021-03-21
slug: gatsby-autolink-header
title: 💻 How to install GitHub-style headers on your blog
description: I finally found out how to do this.
tags: ["gatsby"]
---


I've been wanting to do this for quite some time now and I've attempted to install this feature last year and but unsuccessful. Fast forward a year later, with 10 months of working professionally as a developer under my belt, I came back to tackle this problem and finally got it to work! Click [here](#centersolutioncenter) to scroll down straight to the solution😉

# <center>The struggles</center>

I had the opportunity to work with build processes and config files at work. I dealt with a task that I embarrassingly took 3 months to do because I had no idea what I was doing.

 I somehow managed to finish it after reading a bunch of documentation and piecing together how Webpack works. My task was to migrate our codebase from Webpack v4 to Webpack v5.

It was only about a week into Webpack v5's initial release that we were already jumping on the path of upgrading our codebase. I love that we stay on top of the latest tech stack and are willing to take those chances of improving every bit of our project.

I came across a ton of obstacles and errors during the migration and found similar issues that people ran into on the Webpack GitHub repo. These errors consisted of compatibility problems with different plugins, runtime errors due to Webpacks decision to remove polyfills.

After bashing my head with the Webpack v5 migration, I was able to complete the task, except for one package which was later fixed by an external plugin update from another repo. 

It took a lot of reading the documentation and the constant checking of GitHub issues that were newly open with the same problems I was facing. I also had to understand what I needed to polyfill for the missing items that was required by going through the build runtime errors we had.

To be honest, I've never done anything like that during my self-taught journey; it was quite a learning experience. A learning experience that I took home with me and used that ability to finally understand how to use the gatsby-autolink-install to work on my blog.

Their documentation only shows a small snippet of how its installed under the remark config. In the end, with a bit more confidence I was able to figure it out a year later.

### What is the Gatsby autolink headers?

If you hover the headings, you'll see the anchor tag appear. When you click on it, it'll scroll you to the heading. It's a simple plugin that works well on markdown files and mdx files that Gatsby uses to generate my blog posts.

This will definitely be useful as I plan on doing another dump of Git commands that I learned over the last few weeks from codewithmosh's GitHub course. It'll make my post structured to my liking I can provide myself a quick legend to bounce right into the information I need in a single page.


# <center>Solution</center>

Since this blog uses mdx, in the <a href="https://www.gatsbyjs.com/plugins/gatsby-remark-autolink-headers/" target="_blank">Gatsbys documentaton </a>, it shows you how to use it under the `gatsby-transformer-remark` plugin. I did not have the transformer remark plugin, so I had to put it in the right place.

It also notes that if you're using `gatsby-remark-prismjs`, you'll have to list it after this plugin. 

## Step 1: Run the install command

`npm install gatsby-remark-autolink-headers`

## Step 2: Configure the plugin in the right place


Since I'm using markdown files and mdx files to generate my blog posts, I need to put the plugin under the `gatsby-plugin-mdx` as seen in line 19

```js{numberLines: true}
   {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `anchor-link`,
              maintainCase: false,
              removeAccents: true,
              isIconAfterHeader: false,
              elements: [`h1`, `h2`,`h3`,`h4`],
          },
        },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },

```

In addition, I added some of the options I wanted which was found in the Gatsby documentation for further customization.

One issue I ran into was that I use the hashtags to generate headers and then centered them using the `<center>` tags. This generated every header with the word center in it and ultimately ruined the way the anchor svg would show up.
	
The fix was just to target all ID's with the word center in them using scss and adjusting it from there using the css trick below:

```css
[id*="center"] {
  display: flex;
  justify-content: center;
  a {
    margin-top: -3px;
  }
}
```

I also had to fiddle around with the CSS styling since hovering over the text didn't show the anchor svg. So I had to make sure to fix this [issue](https://github.com/kxdang/kiendang.me/commit/eb2b943ddff8f3b972cb39eeda8e4a91dacf1d84#diff-a178989fbb9392e8a172cf12a763276768773b2b5e951541a30fe8719f77b361R66).
	
All in all, I'm quite happy with the result!
	
	