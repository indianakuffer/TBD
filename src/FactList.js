import React from 'react'
import styled from 'styled-components'
import issImage from './images/ISS.png'
import cloudsImage from './images/cloud_pattern.png'

//----------- Styling ------------------//
const FactListContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column-reverse;
  width: 100%;
  background: linear-gradient(185deg, #000000, #050713, #0e1229, #101e6b, #101e6b);
  // background: linear-gradient(185deg, #000000, #050713, #0e1229, #883c24, #883c24);
  -webkit-mask-image: linear-gradient(rgba(0,0,0,1) 99.6%,rgba(0,0,0,0));
  mask-image: linear-gradient(rgba(0,0,0,1) 99.6%,rgba(0,0,0,0));
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
  background: url('${cloudsImage}'), linear-gradient(185deg, #000000, #050713, #0e1229, #101e6b, #101e6b);
  background-blend-mode: soft-light;
  -webkit-mask-image: linear-gradient(rgba(0,0,0,0) 20%,rgba(0,0,0,1) 80%);
  mask-image: linear-gradient(rgba(0,0,0,0) 20%,rgba(0,0,0,1) 80%);
  background-size: 900%;
  background-position-x: center;
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
`

const End = styled(Fact)`
  padding: 10vh 5% 0 5%;
  padding-top: 10vh;
  top: 0;
  height: 102vh;
  font-weight: 400;
  max-width: unset;
  width: 100vw;
  background-image: url('${issImage}');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  -webkit-mask-image: linear-gradient(rgba(0,0,0,1) 95%,rgba(0,0,0,0));
  mask-image: linear-gradient(rgba(0,0,0,1) 95%,rgba(0,0,0,0));

  h1 {
    margin-top: 0;
  }
  p {
    font-size: 1.2rem;
    background: rgba(0,0,0,0.8);
    max-width: 60%;
  }
  a {
    color: white;
    &:hover {
      font-weight: 600;
    }
  }
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
            <Fact style={{ marginLeft: `calc(${Math.random() * 55}% + 30px)`, top: `calc(${props.distance * 10 - fact.distance * 10}px + 100vh)` }} key={fact.fact}>
              {Object.keys(fact).includes('image') ?
                <>
                  <img src={fact.image} width={fact.width} alt={fact.alt} title={fact.title} />
                  <span>{fact.fact}</span>
                </>
                : Object.keys(fact).includes('blip') ? <span>{fact.fact}</span> : fact.fact}
            </Fact>
          )
        }
      })}
      <End>
        <h1>At last</h1>
        <p>You've reached the ISS. The single largest space structure and stepping stone to the cosmos, {Math.trunc(props.distance)}km away.</p>
        <p>Thank you for taking this journey, if you would like to learn more about the ISS check out NASA's <a href='https://www.nasa.gov/mission_pages/station/main/index.html' target='_blank' rel='noopener noreferrer'>mission page</a> or watch this <a href='https://www.youtube.com/watch?v=DDU-rZs-Ic4' target='_blank' rel='noopener noreferrer'>live video feed.</a></p>
      </End>
    </FactListContainer>
  )
}