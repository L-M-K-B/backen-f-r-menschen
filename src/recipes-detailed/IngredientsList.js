import React from 'react';
import { setLocal } from '../services';
import {
  BoxContainer,
  BoxInnerContainer,
  BoxHeadline,
} from '../common/containerStyles';
import { Button } from './recipeDetailedStyle';

import SingleIngredient from './SingleIngredient';

export default function IngredientList({ recipe, id }) {
  const { ingredients } = recipe;

  function handleClick() {
    setLocal(`${id}Ingredients`, ingredients);
  }

  return (
    <BoxContainer>
      <BoxInnerContainer>
        <BoxHeadline>List of Ingredients:</BoxHeadline>
        {ingredients.map(ingredient => (
          <SingleIngredient
            key={ingredient[0] + ingredient[2]}
            ingredient={ingredient}
          />
        ))}
        <Button onClick={handleClick}>Add ingredients to shopping list</Button>
      </BoxInnerContainer>
    </BoxContainer>
  );
}
