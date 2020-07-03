import React from 'react'
import NavLinks from './NavLinks'
import styled from 'styled-components'
import githubIcon from './images/github.png'
import webIcon from './images/web.png'
import linkedInIcon from './images/linkedin.png'

//----------- Styling ------------------//
const NavContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  max-width: 0;
  z-index: 100;
`
const StyledNav = styled.nav`
  position: fixed;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 8rem;
  max-width: 0;
  background: #0000005c;
  border-right: 1px solid white;
  backdrop-filter: blur(10px);
  z-index: 100;
  transition: 0.4s max-width ease;
  transform: translateX(-1px);
  overflow-x: hidden;
  @media (max-width: 768px) {
    width: 10rem;
  }
`
const NavFooter = styled.footer`
  display: flex;
  flex-flow: column;
  margin-bottom: 5px;
  font-size: 0.85rem;
  text-align: center;
  color: white;
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
      <StyledNav onClick={(e) => e.stopPropagation()} style={props.showNav ? { maxWidth: '30vw' } : null}>
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
