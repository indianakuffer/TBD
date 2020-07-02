import React from 'react'
import NavLinks from './NavLinks'
import styled from 'styled-components'
import githubIcon from './images/github.png'
import webIcon from './images/web.png'
import linkedInIcon from './images/linkedin.png'

//----------- Styling ------------------//
const NavContainer = styled.div`
  position: fixed;
  height: 100vh;
  max-width: 0;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 100;
`

const StyledNav = styled.nav`
  position: fixed;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  max-width: 0;
  width: 8rem;
  background: #0000005c;
  border-right: 1px solid transparent;
  backdrop-filter: blur(10px);
  z-index: 100;
  transition: 0.4s max-width ease;
  overflow-x: hidden;

  @media (max-width: 768px) {
    width: 10rem;
  }
`

const NavFooter = styled.footer`
  display: flex;
  flex-flow: column;
  margin-bottom: 5px;
  color: white;
  text-align: center;
  font-size: 0.85rem;
`
const ContactIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    filter: invert();
    width: 18px;
    &:hover {
      transform: scale(1.1);
    }
  }
`
//--------------------------------------//

export default function Nav(props) {
  return (
    <NavContainer onClick={props.toggleNav} style={props.showNav ? { maxWidth: '100vw' } : null}>
      <StyledNav onClick={(e) => e.stopPropagation()} style={props.showNav ? { maxWidth: '30vw', borderColor: 'white' } : null}>
        <NavLinks />
        <NavFooter>
          <ContactIcons>
            <a href='https://github.com/indianakuffer' target='_blank' rel='noreferrer noopener'><img src={githubIcon} alt="" /></a>
            <a href='http://www.indianakuffer.com' target='_blank' rel='noreferrer noopener'><img src={webIcon} alt="" /></a>
            <a href='https://www.linkedin.com/in/indianakuffer/' target='_blank' rel='noreferrer noopener'><img src={linkedInIcon} alt="" /></a>
          </ContactIcons>
          Indiana Kuffer
        </NavFooter>
      </StyledNav>
    </NavContainer>
  )
}
