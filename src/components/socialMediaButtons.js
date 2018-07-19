import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {EmailIcon, FbIcon, TwitterIcon} from './icons'
import Color from './colors'

//-- takes a title and description and
//-- creates a row of social media buttons

const Center = styled.div`
	display: flex;
  flex-direction: row;
	justify-content: center;
	align-items: center;
	height: 70px;
	text-align: center;
	margin-top: 30px;
`;

const IconContainer = styled.a`
	display: block;
	height: 40px;
	width: 40px;
	padding: 5px;
	box-sizing: border-box;
	border-radius: 4px;
	margin: 0 5px;
  background-color: ${Color('pink')};
  box-shadow: 3px 3px 10px rgba(0,0,0,0.05);
	@media not all and (hover: none) {
		&:hover{
      background-color: ${Color('pink')};
		}
	}
`;

const Contain = styled.div`
	height: 100%;
	align-items: center;
	display: flex;
	justify-content: center;
	object-fit: contain;
`;

const Label = styled.h4`
  margin-right: 10px;
`

const fbAppId = 'YOUR_FACBEOOK_APP_ID' //-- replace with your app id https://developers.facebook.com/docs/apps/register/

const SocialMediaButtons = (props) => {
  const {title, description, url} = props;
	const twitterUrl = `https://twitter.com/intent/tweet?url=${url}&text=${description}`;
	const facebookUrl = `https://www.facebook.com/dialog/share?app_id=${fbAppId}&display=popup&href=${url}`;
	const emailUrl = `mailto:?subject=${title}&body=${description} ${url}`;

	return(
    <Center>
      <Label>Sharing is caring</Label>
      <Icon url={emailUrl} img={<EmailIcon/>}/>
    	<Icon url={facebookUrl} img={<FbIcon/>}/>
    	<Icon url={twitterUrl} img={<TwitterIcon/>}/>
		</Center>
	);
}

const Icon = (props) => {
	return(
  	<IconContainer
  		target="_blank"
  		rel="noopener noreferrer"
  		href={props.url}
  	>
  		<Contain className="social-media-icons">{props.img}</Contain>
  	</IconContainer>
	);
}

SocialMediaButtons.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default SocialMediaButtons;
