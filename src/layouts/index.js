import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../components/Navbar'
import Footer from '../components/footer'
import {Spacer} from '../components/util'
import './style.css'


/*
In Gatsby, this "wraps" every page, where the 
contents of the page are under {props.children()}

in Gatsby v2, this is deprecated and you have to manually
wrap all the pages that you want wrapped. This makes 
more sense IMO.
*/

const TemplateWrapper = (props) => (
  <div>
    <Navbar />
    {props.children()}
    <Spacer height={70}/>
    <Footer/>
  </div>
)

TemplateWrapper.propTypes = {
	children: PropTypes.func
}


export default TemplateWrapper
