import React from 'react'
import NavLinks from './NavLinks'
import NavFooter from './NavFooter'
import styled from 'styled-components'

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
max-width: 0;
width: 8rem;
background: #444444;
backdrop-filter: blur(5px);
z-index: 100;
transition: 0.4s max-width ease;
overflow-x: hidden;
`
//--------------------------------------//

export default function Nav(props) {
  return (
    <NavContainer onClick={props.toggleNav} style={props.showNav ? { maxWidth: '100vw' } : null}>
      <StyledNav onClick={(e) => e.stopPropagation()} style={props.showNav ? { maxWidth: '20vw' } : null}>
        <NavLinks />
        <NavFooter />
      </StyledNav>
    </NavContainer>
  )
}
