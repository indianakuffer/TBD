import React from 'react'
import styled from 'styled-components'

//----------- Styling ------------------//
const PromptContainer = styled.div`
  max-width: 65%;
  font-size: 1.5rem;  
  font-weight: 300;
  opacity: ${props => props.showPrompt ? '1' : '0'};
  transition: 1s opacity ease;
  @media (max-width: 768px) {
    max-width: 80%;
    font-size: 1.2rem;
  }
`
//--------------------------------------//

export default function Prompt(props) {
  return (
    <PromptContainer showPrompt={props.showPrompt}>
      <p>The ISS is currently over {props.issEarthLocation}, {props.usStandard ? `${Math.round(props.usDistance)} miles` : `${Math.round(props.distance)}km`} away.</p>
      <p>Let's <span style={{ fontWeight: '400' }}>scroll up</span> to see just how far away that is...</p>
    </PromptContainer>
  )
}