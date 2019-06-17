import styled from 'styled-components';
import {
  AppWidthS,
  AppWidthM,
  AppWidthL,
  BoxWidthS,
  BoxWidthM,
  borderRadius,
  orangeBoxShadow,
} from '../misc/styleVariables';
import { oShadow } from '../misc/colors';

export const GridHeaderSmall = styled.div`
  display: grid;
  grid-template-rows: 55px 1fr;
  height: 100vh;
  width: 100vw;
`;

export const GridHeaderLarge = styled.div`
  display: grid;
  grid-template-rows: 89px 1fr;
  width: 100vw;
  height: 100vh;
`;

export const MainArea = styled.main`
  grid-row: 2;
  overflow: hidden;
  overflow-y: scroll;
  display: flex;
  justify-content: center;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 15px;
  @media (max-width: 374px) {
    width: ${BoxWidthS};
    margin: 15px 5px 120px;
  }
  @media (min-width: 375px) {
    width: ${BoxWidthM};
    margin: 15px 20px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const BoxContainer = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding: 1px 0;
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
