import React from 'react';
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
} from './recipesOverviewStyle';

import IconFavorite from '../images/IconFavorite.png';
import IconFavoriteActive from '../images/IconFavoriteActive.png';
import IconStopwatch from '../images/IconStopwatch.png';
import IconCookie from '../images/IconCookie.png';

import Tags from './TagsOverview';

export default function SingleRecipeOverview({
  recipe,
  favoriteStatus,
  onToggleFavorite,
}) {
  const { _id, recipeName, time, difficulty, tags, titleImage } = recipe;

  function getCookies() {
    const cookies = new Array(difficulty);
    return cookies.fill('');
  }

  return (
    <OverviewContainer>
      <GridContainer>
        <LinkToSingleRecipe1 to={`/recipe/${_id}`}>
          <Name>{recipeName}</Name>
        </LinkToSingleRecipe1>
        <Favorite
          onClick={() => {
            onToggleFavorite(_id, !favoriteStatus);
          }}
        >
          {favoriteStatus ? (
            <img src={IconFavoriteActive} alt="Icon Favorite Pink" />
          ) : (
            <img src={IconFavorite} alt="Icon Favorite Orange" />
          )}
        </Favorite>
        <LinkToSingleRecipe2 to={`/recipe/${_id}`}>
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

        <Tags
          key={tag => {
            const index = tags.indexOf(tag);
            console.log('index', index);
            return index;
          }}
          tags={tags}
        />
      </GridContainer>
    </OverviewContainer>
  );
}
