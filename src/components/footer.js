import React from "react"
import { Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components'
import Link from 'gatsby-link'
import Color from './colors'

const FooterWrapper = styled(Row)`
	display: flex;
	background-color: navy;
	background:linear-gradient(45deg,${Color('darkpurple')},${Color('blue')});
	padding-top: 70px;
	padding-bottom: 45px;
	box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
  @media print {
    display: none;
  }
`;

const FinePrint = styled.div`
	font-weight: normal;
	margin-bottom: 35px;
	font-size: 14px;
	line-height: 18px;
	color: white;
`;



const Footer = () => {
	return (
		<FooterWrapper>
	    <Col
	    	xsOffset={1} xs={10}
	    	smOffset={1} sm={4}
  			mdOffset={1} md={4}
  			lgOffset={1} lg={4}
			>
				<FinePrint>
					This is the footer. A place for a quick about + navigation.
					<br/>
					All rights reserved &copy; 
				</FinePrint>
			</Col>

    </FooterWrapper>
	);
}


export default Footer;
