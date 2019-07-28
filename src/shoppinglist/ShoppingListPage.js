import React from 'react';
import { MainArea, ContentContainer } from '../common/containerStyles';
import { GridHeaderSmall } from '../common/grid';

import Header from '../header-footer/Header';
import Footer from '../header-footer/Footer';

import IconPieList from '../images/IconPieList.svg';
import IconChef from '../images/IconChef.svg';

export default function ShoppingListPage(history) {
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
