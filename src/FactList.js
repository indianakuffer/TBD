import React from 'react'
import styled, { keyframes } from 'styled-components'

//----------- Styling ------------------//
const FactListContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column-reverse;
  width: 100%;
  background: linear-gradient(185deg, #000000, #050713, #0e1229, #883c24, #883c24);
  `
const Stars = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;  
  background: url('https://img.pngio.com/star-png-images-transparent-free-download-pngmartcom-transparent-stars-background-1680_480.png');
  -webkit-mask-image: linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0) 35%);
  mask-image: linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0) 35%);
`
// const twinkle = keyframes`
// from {background-position:0 0;}
// to {background-position:-10000px 5000px;}
// `

// const Background = styled.div`
//   background: transparent url(http://www.script-tutorials.com/demos/360/images/twinkling.png) repeat top center;
//   height: 100%;
//   width: 100%;
//   animation: ${twinkle} 200s linear infinite;
// `

const Fact = styled.div`
  height: 3000px;
  font-size: 2rem;
  font-weight: 300;
  max-width: 40%;
  z-index: 10;
`

const Caption = styled.span`
  font-size: 1.2rem;
`
//--------------------------------------//

export default function FactList(props) {
  return (
    <FactListContainer>
      <Stars>
        {/* <Background /> */}
      </Stars>
      {props.facts.map(fact => {
        if (fact.distance < props.distance) {

          return (
            <Fact style={{ marginLeft: `${Math.random() * 70}%` }} key={fact.fact}>
              {Object.keys(fact).includes('image') ?
                <>
                  <img src={fact.image} width={fact.width} alt={fact.alt} title={fact.title} />
                  <Caption >{fact.fact}</Caption>
                </>
                : fact.fact}
            </Fact>
          )
        }
      })}
      <Fact>The End</Fact>
    </FactListContainer>
  )
}