import React from 'react'
import {
  BoxContainer,
  BoxInnerContainer,
  Headline,
} from './recipeDetailedStyle'
import SingleIngredient from './SingleIngredient'

export default function IngredientList({ recipe }) {
  const { ingredients } = recipe
  return (
    <BoxContainer>
      <BoxInnerContainer>
        <Headline>List of Ingredients:</Headline>
        {ingredients.map(ingredient => (
          <SingleIngredient
            key={ingredient[0] + ingredient[2]}
            ingredient={ingredient}
          />
        ))}
      </BoxInnerContainer>
    </BoxContainer>
  )
}
