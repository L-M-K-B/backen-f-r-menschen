import React from 'react'

export default function RecipeStage() {
  return <p>hier folgt ein Rezept</p>
}

const recipe = {
  id: 'recipe01',
  recipeName: 'Snicker Doodles',
  time: 38,
  difficulty: 2,
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
  titleImage: '/images/SnickerDoodles.jpg',
}
