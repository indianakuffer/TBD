import React from 'react'
import styled from 'styled-components'

//----------- Styling ------------------//
const StyledTitle = styled.h1`
  margin-top: 0px;
  font-size: 6rem;
  font-weight: 300;
  letter-spacing: 0.3rem;
`
//--------------------------------------//

export default function Title(props) {
  return (<StyledTitle>{props.text}</StyledTitle>)
}
