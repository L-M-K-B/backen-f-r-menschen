import React from 'react';
import { DescriptionP, LinkButton, ButtonLabel } from './recipeDetailedStyle';
import {
  BoxContainer,
  BoxInnerContainer,
  BoxHeadline,
} from '../common/containerStyles';

export default function ShortDescription({ recipe }) {
  const { shortDescription, _id } = recipe;
  return (
    <BoxContainer>
      <BoxInnerContainer>
        <BoxHeadline>Description:</BoxHeadline>
        {shortDescription.map(paragraph => (
          <DescriptionP>{paragraph}</DescriptionP>
        ))}
        <LinkButton to={`/step-by-step/${_id}`}>
          <ButtonLabel>step-by-step description</ButtonLabel>
        </LinkButton>
      </BoxInnerContainer>
    </BoxContainer>
  );
}
