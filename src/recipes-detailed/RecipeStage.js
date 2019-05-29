import React, { useState } from 'react'
import { getLocal } from '../services'
import {
  BoxContainer,
  BoxInnerContainer,
  Favorite,
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

import IconFavorite from '../images/IconFavorite.png'
import IconFavoriteActive from '../images/IconFavoriteActive.png'
import IconCookie from '../images/IconCookie.png'
import IconStopwatch from '../images/IconStopwatch.png'
import IconAmount from '../images/IconAmount.png'
import Tags from '../recipes-overview/Tags'

export default function RecipeStage({ recipe, onToggleFavorite }) {
  const { id, recipeName, time, difficulty, tags, titleImage, amount } = recipe

  const [favorite, setFavorite] = useState(getLocal(`${id}Favorite`) || false)

  function getCookies() {
    const cookies = new Array(recipe.difficulty)
    return cookies.fill('')
  }

  return (
    <BoxContainer>
      <BoxInnerContainer>
        <TitleImage src={titleImage} alt={recipeName} />
        <Favorite
          onClick={() => {
            onToggleFavorite(id, !favorite)
            setFavorite(!favorite)
          }}
        >
          {favorite ? (
            <img src={IconFavoriteActive} alt="Icon Favorite Pink" />
          ) : (
            <img src={IconFavorite} alt="Icon Favorite Orange" />
          )}
        </Favorite>
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
      </BoxInnerContainer>
    </BoxContainer>
  )
}
