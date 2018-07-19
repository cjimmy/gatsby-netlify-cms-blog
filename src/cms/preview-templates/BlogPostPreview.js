import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

//-- What Netlify CMS uses to render the preview pane
const BlogPostPreview = ({ entry, widgetFor }) => {
  console.log(entry)
  return(
    <BlogPostTemplate
      content={widgetFor('body')}
      frontmatter={{
        title:entry.getIn(['data','title']),
        description:entry.getIn(['data','description']),
        author:entry.getIn(['data','author']),
        date:entry.getIn(['data','date']),
        image:entry.getIn(['data','image']),
        color: entry.getIn(['data','color'])
      }}
    />
  )
}

//-- getIn is from immutable.js
BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
