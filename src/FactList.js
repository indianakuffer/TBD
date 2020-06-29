import React from 'react'
import styled from 'styled-components'

//----------- Styling ------------------//
const FactListContainer = styled.div`
  display: flex;
  flex-flow: column-reverse;
  align-items: center;
  width: 100%;
`

const Fact = styled.div`
  height: 2000px;
  font-size: 3rem;
`
//--------------------------------------//

export default function FactList(props) {
  return (
    <FactListContainer>
      {props.facts.map(fact => {
        if (fact.distance < props.distance) {
          return <Fact key={fact.fact}>{fact.fact}</Fact>
        }
      })}
      <Fact>The End</Fact>
    </FactListContainer>
  )
}