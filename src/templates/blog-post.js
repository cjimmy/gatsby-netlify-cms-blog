import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Head from '../components/head'
import {Spacer} from '../components/util'
import Line from '../components/rounded-line'
import Color from '../components/colors'
import SocialMediaButtons from '../components/socialMediaButtons'
import RelatedPosts from '../components/RelatedPostsSection'


const FrontImage = styled.img`
  max-height: 200px;
  width: 100%;
  margin-top: 15px;
  object-fit: cover;
  object-position: 50% 50%;
  box-shadow: 0 2px 10px #eee;
`
const TitleContainer = styled.div`
  @media screen and (max-width: 767px) {
    margin-left: 10px;
  }
`
const Title = styled.h1`
  text-align: left;
  margin-bottom: 5px;
`
const Subtitle = styled.p`
  font-style: italic;
  text-align: left;
`
const AttributionText = styled.h4`
  color: #777;
`
const Attribution = styled.div`
  margin-top: ${props=>props.offset}px;
  @media screen and (max-width: 767px) {
    margin-top: 0;
    margin-left: 10px;
    width: calc(100% - 20px);
  }
`

/*
  There's two components in this file.
  BlogPost and BlogPostTemplate
  BlogPost receives the data returned from the graphql query
  if you console.log(props), you'll see there's a lot in there,
  including stuff from Gatsby's createPages, React-router, and the 
  query results (`blogPostData` and `relatedPosts`)
*/
const BlogPost = (props) => {
  const thisPostsId = props.pathContext.id;
  const { relatedPosts, blogPostData: post } = props.data;
  let related = [];
  // remove self (this post) from related posts
  for( let i = 0; i < relatedPosts.edges.length; i++ ){
    if (relatedPosts.edges[i].node.id !== thisPostsId) {
      related.push(relatedPosts.edges[i]);
    }
  }
  return (
    <BlogPostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      frontmatter={post.frontmatter}
      slug={post.fields.slug}
      related={related}
    />
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

//-----------------------------------------

const HTMLContent = (props) => (
  <div dangerouslySetInnerHTML={{ __html: props.content }} />
)

const Content = ({ content }) => (
  <div>{content}</div>
)
//-----------------------------------------

export class BlogPostTemplate extends React.Component {
  render() {
    const { content, contentComponent, frontmatter, slug, related} = this.props;
    const  { description, tags, title, date, author, color, smTitle, smDescription, image} = frontmatter;
    const PostContent = contentComponent || Content;
    const SocialTitle = smTitle || title;
    const SocialDescription = smDescription || description;
    return (
      <div>
        <Head
          url={`https://example.com/${slug}`}
          title={`${SocialTitle} – Bloog`}
          headline={SocialTitle || "Bloog blog post"}
          description={SocialDescription || "Yes of course it's something interesting."}
        />
        <Row>
          <Col
            xsOffset={0} xs={12}
            smOffset={1} sm={10}
            mdOffset={1} md={6}
            lgOffset={1} lg={6}
          >
            <TitleContainer>
              <Spacer height={60} xsHeight={30}/>
              <Title>{title}</Title>
              <Subtitle>{description}</Subtitle>
            </TitleContainer>
          </Col>
          <Col
            xsOffset={0} xs={12}
            smOffset={1} sm={10}
            mdOffset={1} md={4}
            lgOffset={1} lg={4}
          >
            <Attribution offset={130}>
              <Line color={Color(color)}/>
              <Spacer height={25}/>
              <AttributionText>By {author}</AttributionText>
              <AttributionText>{date}</AttributionText>
            </Attribution>
          </Col>
        </Row>
        <div className="blog-post-body">
          {image && <FrontImage src={image}/>}
          <Spacer height={30}/>
          <PostContent content={content} />
          <Spacer height={30}/>
          <Line color={Color(color)}/>
        </div>
        <SocialMediaButtons
          title={SocialTitle}
          description={SocialDescription}
          url={`https://example.com/${slug}`}
        />
        <RelatedPosts posts={related}/>
      </div>
    )
  }
}
/* 
note: you'll notice I use className to add css rules here and there
That's because Netlify CMS doesn't pick up styled-components, so anything that's important 
to Netlify CMS needs to be in layout/style.css
*/

BlogPostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  helmet: PropTypes.instanceOf(Helmet),
}


/*
In Gatsby, the graphql pageQuery is automatically run when the page is compiled/created
and the results are returned to the component in props.data. You can explore the format it 
returns via http://localhost:8000/___graphql
(you wont be able to use variables, so replace them with strings that make sense)

there's two queries in this, aliased by the names blogPostData and relatedPosts. It wasn't
necessary to alias them, but if I didn't, the results would be under markdownRemark and allMarkdownRemark.
That's not very helpful.

blogPostData receives the parameter $id from the query in gatsby-node.js and passed via createPages()
The graphql query finds the markdown file with that id and then returns all the information below it.
(note: you can add more information by changing what's in the markdown files. The frontmatter is the top section.
Be sure to restart gatsby if you change the schema. Can be the cause of endless frustration.)
We'll need all this to hydrate the BlogPost component. 

relatedPosts finds the most recent 4 posts that share a tag with the current post.
Remember, we're getting the param $tags from createPages, so we just query across all 
the markdown and find files that have a common tag. We then return just enough information
so that we can link to them in the relatedPostsSection component.

okay, hopefully that was helpful.
*/
export const pageQuery = graphql`
  query BlogPostByID($id: String!, $tags: [String!]!) {
    blogPostData: markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        author
        date(formatString: "MMMM DD, YYYY")
        title
        description
        color
        smTitle
        smDescription
        tags
        image
      }
    }

    relatedPosts: allMarkdownRemark(
      limit: 4,
      sort: {fields: [frontmatter___date], order: DESC},
      filter: {frontmatter: {tags: {in: $tags}}}
    ) {
      edges {
        node {
          id
          frontmatter {
						title
            description
            color
          }
					fields {
            slug
          }
        }
      }
    }
  }
`
