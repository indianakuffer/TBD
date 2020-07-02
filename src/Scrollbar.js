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
`
const Bar = styled.div`
  position: relative;
  height: 95%;
  border-top: 1px solid white;
  border-bottom: 1px solid white;
`

const Counter = styled.div`
  position: absolute;
  transform: translate(-70px, 18px);
  width: 4rem;
  bottom: 0%;
  font-size: 1rem;
  text-align: right;
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
  let [scrollPercent, setScrollPercent] = useState(0)



  useEffect(() => {
    const handleScroll = () => {
      setScrollPercent(Math.abs(1 - (window.pageYOffset / window.document.body.offsetHeight)) * 1)
      setScrollDistance(Math.trunc(Math.abs(1 - (window.pageYOffset / window.document.body.offsetHeight)) * props.distance))
    }
    window.addEventListener('scroll', handleScroll, true)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  return (
    <ScrollbarContainer>
      <Bar>
        <Counter style={{ bottom: scrollPercent * 100 + '%' }}>{scrollDistance}km</Counter>
        <Line style={{ height: scrollPercent * 100 + '%' }}>&nbsp;</Line>
      </Bar>
    </ScrollbarContainer>
  )
}
