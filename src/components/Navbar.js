import React from 'react'
import Link from 'gatsby-link'
import Color from './colors'
import styled from 'styled-components'
import logo from './images/logo-filled.png'

const Nav = styled.div`
  position: sticky;
  top: 0;
  background-color: ${Color('pink')};
  height: 50px;
  z-index: 10;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 3px 10px rgba(0,0,0,0.05);
`
const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Flex = styled.div`
  display: flex;
`

const Padding = styled.div`
  width: 40px;
`

const Logo = styled.img`
  height: 30px;
  width: auto;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 3px 20px;
`

const Navbar = (props) => {
  const links = navLinks.map( (link,i) => {
    return(
      <NavLink key={i} to={link.to}><h4>{link.label}</h4></NavLink>
    )
  })
  return(
    <Nav>
      <InnerContainer>
        <Flex>
          <Padding/>
          <Link style={{marginTop: 4}}to="/">
            <Logo src={logo} alt="Blog logo" />
          </Link>
        </Flex>
        <Flex>
          {links}
          <Padding/>
        </Flex>
      </InnerContainer>
    </Nav>
  )
}


const navLinks = [
  { label:"Posts", to: "/"},
  // { label:"About", to: "/about"}
]

export default Navbar
