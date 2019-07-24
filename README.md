<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's blog starter for Dang it - A blog by Kien Dang
</h1>

<center>![](gatsby.jpg)

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the blog starter.

## 🚀 Additional features added to starter blog.

1.  **Added extra pages**

    Added about me and contact page in Bio component by following Gatsby guide [here](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/)

2.  **Adding reading time and tea icons**

    Added number of teas based on the length of the blog post. Followed Gatsby documentation [here](https://www.gatsbyjs.org/docs/creating-and-modifying-pages/)

3.  **Adding tags page**

    Followed Gatsby documentation [here](https://www.gatsbyjs.org/docs/adding-tags-and-categories-to-blog-posts/). I had difficulty implementing this on the gatsby starter blog as the code setup in documentation is slightly different than template gatsby starter blog. Also added clickable tags on each post page by querying from GraphQL.

4.  **Pagination with post**

    Followed Gatsby documentation [here](https://www.gatsbyjs.org/docs/adding-pagination/). Another difficulty implementing this on a gatsby starter blog template because the documentation only had an example of a new gatsby site and not from a template file. Gatsby starter blog already had previous and next page but did not have pagination set-up, had to manually follow this guide [here](https://nickymeuleman.netlify.com/blog/gatsby-pagination)

5.  **Dark mode toggle**
    Followed Gatsby blog tutorial [here](https://www.gatsbyjs.org/blog/2019-01-31-using-react-context-api-with-gatsby/). All components needed to be wrapped in <ThemeContext.Provider>. Took me a while to understand this and find out where to wrap an existing blog with lots of preloaded code in gatsby starter blog.

6.  **Adding Font Awesome**
    Added React Font Awesome using [react-icons](https://github.com/react-icons/react-icons) library, specifically for my github and LinkedIn logo in contact page.

7.  **PrismJS**
    To allow for code syntax highlighting based on language. Gatsby documentation [here](https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/) and followed external post [here](https://dev.to/niklasmtj/implement-prismjs-in-gatsbyjs-fff)

Please feel free to take a look at what I did and the code/commits that were labeled for each step. They are in the order of implementation.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-blog)

<!-- AUTO-GENERATED-CONTENT:END -->
