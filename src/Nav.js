import React from 'react'
import NavLinks from './NavLinks'
import NavFooter from './NavFooter'
import styled from 'styled-components'

//----------- Styling ------------------//
const NavContainer = styled.div`
  position: absolute;
  height: 100vh;
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
  width: 8rem;
  background: #444444;
  z-index: 100;
`
//--------------------------------------//

export default function Nav(props) {
  return (
    <NavContainer onClick={props.toggleNav}>
      <StyledNav onClick={(e) => e.stopPropagation()}>
        <NavLinks />
        <NavFooter />
      </StyledNav>
    </NavContainer>
  )
}
