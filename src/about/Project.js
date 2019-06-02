import React from 'react';
import { BoxContainer, BoxInnerContainer, Headline } from './aboutStyle';

export default function Project() {
  return (
    <BoxContainer>
      <BoxInnerContainer>
        <Headline>... this project</Headline>
        <p>
          A few months ago I startet learning how to develop web pages and apps
          in a professional manner. In order to complete the course I was asked
          to build an own app until the end of June 2019. On these pages you can
          discover the result.
        </p>
        <p>
          Besides of my passion for technical things (web development, aircraft,
          photography) I love to bake. As I am often discussing the degree of
          difficulty when people are enjoing my cakes, cookies and chocolates, I
          decided to show that everyone is able to make such things. It only
          requires the most detailed instructions you can imagine. They need to
          be as exact as science.
        </p>
        <p>
          To make baking even more exiting I am experimenting a lot with
          ingredients and styles of diets. But my main criterion for every
          recipe is to use only natural ingredients. That is why I never add
          artificial flavours, colours, etc.
        </p>
      </BoxInnerContainer>
    </BoxContainer>
  );
}
