import styled from 'styled-components';
import {
  oShadow,
  AppWidthS,
  AppWidthM,
  AppWidthL,
  BoxWidthS,
  BoxWidthM,
  borderRadius,
  orangeBoxShadow,
} from './styleVariables';

export const MainArea = styled.main`
  grid-row: 2;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 374px) {
    min-width: ${AppWidthS};
  }
  @media (min-width: 375px) and (max-width: 499px) {
    width: ${AppWidthM};
  }
  @media (min-width: 500px) {
    width: ${AppWidthL};
  }
`;

export const ContentContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 65px;

  @media (max-width: 374px) {
    width: ${BoxWidthS};
    margin: 15px 5px 0;
  }
  @media (min-width: 375px) {
    width: ${BoxWidthM};
    margin: 15px 20px 0;
  }
`;

export const BoxContainer = styled.div`
  width: 100%;
  min-height: 55px;
  margin-bottom: 30px;
  padding-top: 5px;
  border-radius: ${borderRadius};
  box-shadow: ${orangeBoxShadow} ${oShadow};
`;

export const BoxInnerContainer = styled.div`
  border-radius: ${borderRadius};
  margin: 8px;
`;

export const BoxHeadline = styled.p`
  margin: 0;
  font-family: 'Domine', serif;
  font-size: 24px;
`;
