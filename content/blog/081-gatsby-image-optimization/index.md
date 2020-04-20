---
author: Kien
date: 2020-04-19
slug: gatsby-image-optimization
title: 🔨Gatsby Portfolio Experiment
description: I wanted to know how to use gatsby-image to optimize a friend's portfolio and so I decided to remake it using Gatsby.
tags: ["webdev","gatsby","graphql"]
---
![](./portfolio.gif)

<center> <p><a href="https://angry-lamarr-540b37.netlify.app/" target="_blank">Website</a></p></center>


Gatsby’s simplicity in building static websites got me pretty interested in its framework and their great documentation really helped me figure out how to build on top of it.

Since then, I’ve been browsing around their documentation and learned about their gatsby-image plugin which is a plugin specifically meant to optimize images for speed and performance.

I created a website for a friend of mine that utilizes this plugin to see the potential benefits. This project helped familiarize myself with optimizing images which are usually the forefront of front-end performance and it has allowed me play around with GraphQL.

Since my friend is an illustrator, she was the perfect candidate for this experiment with Gatsby. 

Her original website has full-fledged images that are around 1MB in size when the site loaded. After building her website using Gatsby and using the required plugins, I was able to get them down to 200kb!

You’ll notice the images are blurry on initial load, gatsby-image uses a [Blur Up technique](https://using-gatsby-image.gatsbyjs.org/blur-up/) that uses progressive loading for optimal performance and provides a visually pleasing experience without showing a blank screen upon visiting.

## <center>What is gatsby-image?</center>

It is a React component specially designed to work with the Gatsby’s GraphQL queries and combines the native image processing capabilities (with Gatsby-transformer-sharp) which is built on the <a href="https://sharp.pixelplumbing.com/" target="_blank">Sharp image processing library</a> that creates super-fast and optimized images for the web, allowing us to have reduced file sizes while still maintaining image quality.

### <center>Why do we care about this? </center>

It solves a myriad of problems dealing with images. These problems include having to resize multiple images to fix certain screen sizes and DPI ranges, a jumping page due to waiting for the image to load and prevents having your smartphone download large desktop images.

In short, large unoptimized images dramatically reduces the performance of your website and having these tools allow us streamline this process.

The gatsby-image, gatsby-transformer and gatsby-plugin-sharp are key plugins that play a role in Gatsby’s speed for loading images on static sites.

## <center>Building the portfolio</center>

There were a few things I learned from this, and I’m going to write about them here so that I can reference it back when I need to.

After watching multiple videos on YouTube and reading the documentation on how to have GraphQL query for my images, I managed to follow bits and parts and by looking at certain patterns I ended up querying them at the end of my index page as per the Gatsby docs.

I honestly do not know the terminology yet and I’m unsure of how exactly everything works but I do know what I’m supposed to do… sorta… I guess this is part of the learning process. I started from this guide [here](https://www.gatsbyjs.org/packages/gatsby-image/) to have all of the plugins required to make this work.

The next step is to set your gatsby-source-filesystem in your Gatsby-config.js to point to where the folder that contains all the images. For me it was in src/images/gallery. The config below points to the overall path.

```javascript
// gatsby-config.js
plugins: [
...
    {
      resolve: `gatsby-source-filesystem`, 
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
...
]
```

We can specify the folder in our query in the next snippet below. Then, in the page where you want to show the images, you must query your data using GraphQL:
```javascript
// index.js
export const pageQuery = graphql`
query {
    allFile(
        sort: {order: ASC, fields: name},
        filter: {relativeDirectory: {eq: "gallery"}}
        ) {
      edges {
        node {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
          name
        }
      }
    }
  }
`
```

I had an issue where my images were not in the order that I had named them which was extremely frustrating, but I remembered there was a `sort` keyword on my blog query and was able to order them in ascending order via the name.

The filter keyword was used because the query ended up querying for all my images in my project which included the favicon, so I had a help from a friend to tell me to use relativeDirectory and point to the “gallery” folder (thanks Brian!).

Since I was aiming for a masonry layout, I needed responsive images so that it would play nicely with resizing. The documentation recommended to use the childImageSharp fluid. You can pull the rest of the data in using the `…GatsbyImageSharpFluid` notation.

I used the React-masonry-css library and then pulled my images out by `data.allFile.edges` and stored in a constant called `images`.

In order to show the pictures, I had to use Gatsby’s image component, so I went ahead and imported at the top of the file.  

```javascript
import Img from ‘gatsby-image’
```
At this point, all that was left was to map through the images I had queried and have them display in my masonry React component!

```javascript{numberLines: true}
  return (
    <Layout location={location} title={siteTitle} >
      <div style={{ marginTop: "2rem" }}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {images.map((object) => (
            <div key={object.node.childImageSharp.id}>
            <Link to={`/${object.node.name}`}>
            <Img fluid={object.node.childImageSharp.fluid}/>
            </Link>
            </div>
          ))}
        </Masonry>
      </div>
    </Layout>
  )
```

Another thing I added was the `Link` component. Since I queried for the name, I made the images clickable and routed the name to static page generated using Markdown files.

The Markdown files were created in their respective names and therefore generate a static post for each image which was a perfect place to let her show case her sketches related to the artwork or even write about the images. 
