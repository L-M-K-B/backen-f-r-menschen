import React from 'react';
import { StyledTagList } from './recipeDetailedStyle';

export default function Tags({ tags }) {
  return <StyledTagList>{tags.join('  ●  ')}</StyledTagList>;
}
