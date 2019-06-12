//import { Link } from 'react-router-dom';
import styled from 'styled-components';
//import {} from '../misc/colors';

export const GridStep = styled.div`
  display: grid;
  grid-template-rows: 89px 1fr;
  width: 375px;
  height: 100vh;
`;
export const MainArea = styled.main`
  grid-row: 2;
  margin-bottom: 26px;
  padding-bottom: 55px;
`;
export const ContentContainer = styled.div`
  width: 335px;
  margin: 50px 20px 0;
`;
export const Explanation = styled.p`
  margin: 25px 0;
  font-size: 20px;
  text-align: center;
`;
