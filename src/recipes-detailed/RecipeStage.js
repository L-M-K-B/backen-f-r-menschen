import React from 'react'
import {
  StageContainer,
  StageInnerContainer,
  TitleImage,
  BasicDataGrid,
  YieldKey,
  YieldValueDiv,
  YieldValueP,
  TimeKey,
  TimeValueDiv,
  TimeValueP,
  DifficultyKey,
  DifficultyValue,
  TagsDiv,
} from './recipeDetailedStyle'

import IconCookie from '../images/IconCookie.png'
import IconStopwatch from '../images/IconStopwatch.png'
import IconAmount from '../images/IconAmount.png'
import Tags from '../recipes-overview/Tags'

export default function RecipeStage({ recipe }) {
  const { recipeName, time, difficulty, tags, titleImage, amount } = recipe
  function getCookies() {
    const cookies = new Array(recipe.difficulty)
    return cookies.fill('')
  }

  return (
    <StageContainer>
      <StageInnerContainer>
        <TitleImage src={titleImage} alt={recipeName} />
        <BasicDataGrid>
          <YieldKey>Amount:</YieldKey>
          <YieldValueDiv>
            <img src={IconAmount} alt="Icon Amount" />
            <YieldValueP>{amount}</YieldValueP>
          </YieldValueDiv>

          <TimeKey>Time:</TimeKey>
          <TimeValueDiv>
            <img src={IconStopwatch} alt="Icon Stopwatch" />
            <TimeValueP>{time} min</TimeValueP>
          </TimeValueDiv>
          <DifficultyKey>Difficulty:</DifficultyKey>
          <DifficultyValue>
            {getCookies(difficulty).map(element => (
              <img src={IconCookie} alt="Icon Cookie" />
            ))}
          </DifficultyValue>
        </BasicDataGrid>
        <TagsDiv>
          <Tags tags={tags} />
        </TagsDiv>
      </StageInnerContainer>
    </StageContainer>
  )
}
