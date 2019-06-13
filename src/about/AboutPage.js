import React from 'react';
import { GridStyle, MainArea, AboutContainer } from './aboutStyle';

import Header from '../header-footer/Header';
import Project from './Project';
import Convert from './Convert';
import Footer from '../header-footer/Footer';

import IconPieList from '../images/IconPieList.svg';
import IconChefActive from '../images/IconChefActive.svg';

export default function AboutPage({ history }) {
  return (
    <GridStyle>
      <Header title="About ..." />
      <MainArea>
        <AboutContainer>
          <Project />
          <Convert />
        </AboutContainer>
      </MainArea>
      <Footer
        history={history}
        srcIconPieList={IconPieList}
        srcIconChef={IconChefActive}
      />
    </GridStyle>
  );
}
