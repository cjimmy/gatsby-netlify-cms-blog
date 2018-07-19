# Gatsby + Netlify (CMS) blog template

### Quick start

#### Download it and run it on your local machine

If you have yet to use Gatsby, install the CLI tool [gatsby-cli](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-cli)

```
npm install --global gatsby-cli

```
(and if you've never used npm, click [here](https://www.npmjs.com/get-npm))

In terminal:
```
git clone https://github.com/cjimmy/gatsby-netlify-cms-blog
cd gatsby-netlify-cms-blog
yarn install
gatsby develop
```

### Deploy it
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-statuskit)

### Write a post
CMS is located at `[YOUR_NETLIFY_SITE].netlify.com/admin/`

### About
This is a simple blog template based on [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org)

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

It is largely based on @AustinGreen's [gatsby-start-netlify-cms](https://github.com/AustinGreen/gatsby-starter-netlify-cms) but a little more opinionated and different visual design.

Some notable structural changes:
* **_Styled Components_ instead of inline styles:** Gatsby likes to inline css styles. I much prefer [styled components](https://www.styled-components.com/) which Gatsby neatly has a module for.
* **Removes Sass **– because we already have _one_ CSS module.
* **Adds react-flexbox-grid** – for a grid system. Not necessary for the example, just makes things pretty.
* **Adds fields to frontmatter **– to have an image for the blog post, add authors, and to fill out the <head> tag to make it social media friendly. (The frontmatter of a post is kinda like the meta info + head).
* **Removes tag pages **– and instead queries for the top 3 most recent posts that share a common tag.

### Setting up the CMS
Follow the [Netlify CMS Quick Start Guide](https://www.netlifycms.org/docs/quick-start/#authentication) to set up authentication, and hosting.

### Other resources and info
* **Gatsby documentation** (v1, not v2): <https://www.gatsbyjs.org/docs/netlify-cms/>
* **Netlify documentation **(sans CMS): <https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/>
