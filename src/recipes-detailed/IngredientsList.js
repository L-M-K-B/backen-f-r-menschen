import React from 'react';
import {
  BoxContainer,
  BoxInnerContainer,
  BoxHeadline,
} from '../misc/styleComponents';

import SingleIngredient from './SingleIngredient';

export default function IngredientList({ recipe }) {
  const { ingredients } = recipe;
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
      </BoxInnerContainer>
    </BoxContainer>
  );
}
