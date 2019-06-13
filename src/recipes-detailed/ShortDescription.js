import React from 'react';
import {
  BoxContainer,
  BoxInnerContainer,
  Headline,
  LinkButton,
  ButtonLabel,
} from './recipeDetailedStyle';

export default function ShortDescription({ recipe }) {
  const { shortDescription, _id } = recipe;
  return (
    <BoxContainer>
      <BoxInnerContainer>
        <Headline>Description:</Headline>
        {shortDescription.map(paragraph => (
          <p>{paragraph}</p>
        ))}
        <LinkButton to={`/step-by-step/${_id}`}>
          <ButtonLabel>step-by-step description</ButtonLabel>
        </LinkButton>
      </BoxInnerContainer>
    </BoxContainer>
  );
}
