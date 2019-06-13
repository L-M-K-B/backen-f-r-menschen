import styled from 'styled-components';
import { wShadow } from '../misc/colors';

export const GridStep = styled.div`
  display: grid;
  grid-template-rows: 89px 1fr;
  width: 375px;
  height: 100vh;
`;
export const MainArea = styled.main`
  grid-row: 2;
`;
export const ContentContainer = styled.div`
  width: 335px;
  margin: 50px 20px 0;
`;
export const Explanation = styled.p`
  position: relative;
  top: -20px;
  margin: 0;
  font-size: 20px;
  text-align: center;
`;
export const ArrowBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 335px;
`;
export const ArrowLeftBox = styled.div`
  position: relative;
  top: -190px;
  z-index: 9;
  margin-left: 5px;
  height: 45px;
  width: 45px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${wShadow};
`;
export const ArrowRightBox = styled.div`
  position: relative;
  top: -190px;
  z-index: 9;
  margin-right: 5px;
  height: 45px;
  width: 45px;
  border-radius: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${wShadow};
`;
export const IconArrowLeft = styled.img`
  opacity: 0.8;
`;
export const IconArrowRight = styled.img`
  opacity: 0.8;
`;
/*
 
z-index: 15;
  position: absolute;
  top: 40%;
  right: 5%; */
