import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

//----------- Styling ------------------//
const LinkContainer = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
`
const StyledLink = styled(Link)`
  font-size: 1.2rem;
  color: white;
  text-decoration: none;
  padding: 10px;
  transition: 0.3s transform ease;
  &:hover {
    background-color: #ffffff31;
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
