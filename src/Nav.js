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
`

const StyledNav = styled.nav`
  position: absolute;
  height: 100vh;
  border: 1px dashed purple;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  width: 8rem;
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
