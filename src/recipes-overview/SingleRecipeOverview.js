import React from 'react'
import styled from 'styled-components'

import SnickerDoodles from '../images/SnickerDoodles.jpg'
import IconStopwatch from '../images/IconStopwatch.png'
import IconCookieActive from '../images/IconCookieActive.png'

import Tags from './Tags'

const StyledRecipeOverview = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid darkorchid;
`
const StyledImage = styled.img`
  border: 1px solid darkmagenta;
  border-radius: 40%;
`
const StyledName = styled.p`
  color: darkorchid;
`
const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
`
const FirstColumn = styled.div`
  grid-column: 1;
`
const SecondColumn = styled.div`
  grid-column: 2;
`
const StyledStopwatch = styled.img``
const StyledCookie = styled.img``

export default function SingleRecipeOverview() {
  function getCookies() {
    const cookies = new Array(recipe1.difficulty)
    return cookies.fill('')
  }
  /*{for (let i = 1; i < recipe1.difficulty+1, i++){
          <StyledCookie src={IconCookieActive} />
      }}
  */
  return (
    <StyledRecipeOverview>
      <StyledImage src={SnickerDoodles} alt="Ein Foto von Keksen" />
      <StyledName>{recipe1.name}</StyledName>
      <StyledDiv>
        <FirstColumn>
          <StyledStopwatch src={IconStopwatch} />
        </FirstColumn>
        <SecondColumn>zweite</SecondColumn>
      </StyledDiv>
      {console.log(recipe1.difficulty)}
      {getCookies(recipe1.difficulty).map(element => (
        <StyledCookie src={IconCookieActive} />
      ))}
      <StyledDiv />
      <Tags />
    </StyledRecipeOverview>
  )
}

const recipe1 = {
  id: 'recipe01',
  name: 'Snicker Doodles',
  time: 38,
  difficulty: 3,
  ingredients: [
    [120, 'g', 'vegetable margarine'],
    [60, 'g', 'cane sugar'],
    [1, 'teaspoon', 'vanilla extract'],
    [220, 'g', 'wheat flour (type 550)'],
    [10, 'g', 'cornstarch'],
    [1, 'teaspoon', 'baking powder'],
    [0.5, 'teaspoon', 'soda'],
    [4, 'tablespoons', 'vegetable milk or water'],
    [2, 'tablespoons', 'cane sugar'],
    [0.75, 'teaspoon', 'cinnamon'],
  ],
  shortDescription: [
    '1. Put the margarine and 60 g sugar in a mixing bowl and beat until fluffy with a hand mixer or a food processor.',
    '2. Sift flour, starch, baking soda and baking soda in a second mixing bowl and mix gently.',
    '3.  Add the flour mixture slowly to the margarine. Add vanilla extract and vegetable milk / water and mix it again.',
    '4. Preheat oven to 175ºC top / bottom heat.',
    '5. Mix cinnamon and the rest of sugar for the cinnamon-sugar mixture in a small bowl.',
    '6. Now form balls from the dough that have a diameter of about 3.5cm and roll in cinnamon-sugar mixture.',
    '7. Place the balls approx. 6cm apart from each other on a baking tray lined with a reusable baking mat or baking paper and flatten with the palm of the hand.',
    '8. Bake in the oven on a medium rack for about 8-10 minutes. Afterwards let them cool down.',
  ],
  tags: ['vegan', 'sweet', 'everyday classic'],
}
