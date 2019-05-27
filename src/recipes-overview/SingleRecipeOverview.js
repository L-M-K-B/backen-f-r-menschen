import React from 'react'
import {
  LinkToSingleRecipe1,
  LinkToSingleRecipe2,
  OverviewContainer,
  GridContainer,
  Favorite,
  Image,
  Name,
  TimeEfford,
  Label,
  Time,
  WatchMinutes,
  Stopwatch,
  Difficulty,
  Cookie,
} from './RecipesOverviewStyle'

import IconStopwatch from '../images/IconStopwatch.png'
import IconCookie from '../images/IconCookie.png'

import Tags from './Tags'

export default function SingleRecipeOverview({ recipe }) {
  const { id, recipeName, time, difficulty, tags, titleImage } = recipe

  function getCookies() {
    const cookies = new Array(difficulty)
    return cookies.fill('')
  }

  return (
    <OverviewContainer>
      <GridContainer>
        <Favorite />

        <LinkToSingleRecipe2 to={`/recipeDetailed/${id}`}>
          <Image src={titleImage} alt={recipeName} />
        </LinkToSingleRecipe2>
        <LinkToSingleRecipe1 to={`/recipeDetailed/${id}`}>
          <Name>{recipeName}</Name>
        </LinkToSingleRecipe1>
        <TimeEfford>
          <Time>
            <Label>Time: </Label>
            <WatchMinutes>
              <Stopwatch src={IconStopwatch} />
              <Label>{time} min</Label>
            </WatchMinutes>
          </Time>
          <Difficulty>
            <Label>Level of Effort: </Label>
            {getCookies(difficulty).map(element => (
              <Cookie src={IconCookie} />
            ))}
          </Difficulty>
        </TimeEfford>

        <Tags tags={tags} />
      </GridContainer>
    </OverviewContainer>
  )
}
