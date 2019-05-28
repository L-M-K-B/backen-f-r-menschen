import React from 'react'
import {
  BoxContainer,
  BoxInnerContainer,
  Headline,
} from './recipeDetailedStyle'

export default function ShortDescription({ recipe }) {
  const { shortDescription } = recipe
  return (
    <BoxContainer>
      <BoxInnerContainer>
        <Headline>Description:</Headline>
        {shortDescription.map(paragraph => (
          <p>{paragraph}</p>
        ))}
      </BoxInnerContainer>
    </BoxContainer>
  )
}
