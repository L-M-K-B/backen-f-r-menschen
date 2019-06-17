import React from 'react';
import { MainArea, ContentContainer } from '../common/containerStyles';
import { GridHeaderSmall } from '../common/grid';

import Header from '../header-footer/Header';
import Project from './Project';
import Convert from './Convert';
import Footer from '../header-footer/Footer';

import IconPieList from '../images/IconPieList.svg';
import IconChefActive from '../images/IconChefActive.svg';

export default function AboutPage({ history }) {
  return (
    <GridHeaderSmall>
      <Header title="About ..." />
      <MainArea>
        <ContentContainer>
          <Project />
          <Convert />
        </ContentContainer>
      </MainArea>
      <Footer
        history={history}
        srcIconPieList={IconPieList}
        srcIconChef={IconChefActive}
      />
    </GridHeaderSmall>
  );
}
