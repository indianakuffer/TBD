import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//----------- Styling ------------------//
const LinkContainer = styled.div`
  display: flex;
  flex-flow: column;
`

const StyledLink = styled(Link)`
  font-size: 1.2rem;
  transition: 0.3s transform ease;
  color: white;

  &:hover {
    transform: translateX(15px);
  }
`

//--------------------------------------//

export default function NavLinks() {
  return (
    <LinkContainer>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/about'>About</StyledLink>
    </LinkContainer>
  )
}
