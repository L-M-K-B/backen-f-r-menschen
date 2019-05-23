import React from 'react'
import styled from 'styled-components'

import IconCookieActive from '../images/IconCookieActive.png'
import IconStopwatch from '../images/IconStopwatch.png'
import Tags from '../recipes-overview/Tags'

const Stage = styled.div`
  padding: 10px 0;
  border-bottom: 3px solid teal;
`
const TitleImage = styled.img`
  border: 2px dotted seagreen;
`
const YieldSection = styled.section`
  border: 4px dotted seagreen;
`
const TimeSection = styled.section`
  border: 4px dotted seagreen;
`
const Difficulty = styled.div`
  margin: 0 0 5px;
  border: 4px dotted seagreen;
`
const Cookie = styled.img``

export default function RecipeStage({ recipe }) {
  const { recipeName, time, difficulty, tags, titleImage, amount } = recipe
  function getCookies() {
    const cookies = new Array(recipe.difficulty)
    return cookies.fill('')
  }

  return (
    <Stage>
      <p>Im Header steht der Name des Rezepts</p>
      <TitleImage src={titleImage} alt={recipeName} />
      <YieldSection>Amount: {amount}</YieldSection>
      <TimeSection>
        <p>
          {' '}
          Time: <img src={IconStopwatch} alt="Icon Stopwatch" /> {time} min
        </p>
      </TimeSection>
      <Difficulty>
        Difficulty:{' '}
        {getCookies(difficulty).map(element => (
          <Cookie src={IconCookieActive} alt="Icon Cookie" />
        ))}
      </Difficulty>
      <Tags tags={tags} />
    </Stage>
  )
}
