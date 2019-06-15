import React from 'react';
import { LinkButton, ButtonLabel } from './recipeDetailedStyle';
import {
  BoxContainer,
  BoxInnerContainer,
  BoxHeadline,
} from '../misc/styleComponents';

export default function ShortDescription({ recipe }) {
  const { shortDescription, _id } = recipe;
  return (
    <BoxContainer>
      <BoxInnerContainer>
        <BoxHeadline>Description:</BoxHeadline>
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
