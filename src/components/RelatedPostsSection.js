import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {Spacer} from './util'
import Link from 'gatsby-link'
import Color from './colors'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
`

const PostContainer = styled.div`
  width: 200px;
  padding: 20px 40px;
  border-radius: 2px;
`

const DropShadow = styled.div`
  padding: 0;
  margin: 15px 30px;
  border-top: 4px solid #666;
  box-shadow: 3px 4px 10px rgba(0,0,0,0.3);
  transition-property: transform, box-shadow;
  transition-duration: 100ms;
  transition-timing-function: ease-out;
  @media not all and (hover: none) {
    &:hover {
      transform: translateY(-4px);
      border-top: 4px solid ${props=>props.color?Color(props.color):Color('teal')};
      box-shadow: 6px 5px 18px rgba(0,0,0,0.2);
    }
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
`
const PostDescription = styled.div`
  font-size: 14px;
`
const SectionTitle = styled.h2`
  text-align: center;
`

/*
Shows the related posts based on tags. Takes the posts and creates a flex container
where it displays the title and description, linking to the article
*/

const RelatedPostsSection = (props) => {
  const numPosts = props.posts ? props.posts.length : 0;
  const HeadingText = numPosts > 1?"Read some related posts":"Here's one more";
  const RelatedPosts =
    props.posts?props.posts.map((post, i)=>{
      const {title, description, color} = post.node.frontmatter;
      return(
        <StyledLink to={post.node.fields.slug} key={i} >
          <DropShadow color={color}>
            <PostContainer>
              <h3>{title}</h3>
              <PostDescription>{description}</PostDescription>
            </PostContainer>
          </DropShadow>
        </StyledLink>
      )
    }):null;
  return(
    <React.Fragment>
      {
        props.posts && props.posts.length ?
          <div>
            <SectionTitle>{HeadingText}</SectionTitle>
            <Spacer height={20}/>
            <Container>
              {RelatedPosts}
            </Container>

          </div>
      : null
      }
    </React.Fragment>
  )
}

RelatedPostsSection.propTypes = {
  posts: PropTypes.array
}

export default RelatedPostsSection
