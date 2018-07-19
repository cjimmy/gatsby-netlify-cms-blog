# Gatsby + Netlify (CMS) blog template

### Preview the template
Here! https://thirsty-allen-fe06d5.netlify.com/

![preview](https://thirsty-allen-fe06d5.netlify.com/preview.png)

## Quick start

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
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/cjimmy/gatsby-netlify-cms-blog)

☝️ _What happens when you click on the button?_ It takes you to Netlify, where you have to click a few more things before anything real happens. (It clones this repo, and then deploys it using Netlify to the real internet.) But go ahead and deploy this site (assuming you have a Github account). This start is made for Netlify, so this button isn't just here as any hosting/deployment solution.

### Login and write a post
1. In Netlify web interface, go to the `Identity` section and click  `Enable Identity`, allowing you to sign in to the CMS.
2. In Netlify, **Settings > Identity > Services** click on `Enable Git Gateway`. This is necessary to log in to the CMS. (otherwise you'll get an error `Unexpected token < in JSON at position 0`)
3. The CMS editor is located at `[YOUR_NETLIFY_SITE].netlify.com/admin/` where you can now sign up for a login.

## About
This is a simple blog template based on [Gatsby](https://www.gatsbyjs.org/), and [Netlify CMS](https://www.netlifycms.org)

It follows the [JAMstack architecture](https://jamstack.org) by using Git as a single source of truth, and [Netlify](https://www.netlify.com) for continuous deployment, and CDN distribution.

It is largely based on @AustinGreen's [gatsby-start-netlify-cms](https://github.com/AustinGreen/gatsby-starter-netlify-cms) but a little more opinionated and different visual design.

Some notable structural changes:
* **_Styled Components_ instead of inline styles:** Gatsby likes to inline css styles. I much prefer [styled components](https://www.styled-components.com/) which Gatsby neatly has a module for.
* **Removes Sass** – because we already have _one_ CSS module.
* **Adds react-flexbox-grid** – for a grid system. Not necessary for the example, just makes things pretty.
* **Adds fields to frontmatter** – to have an image for the blog post, add authors, and to fill out the <head> tag to make it social media friendly. (The frontmatter of a post is kinda like the meta info + head).
* **Removes tag pages** – and instead queries for the top 3 most recent posts that share a common tag.

### Other resources and info
* **Gatsby documentation** (v1, not v2): <https://www.gatsbyjs.org/docs/netlify-cms/>
* **Netlify documentation** (sans CMS): <https://www.netlify.com/blog/2016/02/24/a-step-by-step-guide-gatsby-on-netlify/>
* **[Netlify CMS Quick Start Guide]** (https://www.netlifycms.org/docs/quick-start/#authentication)

## Advanced

### Github authentication
Netlify allows [authentication via Github](https://www.netlifycms.org/docs/authentication-backends/) rather than the Netlify identity system. To do this, you have to go into the _organization's_ settings. (Github has a lot of different Settings pages.)

In there, on the side menu, you'll see a section for OAuth apps.
* `Application name` is what will be shown to users authenticating
* `Homepage URL` is the homepage of the app
* `Application Description` is a description
* `Authorization callback URL` for Netlify should be `https://api.netlify.com/auth/done` per their docs

With this, you'll get `Client ID` and `Client Secret` that you'll use in the Netlify interface

### Add comments
Even though it's a static site, you can take advantage of the continuous deployment: [https://jamstack-comments.netlify.com/](https://jamstack-comments.netlify.com/)

### Paginate front page
TODO

### Add a subscribe form
Using lambdas hosted on Netlify
