import React from 'react'
import styled from 'styled-components'
import cloudsImage from './images/cloud_pattern.png'
import End from './End'

//----------- Styling ------------------//
const FactListContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column-reverse;
  width: 100%;
  background: linear-gradient(185deg, #000000, #050713, #0e1229, #023e7d, #023e7d);
  -webkit-mask-image: linear-gradient(rgba(0,0,0,1) 99.6%,rgba(0,0,0,0));
  mask-image: linear-gradient(rgba(0,0,0,1) 99.6%,rgba(0,0,0,0));
`

const Fact = styled.div`
  position: absolute;
  font-size: 2rem;
  font-weight: 300;
  max-width: 40%;
  z-index: 10;

  span {
    font-size: 1.2rem;
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
    max-width: 60%;
    span {
      font-size: 1.1rem;
    }
  }
`

const Stars = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;  
  background: url('https://img.pngio.com/star-png-images-transparent-free-download-pngmartcom-transparent-stars-background-1680_480.png');
  -webkit-mask-image: linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0) 35%);
  mask-image: linear-gradient(rgba(0,0,0,1),rgba(0,0,0,0) 35%);
`

const Clouds = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;  
  background: url('${cloudsImage}'), linear-gradient(185deg, #000000, #050713, #0e1229, #023e7d, #023e7d);
  background-blend-mode: soft-light;
  -webkit-mask-image: linear-gradient(rgba(0,0,0,0) 20%,rgba(0,0,0,1) 80%);
  mask-image: linear-gradient(rgba(0,0,0,0) 20%,rgba(0,0,0,1) 80%);
  background-size: 900%;
  background-position-x: center;
`
//--------------------------------------//

export default function FactList(props) {
  return (
    <FactListContainer style={{ height: `${props.distance * 10}px` }}>
      <Clouds />
      <Stars />
      {props.facts.map(fact => {
        if (fact.distance < props.distance) {
          return (
            <Fact style={{ marginLeft: `calc(${Math.random() * 45}% + 10px)`, top: `calc(${props.distance * 10 - fact.distance * 10}px + 100vh)` }} key={fact.fact}>
              {Object.keys(fact).includes('image') ?
                <>
                  <img src={fact.image} width={fact.width} alt={fact.alt} title={fact.title} />
                  <span>{fact.fact}</span>
                </>
                : Object.keys(fact).includes('blip') ? <span>{fact.fact}</span> : fact.fact}
            </Fact>
          )
        } else return <></>
      })}
      <End distance={props.distance} />
    </FactListContainer>
  )
}