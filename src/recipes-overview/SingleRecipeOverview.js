import React, { useState } from 'react'
import { getLocal } from '../services'
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
} from './recipesOverviewStyle'

import IconFavorite from '../images/IconFavorite.png'
import IconFavoriteActive from '../images/IconFavoriteActive.png'
import IconStopwatch from '../images/IconStopwatch.png'
import IconCookie from '../images/IconCookie.png'

import Tags from './Tags'

export default function SingleRecipeOverview({ recipe, onToggleFavorite }) {
  const { id, recipeName, time, difficulty, tags, titleImage } = recipe

  const [favorite, setFavorite] = useState(getLocal(`${id}Favorite`) || false)

  function getCookies() {
    const cookies = new Array(difficulty)
    return cookies.fill('')
  }

  return (
    <OverviewContainer>
      <GridContainer>
        <Favorite />

        <LinkToSingleRecipe1 to={`/recipe/${id}`}>
          <Name>{recipeName}</Name>
        </LinkToSingleRecipe1>
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
        <LinkToSingleRecipe2 to={`/recipe/${id}`}>
          <Image src={titleImage} alt={recipeName} />
        </LinkToSingleRecipe2>

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
