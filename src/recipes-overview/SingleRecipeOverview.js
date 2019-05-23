import React from 'react'
import styled from 'styled-components'

import IconStopwatch from '../images/IconStopwatch.png'
import IconCookieActive from '../images/IconCookieActive.png'

import Tags from './Tags'

const StyledRecipeOverview = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid darkorchid;
`
const StyledImage = styled.img`
  border: 1px solid darkmagenta;
  border-radius: 40%;
`
const StyledName = styled.p`
  color: darkorchid;
`
const StyledTime = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`
const FirstColumn = styled.div`
  grid-column: 1;
`
const SecondColumn = styled.div`
  grid-column: 2;
`
const StyledStopwatch = styled.img``

const StyledDifficulty = styled.div``
const StyledCookie = styled.img`
  margin: 0 4px 0 0;
`

export default function SingleRecipeOverview({ recipe }) {
  const { recipeName, time, difficulty, tags, titleImage } = recipe

  function getCookies() {
    const cookies = new Array(difficulty)
    return cookies.fill('')
  }

  return (
    <StyledRecipeOverview>
      <StyledImage src={titleImage} alt={recipeName} />
      <StyledName>{recipeName}</StyledName>
      <StyledTime>
        <FirstColumn>
          <StyledStopwatch src={IconStopwatch} />
        </FirstColumn>
        <SecondColumn>{time} min</SecondColumn>
      </StyledTime>
      <StyledDifficulty>
        {getCookies(difficulty).map(element => (
          <StyledCookie src={IconCookieActive} />
        ))}
      </StyledDifficulty>
      <Tags tags={tags} />
    </StyledRecipeOverview>
  )
}
