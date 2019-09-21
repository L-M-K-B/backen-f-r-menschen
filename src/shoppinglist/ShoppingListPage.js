import React from 'react';
import { getLocal } from '../services';
import { MainArea, ContentContainer } from '../common/containerStyles';
import { GridHeaderSmall } from '../common/grid';

import Header from '../header-footer/Header';
import Footer from '../header-footer/Footer';

import IconPieList from '../images/IconPieList.svg';
import IconChef from '../images/IconChef.svg';

export default function ShoppingListPage(history) {
  const ingredientsList = getLocal('shopIngredients');

  const sortedIngredientsList = ingredientsList.sort((a, b) => {
    if (a[2] < b[2]) {
      return -1;
    } else if (a[2] > b[2]) {
      return 1;
    } else {
      return 0;
    }
  });
  console.log(sortedIngredientsList);

  /*ingredientsList.map(ingredient => {
    if (shoppingList.includes(ingredient[2])) {}
  });*/

  const shoppingList = [];
  function mergeIngredients() {
    const listLength = ingredientsList.length;
    let i;
    for (i = 0; i < listLength - 1; i++) {
      if (sortedIngredientsList[i][2] === sortedIngredientsList[i + 1][2]) {
        shoppingList.push([
          Number(sortedIngredientsList[i][3]) + Number(sortedIngredientsList[i + 1][3]),
          sortedIngredientsList[i][4],
          sortedIngredientsList[i + 1][2],
        ]);
      } else if (shoppingList.)
    }
  }

  return (
    <GridHeaderSmall>
      <Header title="Shopping List" />
      <MainArea>
        <ContentContainer>
          <p>Hier erscheint demnächst eine Einkaufsliste</p>
        </ContentContainer>
        <Footer
          history={history}
          srcIconPieList={IconPieList}
          srcIconChef={IconChef}
        />
      </MainArea>
    </GridHeaderSmall>
  );
}
