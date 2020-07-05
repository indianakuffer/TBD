import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

//----------- Styling ------------------//
const ScrollbarContainer = styled.div`
  position: fixed;
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100vh;
  width: 20px;
  right: 10px;
  z-index: 20;
  @media (max-width: 768px) {
    height: 92vh;
  }
`
const Bar = styled.div`
  position: relative;
  height: 95%;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`
const Counter = styled.div`
  position: absolute;
  bottom: 0%;
  width: 4rem;
  font-size: 1rem;
  text-align: right;
  transform: translate(-70px, 18px);
`
const Line = styled.div`
  position: absolute;
  bottom: 0;
  height: 0%;
  border-left: 1px solid white;
  transform: translateX(10px);
`
//--------------------------------------//

export default function Scrollbar(props) {
  let [scrollDistance, setScrollDistance] = useState(0)
  let [usScrollDistance, setUsScrollDistance] = useState(0)
  let [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const percentage = Math.abs(1 - (window.pageYOffset / window.document.body.offsetHeight))
      setScrollPercent(percentage)
      setScrollDistance(Math.trunc(percentage * props.distance))
      setUsScrollDistance(Math.trunc(percentage * props.usDistance))
    }
    window.addEventListener('scroll', handleScroll, true)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <ScrollbarContainer>
      <Bar>
        <Counter style={{ bottom: scrollPercent * 100 + '%' }}>{props.usStandard ? `${usScrollDistance}mi` : `${scrollDistance}km`}</Counter>
        <Line style={{ height: scrollPercent * 100 + '%' }}>&nbsp;</Line>
        <Line style={{ height: '100%', borderLeft: '1px dashed white' }}>&nbsp;</Line>
      </Bar>
    </ScrollbarContainer>
  )
}
