import React from 'react'
import PropTypes from 'prop-types'
import Helmet from "react-helmet";
import Color from './colors'

import appleTouchIcon from './images/touch/apple-touch-icon-180x180.png'
import appleLaunchImg from './images/touch/apple-launch-img.png'
import touchIcon192 from './images/touch/touch-icon-192x192.png'
import touchIcon144 from './images/touch/touch-icon-144x144.png'


/* This will go at the top of every page in the <head> tag unless overridden.

all these props will be used for Meta, Facebook og, and Twitter cards

props
---------
url will be the canonical url that this page links to
title will be the title at the top of every page. It should end with "– By The Bay"
headline should be short and descriptive (70 chars)
description should be 160 characters max and explain what the purpose of the page is
image should be a url to an image, could be static.
    URL of image to use in the card.
    Images must be less than 5MB in size. JPG, PNG, WEBP and GIF formats are supported.
    Only the first frame of an animated GIF will be used. SVG is not supported.
USAGE:
    import Head from 'layouts/head'

    <Head
      url=""
      title=""
      headline=""
      description=""
      image=""
    />

*/

const Head = (props) => (
    <Helmet>
      <title>{props.title}</title>
      <link rel="canonical"            href={props.url} />
      <meta name="viewport"            content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <meta name="description"         content={props.description} />
      <meta name="keywords"            content="blog"/>

      <meta prefix="og: http://ogp.me/ns#" property="og:url"          content={props.url} />
      <meta prefix="og: http://ogp.me/ns#" property="og:type"         content="website" />
      <meta prefix="og: http://ogp.me/ns#" property="og:title"        content={props.headline} />
      <meta prefix="og: http://ogp.me/ns#" property="og:description"  content={props.description} />
      <meta prefix="og: http://ogp.me/ns#" property="og:image"        content={props.image} />
      <meta prefix="og: http://ogp.me/ns#" property="og:locale"       content="en_US" />
      <meta prefix="og: http://ogp.me/ns#" property="fb:app_id"       content="[REPLACE WITH YOUR FB APP ID]" />

      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content="@YOURtwitterhandle" />
      <meta name="twitter:title"       content={props.headline} />
      <meta name="twitter:description" content={props.description} />
      <meta name="twitter:image"       content={props.image} />

      <meta name="msapplication-tap-highlight" content="no" />

      <meta name="mobile-web-app-capable" content="yes"/>
      <meta name="application-name" content={props.title}/>
      <link rel="icon" sizes="192x192" href={touchIcon192}/>

      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
      <meta name="apple-mobile-web-app-title" content={props.title}/>
      <link rel="apple-touch-startup-image" href={appleLaunchImg}/>
      <link rel="apple-touch-icon-precomposed" href={appleTouchIcon}/>
      <link rel="apple-touch-icon" href={appleTouchIcon}/>

      <meta name="theme-color" content={Color('pink')}/>
      <meta name="msapplication-TileImage" content={touchIcon144}/>
      <meta name="msapplication-TileColor" content={Color('pink')}/>
    </Helmet>
);


Head.defaultProps = {
  url: "https://examples.com",
  title: "Default title for pages",
  headline: "Default headline for social media",
  description: "Default description for social media",
  image: "",//-- replace with image link, must be direct link, not relative, since apps like FB will be accessing it
}


Head.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default Head;
